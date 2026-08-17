import React from 'react';
import { Mail, Building2, ShieldCheck } from 'lucide-react';
import './Leadership.css';

const executives = [
  {
    name: "Derrick Mensah",
    role: "President",
    institution: "NMTC - ODUMASE KROBO",
    email: "info.demenz@gmail.com",
    image: "/derrick.jpeg",
    rank: 1
  },
  {
    name: "Clement Kwame Serchim",
    role: "General Secretary",
    institution: "NMTC - Fomena",
    email: "serchims26@gmail.com",
    image: "/clement.jpeg",
    rank: 2
  },
  {
    name: "Solomon Ossom Asare",
    role: "Communication Officer",
    institution: "Accra School of Hygiene, Korle Bu",
    email: "asaresolomon.as@gmail.com",
    image: "/solomon.jpeg",
    rank: 3
  },
  {
    name: "Matilda Duodu Kyerewaa",
    role: "Executive Officer",
    institution: "Assinman NMTC - Assin Foso",
    email: "duoduwendolyne@gmail.com",
    image: "/matilda.jpeg",
    rank: 4
  }
];

const Leadership = () => {
  return (
    <div className="leadership-page">
      <header className="page-header">
        <div className="container">
          <h1>Leadership</h1>
          <p>Meet the National Executive Officers serving COHTAG.</p>
        </div>
      </header>

      <section className="py-24 bg-light">
        <div className="container">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="section-title">National Executives</h2>
            <div className="title-underline"></div>
            <p className="section-subtitle">
              Our association is led by dedicated officers committed to representing and serving all health tutors across Ghana.
            </p>
          </div>

          <div className="leadership-grid">
            {executives.map((exec) => (
              <div className="leadership-card modern-card" key={exec.name}>
                <div className="profile-image-wrapper">
                  <img 
                    src={exec.image} 
                    alt={`${exec.name} - ${exec.role}`} 
                    className="profile-img"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(exec.name)}&background=074628&color=fff&size=512`;
                    }}
                  />
                </div>
                <div className="leadership-info modern-info">
                  <div className={`role-badge ${exec.rank === 1 ? 'president' : ''}`}>
                    <ShieldCheck size={14} />
                    <span>{exec.role}</span>
                  </div>
                  <h3 className="role-title modern-name">{exec.name}</h3>
                  <div className="exec-details">
                    <div className="exec-detail-item">
                      <Building2 size={16} className="exec-detail-icon" />
                      <span>{exec.institution}</span>
                    </div>
                    <div className="exec-detail-item">
                      <Mail size={16} className="exec-detail-icon" />
                      <a href={`mailto:${exec.email}`} className="exec-email-link">
                        {exec.email}
                      </a>
                    </div>
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
              In addition to our National Executive Officers, COHTAG is supported by dedicated 
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

