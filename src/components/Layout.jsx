import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.jpg'
import './Layout.css'

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/projects', label: 'Projects & Initiatives' },
    { path: '/events', label: 'Events' },
    { path: '/contact', label: 'Contact' },
  ]

  const isActive = (path) => {
    if (path === '/' && location.pathname !== '/') return false
    return location.pathname.startsWith(path)
  }

  return (
    <div className='layout-wrapper'>
      <header className='site-header'>
        <div className='container header-container'>
          <Link to='/' className='logo-link'>
            <img src={logoImg} alt='COHTAG Logo' className='header-logo-img' />
            <div className='logo-text'>
              <span className='logo-abbr'>COHTAG</span>
              <span className='logo-full'>
                Colleges of Health Teachers' Association of Ghana
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className='desktop-nav'>
            <ul className='nav-list'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to='/membership' className='btn btn-accent header-btn'>
              Join COHTAG
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='mobile-menu-btn'
            onClick={toggleMenu}
            aria-label='Toggle menu'
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          className='mobile-nav-overlay'
          onClick={() => setIsMenuOpen(false)}
        >
          <div className='mobile-nav-menu' onClick={(e) => e.stopPropagation()}>
            <div className='mobile-nav-header'>
              <span className='logo-abbr'>COHTAG</span>
              <button
                className='mobile-menu-close'
                onClick={() => setIsMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <ul className='mobile-nav-list'>
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`mobile-nav-link ${isActive(link.path) ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to='/membership'
                  className='mobile-nav-link'
                  onClick={() => setIsMenuOpen(false)}
                >
                  Membership
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      <main className='site-main'>
        <Outlet />
      </main>

      <footer className='site-footer'>
        <div className='container'>
          <div className='footer-grid'>
            <div className='footer-col'>
              <h3>COHTAG</h3>
              <p>
                The Colleges of Health Teachers' Association of Ghana (COHTAG)
                is the official body representing tutors and educators in health
                training institutions across Ghana.
              </p>
            </div>
            <div className='footer-col'>
              <h3>Quick Links</h3>
              <ul className='footer-links'>
                <li>
                  <Link to='/about'>About COHTAG</Link>
                </li>
                <li>
                  <Link to='/leadership'>Leadership</Link>
                </li>
                <li>
                  <Link to='/membership'>Membership</Link>
                </li>
                <li>
                  <Link to='/events'>Events & News</Link>
                </li>
                <li>
                  <a
                    href='#constitution'
                    onClick={(e) => {
                      e.preventDefault()
                      alert('Constitution Document Coming Soon')
                    }}
                  >
                    Constitution
                  </a>
                </li>
              </ul>
            </div>
            <div className='footer-col'>
              <h3>Contact Us</h3>
              <p>National Secretariat, School of Hygiene, Korle Bu Accra</p>
              <p>Email: cohtag@gmail.com</p>
              <p>Phone: +233 (0) XX XXX XXXX</p>
            </div>
          </div>
          <div className='footer-bottom'>
            <p>
              &copy; {new Date().getFullYear()} Colleges of Health Teachers'
              Association of Ghana. All rights reserved.
            </p>
            <div className='footer-legal'>
              <Link to='/privacy-policy'>Privacy Policy</Link>
              <Link to='/terms'>Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
