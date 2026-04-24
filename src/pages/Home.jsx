import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Heart, Users, BookOpen } from 'lucide-react';
import logoImg from '../assets/logo.jpg';

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="flex flex-col items-start">
            <div className="inline-block px-4 py-2 bg-primary-green/10 text-primary-green font-semibold rounded-full mb-6 text-sm tracking-wider uppercase">
              Welcome to COHTAG
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-primary-dark mb-6 font-outfit">
              Colleges of Health Teachers' <br className="hidden sm:block" />
              <span className="text-accent-gold">Association of Ghana</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-2xl">
              Promoting excellence in health education, safeguarding the welfare of tutors, 
              and advancing healthcare training standards across Ghana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link to="/membership" className="btn btn-primary w-full sm:w-auto">
                Join COHTAG
              </Link>
              <Link to="/about" className="btn btn-outline w-full sm:w-auto">
                Learn More
              </Link>
            </div>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 flex justify-center items-center">
              <div className="w-56 h-56 flex justify-center items-center z-10 bg-white rounded-full shadow-2xl border-4 border-gray-50 overflow-hidden">
                <img src={logoImg} alt="COHTAG Logo" className="w-48 h-48 object-contain" />
              </div>
              <div className="absolute rounded-full border-2 border-dashed border-accent-gold opacity-40 w-72 h-72 animate-[spin_30s_linear_infinite]"></div>
              <div className="absolute rounded-full border-2 border-dashed border-secondary-blue opacity-30 w-80 h-80 animate-[spin_40s_linear_infinite_reverse]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome / Intro Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-outfit text-primary-dark mb-4 font-bold">Together We Build the Future of Healthcare</h2>
              <p className="mb-4 text-gray-700 leading-relaxed">
                The Colleges of Health Teachers' Association of Ghana (COHTAG) is the unified voice of 
                health educators in Ghana. We are dedicated to ensuring that those who train the next 
                generation of healthcare professionals have the support, resources, and representation they need.
              </p>
              <p className="mb-4 text-gray-700 leading-relaxed">
                Our strength lies in our solidarity. By bringing together tutors from various health training 
                institutions, we create a powerful platform for professional development, welfare advocacy, 
                and educational excellence.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-primary-green font-semibold hover:text-primary-dark mt-4 transition-colors">
                Read our full history <ArrowRight size={16} />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                <h3 className="text-2xl text-secondary-blue mb-2 font-bold">National</h3>
                <p className="text-sm text-gray-500">Coverage across Ghana</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                <h3 className="text-2xl text-secondary-blue mb-2 font-bold">Unified</h3>
                <p className="text-sm text-gray-500">Voice for all tutors</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                <h3 className="text-2xl text-secondary-blue mb-2 font-bold">Professional</h3>
                <p className="text-sm text-gray-500">Development focus</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm text-center border border-gray-100">
                <h3 className="text-2xl text-secondary-blue mb-2 font-bold">Welfare</h3>
                <p className="text-sm text-gray-500">Driven initiatives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Aims Highlights */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-outfit text-primary-dark mb-4 font-bold">What We Do</h2>
            <p className="text-xl text-gray-500">Our core objectives and focus areas</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card border-t-4 border-primary-green text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 text-primary-green"><Users size={32} /></div>
              <h3 className="text-xl font-bold mb-3 text-primary-dark font-outfit">Unite Educators</h3>
              <p className="text-gray-600">Fostering unity and solidarity among tutors in all health training institutions in Ghana.</p>
            </div>
            <div className="card border-t-4 border-accent-gold text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 text-accent-gold"><Heart size={32} /></div>
              <h3 className="text-xl font-bold mb-3 text-primary-dark font-outfit">Promote Welfare</h3>
              <p className="text-gray-600">Advocating for better conditions of service and establishing welfare schemes for members.</p>
            </div>
            <div className="card border-t-4 border-secondary-blue text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-6 text-secondary-blue"><BookOpen size={32} /></div>
              <h3 className="text-xl font-bold mb-3 text-primary-dark font-outfit">Advance Education</h3>
              <p className="text-gray-600">Collaborating with stakeholders to improve the standards of health training and professional practice.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className="py-24 bg-gradient-to-br from-primary-dark to-primary-green text-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-outfit text-white mb-6 font-bold">Your Welfare is Our Priority</h2>
              <p className="mb-8 text-white/80 text-lg">
                Discover the exclusive benefits, projects, and welfare initiatives available to COHTAG members. 
                From professional development to financial support, we are here for you.
              </p>
              <ul className="flex flex-col gap-4 mb-10">
                <li className="flex items-center gap-4 text-lg"><CheckCircle size={20} className="text-accent-gold" /> Group welfare schemes</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle size={20} className="text-accent-gold" /> Professional development programs</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle size={20} className="text-accent-gold" /> Legal and professional advocacy</li>
                <li className="flex items-center gap-4 text-lg"><CheckCircle size={20} className="text-accent-gold" /> Retirement benefits planning</li>
              </ul>
              <Link to="/projects" className="btn btn-accent">
                View All Initiatives
              </Link>
            </div>
            <div className="bg-white/10 border-2 border-dashed border-white/30 h-96 rounded-2xl flex justify-center items-center text-white/50 text-2xl font-outfit">
              <span>Welfare & Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board Teaser */}
      <section className="py-24 bg-gray-50">
        <div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <h2 className="text-4xl font-outfit text-primary-dark font-bold">Notice Board</h2>
            <Link to="/events" className="btn btn-outline">View All Updates</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent-gold hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-sm text-accent-dark font-semibold mb-2 uppercase">Upcoming</div>
              <h3 className="text-xl text-primary-dark mb-4 font-outfit font-bold">National Delegates Congress</h3>
              <p className="text-gray-500">Information regarding the upcoming National Delegates Congress will be posted here. Stay tuned for dates and venue announcements.</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border-l-4 border-accent-gold hover:-translate-y-1 hover:shadow-md transition-all">
              <div className="text-sm text-accent-dark font-semibold mb-2 uppercase">Announcement</div>
              <h3 className="text-xl text-primary-dark mb-4 font-outfit font-bold">Membership Registration Drive</h3>
              <p className="text-gray-500">All health tutors are encouraged to complete their membership registration online. Ensure your details are up to date.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl font-outfit text-primary-dark mb-4 font-bold">Have Questions or Need Assistance?</h2>
          <p className="mb-8 max-w-2xl mx-auto text-gray-600">
            The National Secretariat is available to address any inquiries regarding membership, 
            welfare initiatives, or regional branch activities.
          </p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
