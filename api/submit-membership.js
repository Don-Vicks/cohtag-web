import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = req.body;
    
    // Construct the email content
    const emailHtml = `
      <h2>New COHTAG Membership Registration</h2>
      <p>A new membership registration has been submitted. Details below:</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Full Name</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.fullName}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Date of Birth</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.dob}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Nationality</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.nationality}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone Number</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.phone}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Email Address</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.email}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Place of Work</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.placeOfWork}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Region</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.region}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Staff ID</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.staffId}</td></tr>
        <tr><td style="padding: 8px; border: 1px solid #ddd;"><strong>Current Rank</strong></td><td style="padding: 8px; border: 1px solid #ddd;">${data.rank}</td></tr>
      </table>
      
      <h3>Uploaded Documents</h3>
      <ul>
        <li><strong>Passport Picture:</strong> <a href="${data.passportPicture}">View Document</a></li>
        <li><strong>PIN Upload:</strong> <a href="${data.pinUpload}">View Document</a></li>
        <li><strong>Registration Certificate:</strong> <a href="${data.registrationCertificate}">View Document</a></li>
      </ul>
    `;

    const response = await resend.emails.send({
      from: 'COHTAG Portal <onboarding@resend.dev>', // You should use a verified domain in production
      to: ['cohtag@gmail.com'], // The destination email
      subject: `New Membership Registration: ${data.fullName}`,
      html: emailHtml,
    });

    if (response.error) {
      console.error('Resend Error:', response.error);
      return res.status(500).json({ error: response.error.message });
    }

    return res.status(200).json({ success: true, id: response.data.id });
  } catch (error) {
    console.error('Submission Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
