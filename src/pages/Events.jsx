import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './Events.css';

const Events = () => {
  const events = [
    {
      type: "Congress",
      title: "National Delegates Congress 2026",
      date: "August 15 - 18, 2026",
      time: "09:00 AM Daily",
      location: "KNUST Great Hall, Kumasi",
      status: "upcoming",
      description: "The annual gathering of all delegates from various zones. This year's congress will focus on the review of the COHTAG constitution and the election of new national officers."
    },
    {
      type: "Workshop",
      title: "Modern Pedagogical Skills Workshop",
      date: "September 10, 2026",
      time: "10:00 AM - 04:00 PM",
      location: "Virtual (Zoom)",
      status: "upcoming",
      description: "A comprehensive capacity-building workshop on integrating technology in health education. Open to all registered members. Link will be sent via email."
    },
    {
      type: "Announcement",
      title: "Deadline for Membership Registration",
      date: "October 31, 2026",
      time: "11:59 PM",
      location: "Online Portal",
      status: "ongoing",
      description: "All health tutors are reminded to complete their membership registration on the COHTAG portal to remain in good standing and be eligible for welfare benefits."
    },
    {
      type: "Conference",
      title: "Health Educators Annual Review",
      date: "December 5, 2026",
      time: "08:30 AM",
      location: "Accra International Conference Centre",
      status: "upcoming",
      description: "End of year review conference with stakeholders from the Ministry of Health and the Nursing and Midwifery Council."
    }
  ];

  return (
    <div className="events-page">
      <header className="page-header">
        <div className="container">
          <h1>Events & Notice Board</h1>
          <p>Stay updated with the latest announcements, workshops, and gatherings.</p>
        </div>
      </header>

      <section className="py-24 bg-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="events-filters mb-8">
              <button className="filter-btn active">All Updates</button>
              <button className="filter-btn">Conferences</button>
              <button className="filter-btn">Workshops</button>
              <button className="filter-btn">Announcements</button>
            </div>

            <div className="events-list">
              {events.map((event, index) => (
                <div className="event-card card" key={index}>
                  <div className="event-meta">
                    <span className="event-type">{event.type}</span>
                    <span className={`event-status ${event.status}`}>{event.status}</span>
                  </div>
                  <h3 className="event-title">{event.title}</h3>
                  <div className="event-details">
                    <div className="detail-item">
                      <Calendar size={18} className="text-accent" />
                      <span>{event.date}</span>
                    </div>
                    <div className="detail-item">
                      <Clock size={18} className="text-accent" />
                      <span>{event.time}</span>
                    </div>
                    <div className="detail-item">
                      <MapPin size={18} className="text-accent" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-muted">No more upcoming events to display.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
