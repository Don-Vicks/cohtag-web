import React from 'react';
import { User } from 'lucide-react';
import './Leadership.css';

const Leadership = () => {
  const roles = [
    "National President",
    "National Vice President",
    "General Secretary",
    "Deputy General Secretary",
    "Financial Secretary",
    "National Treasurer",
    "Public Relations Officer",
    "National Organizer"
  ];

  return (
    <div className="leadership-page">
      <header className="page-header">
        <div className="container">
          <h1>Leadership</h1>
          <p>Meet the dedicated National Executive Council serving COHTAG.</p>
        </div>
      </header>

      <section className="py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="section-title">National Officers</h2>
            <p className="section-subtitle">
              Our association is guided by committed leaders elected to serve the interests of all health tutors across Ghana.
            </p>
          </div>

          <div className="leadership-grid">
            {roles.map((role, index) => (
              <div className="leadership-card" key={index}>
                <div className="profile-placeholder">
                  <User size={64} className="placeholder-icon" />
                </div>
                <div className="leadership-info">
                  <h3 className="role-title">{role}</h3>
                  <div className="profile-status">
                    <span className="status-badge">Profile Updating</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container text-center">
          <div className="card border-blue max-w-2xl mx-auto">
            <h2 className="mb-4">Regional Executives</h2>
            <p className="mb-6">
              In addition to our National Executive Council, COHTAG is supported by dedicated 
              executives across all regional zones who coordinate grassroots activities and representation.
            </p>
            <p className="text-muted text-sm">
              Regional leadership directories will be available soon.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
