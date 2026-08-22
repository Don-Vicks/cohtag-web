import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import logoImg from '../assets/logo.png'
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
              <img src={logoImg} alt='COHTAG Logo' className='header-logo-img' />
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
              <div className='footer-brand'>
                <img src={logoImg} alt='COHTAG Logo' className='footer-logo-img' />
                <h3>COHTAG</h3>
              </div>
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
              <p>Email: <a href='mailto:cohtag@gmail.com' className='footer-contact-link'>cohtag@gmail.com</a></p>
              <div className='footer-phones'>
                <p>Phone:</p>
                <ul>
                  <li><a href='tel:+233246111695' className='footer-contact-link'>+233 (0) 24 611 1695</a></li>
                  <li><a href='tel:+233249227206' className='footer-contact-link'>+233 (0) 24 922 7206</a></li>
                  <li><a href='tel:+233591554888' className='footer-contact-link'>+233 (0) 59 155 4888</a></li>
                </ul>
              </div>
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
