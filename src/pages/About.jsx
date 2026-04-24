import React from 'react';
import { CheckCircle } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <header className="page-header">
        <div className="container">
          <h1>About COHTAG</h1>
          <p>Learn about our history, mission, and the structure that guides our association.</p>
        </div>
      </header>

      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-2 align-center">
            <div>
              <h2 className="section-title">Who We Are</h2>
              <p className="mb-4">
                The Colleges of Health Teachers' Association of Ghana (COHTAG) is the recognized and 
                official body representing tutors and educators in health training institutions across Ghana. 
                Established to champion the cause of health educators, COHTAG serves as a unified platform 
                for professional development, welfare advocacy, and standard-setting in health education.
              </p>
              <p className="mb-4">
                We believe that the quality of healthcare in Ghana is directly linked to the quality of 
                training provided to healthcare professionals. By supporting our educators, we indirectly 
                support the health and well-being of the entire nation.
              </p>
              <h3 className="mt-8 mb-2 text-accent">Registration & Legal Status</h3>
              <p>
                COHTAG is legally registered under the laws of Ghana and operates within the frameworks 
                established by the relevant educational and health regulatory bodies.
              </p>
            </div>
            <div className="vision-mission-cards">
              <div className="card mb-4 border-green">
                <h3>Our Vision</h3>
                <p>To be the premier association of health educators in Ghana, recognized for excellence, innovation, and unwavering commitment to the welfare of its members and the advancement of health training.</p>
              </div>
              <div className="card mb-4 border-gold">
                <h3>Our Mission</h3>
                <p>To empower health tutors through robust welfare schemes, continuous professional development, and strong advocacy, ensuring they deliver the highest standard of health education.</p>
              </div>
              <div className="card border-blue">
                <h3>Our Motto</h3>
                <p className="motto-text">"Excellence in Health Education, Solidarity in Welfare"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="aims-section py-16 bg-light">
        <div className="container">
          <h2 className="section-title text-center mb-12">Aims and Objectives</h2>
          <div className="grid grid-cols-2">
            <ul className="aims-list">
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To bring together all tutors in health training institutions in Ghana under one umbrella.</span>
              </li>
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To promote and protect the socio-economic and professional interests of its members.</span>
              </li>
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To seek the welfare of members and negotiate for better conditions of service.</span>
              </li>
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To establish welfare schemes for the benefit of members.</span>
              </li>
            </ul>
            <ul className="aims-list">
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To promote high standards of professional conduct and practice among health educators.</span>
              </li>
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To foster a good relationship with the Ministry of Health and other stakeholders.</span>
              </li>
              <li>
                <CheckCircle className="aim-icon text-primary" size={24} />
                <span>To organize training programs, seminars, and workshops for members' continuous development.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="structure-section py-16">
        <div className="container">
          <h2 className="section-title text-center mb-12">Structure and Governance</h2>
          
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mb-4 text-secondary">Governing Bodies</h3>
              <div className="governance-card mb-4">
                <h4>National Delegates Congress</h4>
                <p>The highest decision-making body of the association, comprising representatives from all member institutions.</p>
              </div>
              <div className="governance-card mb-4">
                <h4>National Executive Council (NEC)</h4>
                <p>Responsible for the day-to-day administration and implementation of policies decided by the Congress.</p>
              </div>
              <div className="governance-card">
                <h4>Zonal/Regional Executives</h4>
                <p>Coordinate activities and represent the association at the regional levels.</p>
              </div>
            </div>
            
            <div>
              <h3 className="mb-4 text-secondary">Zonal Branches</h3>
              <p className="mb-4">COHTAG is organized into designated zones to ensure effective communication, grassroots participation, and efficient administration across the country.</p>
              
              <div className="zones-grid">
                <div className="zone-item">Northern Zone</div>
                <div className="zone-item">Middle Zone</div>
                <div className="zone-item">Southern Zone</div>
                <div className="zone-item">Western Zone</div>
                {/* Adjust based on actual zonal structure */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
