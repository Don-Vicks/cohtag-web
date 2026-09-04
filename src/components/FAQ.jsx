import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Phone, Mail, Globe, Share2, HelpCircle, Layers, ShieldCheck, Users, FileCheck } from 'lucide-react'
import './FAQ.css'

const faqCategories = [
  { id: 'all', name: 'All Questions (22)', icon: Layers },
  { id: 'about', name: 'About COHTAG (1–5)', icon: Users },
  { id: 'association', name: 'Existing Association (6–8)', icon: ShieldCheck },
  { id: 'benefits', name: 'Representation & Dues (9–14)', icon: FileCheck },
  { id: 'registration', name: 'Registration & Action (15–22)', icon: HelpCircle },
]

const categoriesMetadata = {
  about: { title: '1. About COHTAG', description: 'Questions 1–5' },
  association: { title: '2. COHTAG & Your Existing Association', description: 'Questions 6–8' },
  benefits: { title: '3. Representation, Benefits & Dues', description: 'Questions 9–14' },
  registration: { title: '4. Registration & Participation', description: 'Questions 15–22' },
}

const faqData = [
  // SECTION 1: ABOUT COHTAG (1-5)
  {
    id: 1,
    category: 'about',
    question: 'What is COHTAG?',
    answer:
      'COHTAG stands for the Colleges of Health Teachers’ Association of Ghana. It is a labour union established to provide a unified and collective platform for Health Tutors in Ghana, promoting their representation, welfare, professional development, academic advancement and shared professional interests.',
  },
  {
    id: 2,
    category: 'about',
    question: 'Who can become a member of COHTAG?',
    answer:
      'Health Tutors and other eligible persons working within Health Training Institutions in Ghana may join COHTAG in accordance with the membership provisions of the COHTAG Constitution.',
  },
  {
    id: 3,
    category: 'about',
    question: 'Is COHTAG only for nurses and midwives?',
    answer:
      'No. COHTAG brings together Health Tutors from Nursing, Midwifery, Allied Health and other health-related disciplines working within Health Training Institutions.',
  },
  {
    id: 4,
    category: 'about',
    question: 'Why do Health Tutors need COHTAG?',
    answer:
      'Health Tutors share workplace and professional concerns that may not be adequately addressed when they are represented only according to their individual professional backgrounds. COHTAG provides a united platform through which Health Tutors can speak with one voice on matters affecting their welfare, professional development, career progression, conditions of service and other shared interests.',
  },
  {
    id: 5,
    category: 'about',
    question: 'Why should I join COHTAG?',
    answer:
      'Joining COHTAG gives you the opportunity to become part of a collective voice dedicated specifically to the interests of Health Tutors. Membership provides a platform for representation and advocacy, professional development, research and academic advancement, networking, welfare initiatives and collective action on matters affecting Health Tutors.',
  },

  // SECTION 2: COHTAG & YOUR EXISTING ASSOCIATION (6-8)
  {
    id: 6,
    category: 'association',
    question: 'Does joining COHTAG mean I have to leave my existing professional association?',
    answer:
      'No. COHTAG does not require members to abandon their respective professional associations. Your professional association may continue to serve your interests within your particular profession, while COHTAG provides a collective platform focused on your shared interests as a Health Tutor.',
  },
  {
    id: 7,
    category: 'association',
    question: 'Do I lose the benefits of my existing association when I join COHTAG?',
    answer: (
      <div>
        <p className="mb-2">
          No. Joining COHTAG does not automatically mean that you lose benefits you have already accrued from your existing association.
        </p>
        <p className="mb-2">
          Dues or subscriptions already paid to an association are generally not refundable. However, where an association has transferable benefits, entitlements or accrued welfare benefits, these may be transferred or accessed in accordance with that association's rules and procedures.
        </p>
        <p>
          The Leadership of COHTAG will provide guidance and support to members on how to request, access or transfer eligible benefits, where applicable.
        </p>
      </div>
    ),
  },
  {
    id: 8,
    category: 'association',
    question: 'What makes COHTAG different from my professional association?',
    answer: (
      <div>
        <p className="mb-2">
          Professional associations generally represent members according to their respective professional disciplines.
        </p>
        <p className="mb-2">
          COHTAG brings Health Tutors from different professional backgrounds together around their common interests as Health Tutors.
        </p>
        <div className="faq-highlight-box mt-3">
          <strong>In simple terms:</strong> Your professional association represents your profession; COHTAG provides a collective voice for Health Tutors.
        </div>
      </div>
    ),
  },

  // SECTION 3: REPRESENTATION, BENEFITS & DUES (9-14)
  {
    id: 9,
    category: 'benefits',
    question: 'Will COHTAG work towards improved Conditions of Service for Health Tutors?',
    answer:
      'COHTAG seeks to advance the welfare and workplace interests of Health Tutors through appropriate representation, engagement and negotiation with relevant authorities. Issues such as conditions of service, career progression, responsibility allowances and other employment-related concerns can therefore form part of COHTAG\'s collective advocacy agenda.',
  },
  {
    id: 10,
    category: 'benefits',
    question: 'Will joining COHTAG automatically give me responsibility allowances or other benefits?',
    answer:
      'No. Registration as a COHTAG member does not automatically create an entitlement to a particular allowance or employment benefit. COHTAG provides the collective platform through which legitimate concerns affecting Health Tutors can be identified, documented and pursued through the appropriate engagement and negotiation processes.',
  },
  {
    id: 11,
    category: 'benefits',
    question: 'What professional development opportunities will COHTAG provide?',
    answer:
      'COHTAG intends to organise workshops, seminars, CPD programmes, research activities and other capacity-building initiatives relevant to Health Tutors.',
  },
  {
    id: 12,
    category: 'benefits',
    question: 'How will COHTAG protect and represent members\' interests?',
    answer:
      'COHTAG seeks to provide organised representation and advocacy on matters affecting Health Tutors and to engage relevant institutions and stakeholders through appropriate processes.',
  },
  {
    id: 13,
    category: 'benefits',
    question: 'Is there a membership fee or monthly dues?',
    answer:
      'Yes. Applicable membership contributions and dues will be determined in accordance with COHTAG\'s approved structures. Current payment information will be communicated through official COHTAG channels.',
  },
  {
    id: 14,
    category: 'benefits',
    question: 'How will my membership dues be used?',
    answer:
      'Membership dues will support the legitimate activities and administration of COHTAG, including member representation, welfare initiatives, professional development programmes and other activities approved under the Union\'s governance structures. COHTAG is committed to responsible financial management, reporting and accountability to its membership.',
  },

  // SECTION 4: REGISTRATION & PARTICIPATION (15-22)
  {
    id: 15,
    category: 'registration',
    question: 'How do I register as a COHTAG member?',
    answer: (
      <div>
        <p className="mb-2">
          Membership registration can be completed through the official COHTAG membership portal:{' '}
          <a href="/membership" className="text-primary font-medium underline">
            www.cohtag.com/membership
          </a>
        </p>
        <p>Complete the required information and follow the instructions provided during the registration process.</p>
      </div>
    ),
  },
  {
    id: 16,
    category: 'registration',
    question: 'What happens after I complete my membership registration?',
    answer:
      'Your registration information will be processed and verified. Once the necessary membership requirements have been satisfied, your details will form part of the official COHTAG membership database.',
  },
  {
    id: 17,
    category: 'registration',
    question: 'Does COHTAG have regional and institutional structures?',
    answer:
      'Yes. COHTAG is developing regional and institutional structures to support membership mobilisation, communication, participation and representation across Health Training Institutions.',
  },
  {
    id: 18,
    category: 'registration',
    question: 'How can I actively participate in COHTAG?',
    answer:
      'Members can participate through regional and institutional structures, committees, meetings, professional programmes, research activities, membership mobilisation and other approved COHTAG initiatives.',
  },
  {
    id: 19,
    category: 'registration',
    question: 'How can I raise a workplace or welfare concern through COHTAG?',
    answer:
      'Members can channel workplace and welfare concerns through the appropriate institutional, regional or national COHTAG structures for consideration and appropriate action.',
  },
  {
    id: 20,
    category: 'registration',
    question: 'How will COHTAG ensure accountability to members?',
    answer:
      'COHTAG operates through established governance structures and is committed to transparency, responsible financial management, reporting and accountability to its membership.',
  },
  {
    id: 21,
    category: 'registration',
    question: 'Where can I get official information about COHTAG?',
    answer:
      'Official information and updates should be obtained through the COHTAG website and authorised COHTAG communication channels.',
  },
  {
    id: 22,
    category: 'registration',
    question: 'How can I contact COHTAG?',
    answer: (
      <div>
        <p className="mb-2">You can reach out to COHTAG through the following official channels:</p>
        <div className="faq-contact-details">
          <div className="faq-contact-item">
            <Phone size={16} />
            <span>Phone: <a href="tel:0246111695">0246111695</a></span>
          </div>
          <div className="faq-contact-item">
            <Mail size={16} />
            <span>Email: <a href="mailto:info.cohtag.com">info.cohtag.com</a></span>
          </div>
          <div className="faq-contact-item">
            <Globe size={16} />
            <span>Website: <a href="https://www.cohtag.com" target="_blank" rel="noreferrer">www.cohtag.com</a></span>
          </div>
          <div className="faq-contact-item">
            <Share2 size={16} />
            <span>Social Media: <strong>COHTAG</strong></span>
          </div>
        </div>
      </div>
    ),
  },
]

const FAQ = ({ showHeader = true }) => {
  const [openId, setOpenId] = useState(1) // Default first FAQ open
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const filteredFaqs = faqData.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory
    const qText = faq.question.toLowerCase()
    const query = searchQuery.toLowerCase()
    return matchesCategory && qText.includes(query)
  })

  // Group FAQs by category for clean section display when showing 'all' without active search
  const renderGroupedFaqs = () => {
    const isSearching = searchQuery.trim().length > 0

    if (activeCategory !== 'all' || isSearching) {
      return (
        <div className="faq-list">
          {filteredFaqs.map((faq) => renderFaqItem(faq))}
        </div>
      )
    }

    const categoriesOrder = ['about', 'association', 'benefits', 'registration']

    return (
      <div className="faq-grouped-container">
        {categoriesOrder.map((catKey) => {
          const categoryFaqs = faqData.filter((f) => f.category === catKey)
          const meta = categoriesMetadata[catKey]

          return (
            <div key={catKey} className="faq-category-group">
              <div className="faq-category-header">
                <h3>{meta.title}</h3>
                <span className="faq-category-badge">{meta.description}</span>
              </div>
              <div className="faq-list">
                {categoryFaqs.map((faq) => renderFaqItem(faq))}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  const renderFaqItem = (faq) => {
    const isOpen = openId === faq.id
    return (
      <div key={faq.id} className={`faq-item ${isOpen ? 'active' : ''}`}>
        <button
          className="faq-question-button"
          onClick={() => toggleAccordion(faq.id)}
          aria-expanded={isOpen}
        >
          <span>
            <span className="faq-number">{faq.id}.</span> {faq.question}
          </span>
          <div className="faq-icon-wrapper">
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={18} />
            </motion.div>
          </div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              style={{ overflow: 'hidden' }}
            >
              <div className="faq-answer">
                {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        {showHeader && (
          <div className="faq-header">
            <span className="faq-tagline">Colleges of Health Teachers’ Association of Ghana (COHTAG)</span>
            <h2 className="section-title text-3xl font-bold mt-2">FREQUENTLY ASKED QUESTIONS (FAQs)</h2>
            <p className="faq-org-title">One Profession. One Voice. One Future.</p>
            <p className="faq-subtitle">Everything you need to know about COHTAG membership and operations.</p>

            <div className="faq-search-wrapper">
              <Search className="faq-search-icon" size={20} />
              <input
                type="text"
                placeholder="Search all 22 questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="faq-categories-tabs">
              {faqCategories.map((cat) => {
                const IconComponent = cat.icon
                const isActive = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    className={`faq-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setActiveCategory(cat.id)}
                  >
                    <IconComponent size={16} />
                    <span>{cat.name}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}

        {filteredFaqs.length > 0 ? (
          renderGroupedFaqs()
        ) : (
          <div className="faq-no-results">
            <HelpCircle size={48} className="mx-auto text-muted mb-2" />
            <p>No questions matched your search query or filter. Try another keyword or tab.</p>
          </div>
        )}

        {/* Still Have Questions CTA Banner */}
        <div className="faq-still-questions">
          <h3 className="faq-still-title">STILL HAVE QUESTIONS?</h3>
          <p className="faq-still-subtitle">Contact COHTAG directly for further assistance and official information.</p>
          <div className="faq-contact-cards">
            <a href="tel:0246111695" className="faq-contact-chip">
              <Phone size={18} />
              <span>0246111695</span>
            </a>
            <a href="mailto:info.cohtag.com" className="faq-contact-chip">
              <Mail size={18} />
              <span>info.cohtag.com</span>
            </a>
            <a href="https://www.cohtag.com" target="_blank" rel="noreferrer" className="faq-contact-chip">
              <Globe size={18} />
              <span>www.cohtag.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
