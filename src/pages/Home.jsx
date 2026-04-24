import React from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle,
  Heart,
  Users,
  BookOpen,
  GraduationCap,
  ShieldCheck,
  Megaphone,
} from 'lucide-react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-wrapper'>
      {/* Modern Hero Section */}
      <section className='hero-section'>
        <div className='container hero-container'>
          <div className='hero-badge'>
            <span className='badge-dot'></span>
            Excellence in Education, Leadership in Health.
          </div>

          <h1 className='hero-title'>
            Colleges of Health Teachers’ <br className='desktop-only' />
            <span className='text-gradient'>Association of Ghana</span>
          </h1>

          <p className='hero-subtitle'>
            We are a unified body of Public health training institution teachers
            in Ghana, committed to advancing education, influencing policy, and
            promoting the welfare of our members.
          </p>

          <div className='hero-ctas'>
            <Link to='/membership' className='btn btn-primary btn-large'>
              Join COHTAG
            </Link>
            <Link to='/about' className='btn btn-outline-light btn-large'>
              Learn More
            </Link>
            <Link to='/contact' className='btn btn-text btn-large'>
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className='what-we-do-section'>
        <div className='container'>
          <div className='section-header'>
            <h2 className='section-title'>What We Do</h2>
            <div className='title-underline'></div>
          </div>

          <div className='grid grid-cols-3'>
            <div className='service-card'>
              <div className='service-icon icon-green'>
                <Megaphone size={28} />
              </div>
              <h3>Advocate for Policies</h3>
              <p>
                Advocate for health education policies that improve training
                standards and institutional conditions.
              </p>
            </div>

            <div className='service-card'>
              <div className='service-icon icon-gold'>
                <GraduationCap size={28} />
              </div>
              <h3>Professional Development</h3>
              <p>
                Support continuous professional development (CPD) to keep our
                educators at the forefront of medical knowledge.
              </p>
            </div>

            <div className='service-card'>
              <div className='service-icon icon-blue'>
                <BookOpen size={28} />
              </div>
              <h3>Research & Publications</h3>
              <p>
                Promote cutting-edge research and facilitate academic
                publications among health tutors.
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 bottom-grid'>
            <div className='service-card'>
              <div className='service-icon icon-dark'>
                <ShieldCheck size={28} />
              </div>
              <h3>Protect Members' Rights</h3>
              <p>
                Protect members' rights and establish robust welfare schemes to
                ensure financial and professional security.
              </p>
            </div>

            <div className='service-card'>
              <div className='service-icon icon-green'>
                <Users size={28} />
              </div>
              <h3>Collaborate with Stakeholders</h3>
              <p>
                Collaborate seamlessly with stakeholders in both the health and
                education sectors to drive systemic improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Teaser */}
      <section className='projects-teaser'>
        <div className='container'>
          <div className='grid grid-cols-2 projects-grid'>
            <div className='projects-content'>
              <h2>Your Welfare is Our Priority</h2>
              <p className='projects-subtitle'>
                Discover the exclusive benefits, projects, and welfare
                initiatives available to COHTAG members. From professional
                development to financial support, we are here for you.
              </p>
              <ul className='projects-list'>
                <li>
                  <CheckCircle size={20} className='icon-gold' /> Group welfare
                  schemes
                </li>
                <li>
                  <CheckCircle size={20} className='icon-gold' /> Professional
                  development programs
                </li>
                <li>
                  <CheckCircle size={20} className='icon-gold' /> Legal and
                  professional advocacy
                </li>
                <li>
                  <CheckCircle size={20} className='icon-gold' /> Retirement
                  benefits planning
                </li>
              </ul>
              <Link to='/projects' className='btn btn-accent btn-large'>
                View All Initiatives
              </Link>
            </div>
            <div className='projects-placeholder'>
              <span>Welfare & Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* Notice Board Teaser */}
      <section className='notice-board-section'>
        <div className='container'>
          <div className='notice-header'>
            <div>
              <h2>Notice Board</h2>
              <p>Stay updated with the latest news and announcements</p>
            </div>
            <Link to='/events' className='btn btn-outline'>
              View All Updates
            </Link>
          </div>
          <div className='grid grid-cols-2'>
            <div className='notice-card'>
              <div className='notice-accent border-gold'></div>
              <div className='notice-badge badge-gold'>Upcoming</div>
              <h3>National Delegates Congress</h3>
              <p>
                Information regarding the upcoming National Delegates Congress
                will be posted here. Stay tuned for dates and venue
                announcements.
              </p>
            </div>
            <div className='notice-card'>
              <div className='notice-accent border-green'></div>
              <div className='notice-badge badge-green'>Announcement</div>
              <h3>Membership Registration Drive</h3>
              <p>
                All health tutors are encouraged to complete their membership
                registration online. Ensure your details are up to date.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className='contact-cta'>
        <div className='container contact-container'>
          <h2>Have Questions or Need Assistance?</h2>
          <p>
            The National Secretariat is available to address any inquiries
            regarding membership, welfare initiatives, or regional branch
            activities.
          </p>
          <Link to='/contact' className='btn btn-primary btn-large'>
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home
