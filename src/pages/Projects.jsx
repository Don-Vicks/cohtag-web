import React from 'react';
import { CheckCircle, Shield, GraduationCap, Heart, Briefcase } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const welfareOffers = [
    "Financial Assistance",
    "Health and Medical Support",
    "Professional Development Funding",
    "Legal Representation",
    "Bereavement Support",
    "Retirement Planning Advisory",
    "Housing and Loan Assistance Schemes",
    "Family Support Services",
    "Emergency Relief Funds",
    "Maternity/Paternity Support",
    "Advocacy for Favorable Conditions of Service",
    "Networking and Peer Support",
    "Recognition and Awards"
  ];

  return (
    <div className="projects-page">
      <header className="page-header">
        <div className="container">
          <h1>Projects & Initiatives</h1>
          <p>Discover our programs, activities, and welfare schemes designed to support and elevate health educators.</p>
        </div>
      </header>

      {/* Welfare Priority Section */}
      <section className="welfare-section py-16">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="section-title text-primary">Your Welfare is Our Priority</h2>
            <p className="section-subtitle">
              COHTAG believes that the well-being of our educators directly impacts the quality of 
              health training in Ghana. Our welfare scheme offers comprehensive support to all registered members.
            </p>
          </div>

          <div className="welfare-grid">
            <div className="welfare-list-container card border-gold">
              <h3 className="mb-6 text-xl">The 13 Core Welfare Offers</h3>
              <ul className="welfare-list">
                {welfareOffers.map((offer, index) => (
                  <li key={index}>
                    <CheckCircle size={20} className="text-accent" />
                    <span>{offer}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="welfare-highlights">
              <div className="highlight-card mb-6">
                <div className="highlight-icon bg-green-light"><Shield size={24} className="text-primary" /></div>
                <div>
                  <h4 className="text-primary-dark mb-2">Protection & Advocacy</h4>
                  <p className="text-sm">We actively negotiate with stakeholders and government bodies to ensure favorable conditions of service, competitive remuneration, and a safe working environment for all tutors.</p>
                </div>
              </div>
              <div className="highlight-card mb-6">
                <div className="highlight-icon bg-gold-light"><Heart size={24} className="text-accent-dark" /></div>
                <div>
                  <h4 className="text-primary-dark mb-2">Financial & Social Security</h4>
                  <p className="text-sm">From emergency relief to retirement planning, our financial schemes are structured to provide a safety net for members during critical life events.</p>
                </div>
              </div>
              <div className="highlight-card">
                <div className="highlight-icon bg-blue-light"><GraduationCap size={24} className="text-secondary" /></div>
                <div>
                  <h4 className="text-primary-dark mb-2">Professional Growth</h4>
                  <p className="text-sm">Continuous learning is essential. We facilitate funding and access to workshops, seminars, and advanced degree programs for our members.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs and Activities (Merged) */}
      <section className="programs-section py-16 bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Programs & Activities</h2>
            <p className="section-subtitle">How we actively engage our community</p>
          </div>

          <div className="grid grid-cols-3">
            <div className="card text-center">
              <div className="card-icon mx-auto"><GraduationCap size={32} /></div>
              <h3>Capacity Building</h3>
              <p className="text-sm mt-2">Regular training sessions focused on modern pedagogical skills, educational technology, and subject-matter advancements to keep our tutors at the forefront of health education.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon mx-auto"><Briefcase size={32} /></div>
              <h3>Annual Conferences</h3>
              <p className="text-sm mt-2">National and regional gatherings that provide a platform for networking, presenting research, policy discussions, and celebrating excellence in health training.</p>
            </div>
            <div className="card text-center">
              <div className="card-icon mx-auto"><Shield size={32} /></div>
              <h3>Policy Advocacy Forums</h3>
              <p className="text-sm mt-2">Structured engagements with the Ministry of Health, Nursing and Midwifery Council, and other regulatory bodies to influence policies affecting health educators.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="commitment-section py-24 text-center">
        <div className="container commitment-container">
          <h2 className="commitment-title">Our Commitment</h2>
          <p className="commitment-text">
            COHTAG remains resolute in its mission to uplift the standard of health education in Ghana. 
            We are committed to transparency, inclusivity, and the relentless pursuit of better conditions 
            for every tutor in our association. Together, we build the foundation of Ghana's healthcare future.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Projects;
