import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion'
import { useLenis } from 'lenis/react'
import {
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronDown,
  GraduationCap,
  Megaphone,
  ShieldCheck,
  Users,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import './Home.css'

import heroEducators from '../assets/hero_educators.png'
import heroGraduation from '../assets/cohtag_graduation.png'
import heroResearch from '../assets/cohtag_research.png'
import heroWelfare from '../assets/cohtag_welfare.png'

const slides = [
  {
    image: heroEducators,
    title: 'Excellence in Education, Leadership in Health.',
    heading: (
      <>
        Colleges of Health Teachers’ <br className='desktop-only' />
        <span className='text-gradient'>Association of Ghana</span>
      </>
    ),
    subtitle:
      'We are a unified body of Public health training institution teachers in Ghana, committed to advancing education, influencing policy, and promoting the welfare of our members.',
  },
  {
    image: heroGraduation,
    title: 'Empowering the Next Generation of Health Leaders.',
    heading: (
      <>
        Advancing <span className='text-gradient'>Academic Excellence</span>
        <br className='desktop-only' /> in Health Education
      </>
    ),
    subtitle:
      'Providing robust support and resources to ensure our health tutors are equipped with modern pedagogical skills and resources.',
  },
  {
    image: heroResearch,
    title: 'Driving Innovation through Research.',
    heading: (
      <>
        Promoting <span className='text-gradient'>Research & Innovation</span>
        <br className='desktop-only' /> in Healthcare
      </>
    ),
    subtitle:
      'Facilitating cutting-edge research and facilitating academic publications to drive systemic improvements in Ghana’s health sector.',
  },
]

const HeroScreen = ({ slide, progress, range }) => {
  const opacity = useTransform(progress, range.opacity.input, range.opacity.output)
  const scale = useTransform(progress, range.scale.input, range.scale.output)
  const blur = useTransform(progress, range.blur.input, range.blur.output)
  const y = useTransform(progress, range.y.input, range.y.output)
  
  // Content animations for staggered feel
  const contentOpacity = useTransform(progress, range.contentOpacity.input, range.contentOpacity.output)
  const contentY = useTransform(progress, range.contentY.input, range.contentY.output)

  return (
    <motion.div
      style={{ 
        opacity,
        scale,
        filter: useTransform(blur, (v) => `blur(${v}px)`),
        backgroundImage: `linear-gradient(rgba(7, 70, 40, 0.8), rgba(7, 70, 40, 0.9)), url(${slide.image})`,
        zIndex: useTransform(progress, (v) => {
          // Keep active slide on top
          if (v >= range.opacity.input[0] && v <= range.opacity.input[range.opacity.input.length - 1]) return 5;
          return 1;
        })
      }}
      className='hero-slide-bg'
    >
      <div className='container hero-container'>
        <motion.div 
          style={{ opacity: contentOpacity, y: contentY }}
          className='hero-content-wrapper'
        >
          <div className='hero-badge'>
            <span className='badge-dot'></span>
            {slide.title}
          </div>

          <h1 className='hero-title'>{slide.heading}</h1>

          <p className='hero-subtitle'>{slide.subtitle}</p>

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
        </motion.div>
      </div>
    </motion.div>
  )
}

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const lenis = useLenis()
  const containerRef = useRef(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Smooth progress for cleaner animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (v) => {
      // 0 to 0.33 -> 0
      // 0.33 to 0.66 -> 1
      // 0.66 to 1 -> 2
      const index = Math.min(Math.floor(v * 3), slides.length - 1)
      setCurrentSlide(index)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  const ranges = [
    {
      opacity: { input: [0, 0.25, 0.35], output: [1, 1, 0] },
      scale: { input: [0, 0.35], output: [1, 0.9] },
      blur: { input: [0, 0.25, 0.35], output: [0, 0, 10] },
      y: { input: [0, 0.35], output: [0, -50] },
      contentOpacity: { input: [0, 0.2, 0.3], output: [1, 1, 0] },
      contentY: { input: [0, 0.3], output: [0, -100] }
    },
    {
      opacity: { input: [0.25, 0.35, 0.6, 0.7], output: [0, 1, 1, 0] },
      scale: { input: [0.25, 0.35, 0.6, 0.7], output: [1.1, 1, 1, 0.9] },
      blur: { input: [0.25, 0.35, 0.6, 0.7], output: [10, 0, 0, 10] },
      y: { input: [0.25, 0.35, 0.6, 0.7], output: [50, 0, 0, -50] },
      contentOpacity: { input: [0.3, 0.4, 0.55, 0.65], output: [0, 1, 1, 0] },
      contentY: { input: [0.3, 0.4, 0.55, 0.65], output: [100, 0, 0, -100] }
    },
    {
      opacity: { input: [0.6, 0.7, 1], output: [0, 1, 1] },
      scale: { input: [0.6, 0.7, 1], output: [1.1, 1, 1] },
      blur: { input: [0.6, 0.7, 1], output: [10, 0, 0] },
      y: { input: [0.6, 0.7, 1], output: [50, 0, 0] },
      contentOpacity: { input: [0.65, 0.75, 1], output: [0, 1, 1] },
      contentY: { input: [0.65, 0.75, 1], output: [100, 0, 0] }
    }
  ]

  return (
    <div className='home-wrapper'>
      {/* Modern Hero Section */}
      <section ref={containerRef} className='hero-section'>
        <div className='hero-sticky-wrapper'>
          {slides.map((slide, index) => (
            <HeroScreen 
              key={index}
              slide={slide}
              progress={smoothProgress}
              range={ranges[index]}
            />
          ))}

          {/* Vertical Slider Indicators */}
          <div className='hero-indicators'>
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => {
                  const targetProgress = index / (slides.length - 1)
                  // Offset by small amount to ensure it lands in the right range
                  const targetScroll = targetProgress * (containerRef.current.offsetHeight - window.innerHeight)
                  lenis?.scrollTo(targetScroll)
                }}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <AnimatePresence>
            {currentSlide === 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                className='scroll-down-hint'
              >
                <span>Scroll to Explore</span>
                <ChevronDown size={24} />
              </motion.div>
            )}
          </AnimatePresence>
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
            <div className='projects-image-container'>
              <img src={heroWelfare} alt='Welfare and Projects' className='projects-image' />
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
            The National Secretariat, School of Hygiene, Korle Bu Accra is
            available to address any inquiries regarding membership, welfare
            initiatives, or regional branch activities.
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
