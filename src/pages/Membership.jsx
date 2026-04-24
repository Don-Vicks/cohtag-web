import React, { useState } from 'react';
import { Upload, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import './Membership.css';

const Membership = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    nationality: '',
    phone: '',
    email: '',
    placeOfWork: '',
    region: '',
    staffId: '',
    rank: '',
    declaration: false
  });

  const [files, setFiles] = useState({
    passportPicture: null,
    pinUpload: null,
    registrationCertificate: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileChange = (e) => {
    const { name, files: selectedFiles } = e.target;
    if (selectedFiles.length > 0) {
      setFiles({
        ...files,
        [name]: selectedFiles[0]
      });
    }
  };

  const uploadToCloudinary = async (file) => {
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;
    
    if (!cloudName || !uploadPreset) {
      throw new Error("Cloudinary configuration missing");
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`, {
      method: 'POST',
      body: formData
    });

    if (!response.ok) {
      throw new Error("Failed to upload file");
    }

    const data = await response.json();
    return data.secure_url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage('');

    try {
      // 1. Upload files to Cloudinary
      const fileUrls = {};
      
      for (const [key, file] of Object.entries(files)) {
        if (file) {
          try {
            fileUrls[key] = await uploadToCloudinary(file);
          } catch (err) {
            console.error(`Upload error for ${key}:`, err);
            // If we don't have env vars in development, mock the URLs for UI testing
            if (err.message === "Cloudinary configuration missing" && import.meta.env.DEV) {
              fileUrls[key] = `https://mock-url.com/${key}-${Date.now()}`;
            } else {
              throw new Error(`Failed to upload ${key}. Please try again.`);
            }
          }
        }
      }

      // 2. Prepare payload
      const payload = {
        ...formData,
        ...fileUrls
      };

      // 3. Send to Serverless Endpoint
      const apiEndpoint = import.meta.env.VITE_RESEND_API_ENDPOINT || '/api/submit-membership';
      
      // In a real environment, this fetch would send to the proxy/serverless function
      // For development/UI testing without backend, we'll mock success if endpoint is default
      if (import.meta.env.DEV && apiEndpoint === '/api/submit-membership') {
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network
        setSubmitStatus('success');
      } else {
        const response = await fetch(apiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        if (!response.ok) {
          throw new Error("Server rejected the submission");
        }
        setSubmitStatus('success');
      }

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setErrorMessage(error.message || "An unexpected error occurred during submission.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="membership-page">
      <header className="page-header">
        <div className="container">
          <h1>Membership</h1>
          <p>Join the unified voice of health educators in Ghana.</p>
        </div>
      </header>

      {/* Information Sections */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2">
            
            <div className="info-column">
              <h2 className="mb-6 text-primary">Eligibility</h2>
              <div className="card mb-8">
                <p>Membership is open to all tutors and educators actively teaching in accredited health training institutions across Ghana. This includes nurses, midwives, allied health professionals, and other specialized tutors recognized by the Ministry of Health.</p>
              </div>

              <h2 className="mb-6 text-primary">Rights & Benefits</h2>
              <div className="card mb-8">
                <ul className="info-list">
                  <li><CheckCircle size={20} className="text-accent" /> Participate in all activities and decision-making processes.</li>
                  <li><CheckCircle size={20} className="text-accent" /> Vote and be voted for into executive positions.</li>
                  <li><CheckCircle size={20} className="text-accent" /> Access to COHTAG welfare schemes and financial assistance programs.</li>
                  <li><CheckCircle size={20} className="text-accent" /> Benefit from negotiated conditions of service and advocacy.</li>
                  <li><CheckCircle size={20} className="text-accent" /> Participate in subsidized capacity building and training programs.</li>
                  <li><CheckCircle size={20} className="text-accent" /> Legal and professional representation in matters relating to employment.</li>
                </ul>
              </div>
            </div>

            <div className="info-column">
              <h2 className="mb-6 text-primary">Responsibilities</h2>
              <div className="card mb-8">
                <ul className="info-list">
                  <li><CheckCircle size={20} className="text-secondary" /> Pay dues, levies, and contributions promptly.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Attend branch, zonal, and national meetings regularly.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Uphold and defend the constitution of COHTAG.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Protect the image and integrity of the association.</li>
                </ul>
              </div>

              <h2 className="mb-6 text-primary">Code of Ethics</h2>
              <div className="card">
                <p className="mb-4">Members are expected to demonstrate the highest level of professionalism, integrity, and dedication to duty. Tutors must:</p>
                <ul className="info-list">
                  <li><CheckCircle size={20} className="text-secondary" /> Serve as role models to students.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Maintain confidentiality regarding student records.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Continuously update their knowledge and pedagogical skills.</li>
                  <li><CheckCircle size={20} className="text-secondary" /> Foster a safe and conducive learning environment.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-16 bg-light" id="register">
        <div className="container">
          <div className="form-container">
            <div className="text-center mb-8">
              <h2 className="section-title">Membership Registration</h2>
              <p className="section-subtitle">Complete the form below to register as a member of COHTAG</p>
            </div>

            {submitStatus === 'success' ? (
              <div className="success-message card border-green text-center py-12">
                <CheckCircle size={64} className="text-primary mx-auto mb-4" />
                <h3 className="text-2xl mb-2 text-primary">Registration Submitted!</h3>
                <p>Your membership application has been received successfully. The National Secretariat will review your details and contact you shortly.</p>
                <button 
                  className="btn btn-outline mt-8"
                  onClick={() => {
                    setSubmitStatus(null);
                    setFormData({
                      fullName: '', dob: '', nationality: '', phone: '', email: '', 
                      placeOfWork: '', region: '', staffId: '', rank: '', declaration: false
                    });
                    setFiles({ passportPicture: null, pinUpload: null, registrationCertificate: null });
                  }}
                >
                  Submit Another Registration
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="registration-form card border-gold">
                
                {submitStatus === 'error' && (
                  <div className="error-alert mb-6">
                    <AlertCircle size={20} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="form-section">
                  <h3 className="form-section-title">Personal Information</h3>
                  <div className="grid grid-cols-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} required className="form-control" placeholder="Surname First" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Date of Birth *</label>
                      <input type="date" name="dob" value={formData.dob} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Nationality *</label>
                      <input type="text" name="nationality" value={formData.nationality} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Phone Number(s) *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group col-span-2">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="form-control" />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Professional Details</h3>
                  <div className="grid grid-cols-2">
                    <div className="form-group col-span-2">
                      <label className="form-label">Place of Work (Institution) *</label>
                      <input type="text" name="placeOfWork" value={formData.placeOfWork} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Region *</label>
                      <select name="region" value={formData.region} onChange={handleInputChange} required className="form-control">
                        <option value="">Select Region</option>
                        <option value="Ahafo">Ahafo</option>
                        <option value="Ashanti">Ashanti</option>
                        <option value="Bono">Bono</option>
                        <option value="Bono East">Bono East</option>
                        <option value="Central">Central</option>
                        <option value="Eastern">Eastern</option>
                        <option value="Greater Accra">Greater Accra</option>
                        <option value="North East">North East</option>
                        <option value="Northern">Northern</option>
                        <option value="Oti">Oti</option>
                        <option value="Savannah">Savannah</option>
                        <option value="Upper East">Upper East</option>
                        <option value="Upper West">Upper West</option>
                        <option value="Volta">Volta</option>
                        <option value="Western">Western</option>
                        <option value="Western North">Western North</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Staff ID *</label>
                      <input type="text" name="staffId" value={formData.staffId} onChange={handleInputChange} required className="form-control" />
                    </div>
                    <div className="form-group col-span-2">
                      <label className="form-label">Current Rank *</label>
                      <input type="text" name="rank" value={formData.rank} onChange={handleInputChange} required className="form-control" placeholder="e.g. Senior Health Tutor" />
                    </div>
                  </div>
                </div>

                <div className="form-section">
                  <h3 className="form-section-title">Document Uploads</h3>
                  <div className="upload-grid">
                    <div className="form-group">
                      <label className="form-label">Passport Picture *</label>
                      <div className="file-upload-wrapper">
                        <input type="file" name="passportPicture" onChange={handleFileChange} required accept="image/*" className="file-input" id="passportPicture" />
                        <label htmlFor="passportPicture" className="file-label">
                          <Upload size={20} className="mb-2 text-primary" />
                          <span>{files.passportPicture ? files.passportPicture.name : 'Choose Image'}</span>
                        </label>
                      </div>
                    </div>
                    
                    <div className="form-group">
                      <label className="form-label">PIN Upload *</label>
                      <div className="file-upload-wrapper">
                        <input type="file" name="pinUpload" onChange={handleFileChange} required accept=".pdf,image/*" className="file-input" id="pinUpload" />
                        <label htmlFor="pinUpload" className="file-label">
                          <Upload size={20} className="mb-2 text-primary" />
                          <span>{files.pinUpload ? files.pinUpload.name : 'Choose File'}</span>
                        </label>
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Professional Registration Certificate *</label>
                      <div className="file-upload-wrapper">
                        <input type="file" name="registrationCertificate" onChange={handleFileChange} required accept=".pdf,image/*" className="file-input" id="registrationCertificate" />
                        <label htmlFor="registrationCertificate" className="file-label">
                          <Upload size={20} className="mb-2 text-primary" />
                          <span>{files.registrationCertificate ? files.registrationCertificate.name : 'Choose File'}</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-section declaration-section">
                  <label className="checkbox-wrapper">
                    <input type="checkbox" name="declaration" checked={formData.declaration} onChange={handleInputChange} required className="custom-checkbox" />
                    <span className="checkbox-text">
                      I declare that the information provided above is true and accurate to the best of my knowledge. I agree to abide by the Constitution and Code of Ethics of the Colleges of Health Teachers' Association of Ghana (COHTAG).
                    </span>
                  </label>
                </div>

                <div className="form-actions mt-8">
                  <button type="submit" className="btn btn-primary w-full submit-btn" disabled={isSubmitting || !formData.declaration}>
                    {isSubmitting ? (
                      <><Loader className="spin mr-2" size={20} /> Processing...</>
                    ) : (
                      'Submit Registration'
                    )}
                  </button>
                  <p className="text-center text-sm text-muted mt-4">
                    Your data is secure and will only be used for official COHTAG membership purposes.
                  </p>
                </div>

              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Membership;
