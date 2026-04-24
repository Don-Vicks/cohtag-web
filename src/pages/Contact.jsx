import React from 'react';
import { Mail, Phone, MapPin, Globe, Users, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <header className="page-header">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with the National Secretariat for inquiries and support.</p>
        </div>
      </header>

      <section className="py-24 bg-light">
        <div className="container">
          <div className="grid grid-cols-2 align-start">
            
            <div className="contact-info-col">
              <h2 className="section-title mb-8">National Secretariat</h2>
              
              <div className="contact-card mb-6 card border-green">
                <div className="contact-icon-wrapper">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <h3 className="text-lg text-primary-dark mb-1">Email Address</h3>
                  <p className="text-muted mb-2">For all official correspondence and inquiries.</p>
                  <a href="mailto:cohtag@gmail.com" className="contact-link font-bold text-lg">cohtag@gmail.com</a>
                </div>
              </div>

              <div className="contact-card mb-6 card border-gold">
                <div className="contact-icon-wrapper">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg text-primary-dark mb-1">Phone Number</h3>
                  <p className="text-muted mb-2">Available Monday to Friday, 9am - 5pm.</p>
                  <p className="contact-link font-bold text-lg">+233 (0) XX XXX XXXX</p>
                  <span className="text-sm text-muted italic">(Line updating soon)</span>
                </div>
              </div>

              <div className="contact-card mb-8 card border-blue">
                <div className="contact-icon-wrapper">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg text-primary-dark mb-1">Office Location</h3>
                  <p className="text-muted">
                    National Secretariat<br />
                    Ghana<br />
                    (Digital address updating soon)
                  </p>
                </div>
              </div>

              <div className="social-links">
                <h3 className="text-lg text-primary-dark mb-4">Connect With Us</h3>
                <div className="social-icons-wrapper">
                  <a href="#" className="social-icon" aria-label="Social 1">
                    <Globe size={24} />
                  </a>
                  <a href="#" className="social-icon" aria-label="Social 2">
                    <Users size={24} />
                  </a>
                  <a href="#" className="social-icon" aria-label="Social 3">
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-form-col">
              <div className="card">
                <h2 className="mb-6">Send us a message</h2>
                <form>
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input type="text" className="form-control" placeholder="John Doe" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input type="email" className="form-control" placeholder="john@example.com" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Subject</label>
                    <input type="text" className="form-control" placeholder="How can we help?" />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Message</label>
                    <textarea className="form-control" rows="5" placeholder="Your message here..."></textarea>
                  </div>
                  <button type="button" className="btn btn-primary w-full" onClick={() => alert('Message sending will be enabled soon.')}>
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
