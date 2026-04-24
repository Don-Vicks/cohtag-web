import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import './Events.css';

const Events = () => {

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
          <div className="max-w-4xl mx-auto text-center py-16 px-4 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-50 rounded-full mb-6">
              <Calendar size={40} className="text-accent" />
            </div>
            <h2 className="text-3xl font-outfit text-primary-dark font-bold mb-4">New Events Coming Soon!</h2>
            <p className="text-lg text-muted max-w-lg mx-auto mb-8">
              We are currently planning our schedule for upcoming conferences, workshops, and gatherings. 
              Check back later or register as a member to get updates directly to your inbox.
            </p>
            <button className="btn btn-primary btn-large">Join our Mailing List</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
