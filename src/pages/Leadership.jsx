import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const roles = [
    { title: "National President", name: "Dr. Kwame Appiah", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "National Vice President", name: "Mrs. Grace Osei", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "General Secretary", name: "Mr. Samuel Mensah", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "Deputy General Secretary", name: "Ms. Ama Asantewaa", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "Financial Secretary", name: "Mr. Ebenezer Tetteh", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "National Treasurer", name: "Mrs. Cynthia Kumi", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "Public Relations Officer", name: "Mr. Daniel Ofori", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=256&h=256" },
    { title: "National Organizer", name: "Mr. Yaw Boakye", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=256&h=256" }
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
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Our association is guided by committed leaders elected to serve the interests of all health tutors across Ghana.
            </p>
          </div>

          <div className="leadership-grid">
            {roles.map((role, index) => (
              <div className="leadership-card modern-card" key={index}>
                <div className="profile-image-wrapper">
                  <img src={role.image} alt={role.title} className="profile-img" />
                </div>
                <div className="leadership-info modern-info">
                  <h3 className="role-title modern-name">{role.name}</h3>
                  <div className="profile-status">
                    <span className="status-badge active">{role.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container text-center">
          <div className="card border-blue max-w-2xl mx-auto regional-card">
            <h2 className="mb-4">Regional Executives</h2>
            <p className="mb-6">
              In addition to our National Executive Council, COHTAG is supported by dedicated 
              executives across all regional zones who coordinate grassroots activities and representation.
            </p>
            <div className="regional-badge">
              Directories available soon
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Leadership;
