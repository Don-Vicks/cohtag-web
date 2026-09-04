import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search, Phone, Mail, Globe, Share2, HelpCircle } from 'lucide-react'
import './FAQ.css'

const faqData = [
  {
    id: 1,
    question: 'What is COHTAG?',
    answer:
      'COHTAG stands for the Colleges of Health Teachers’ Association of Ghana. It is an association established to provide a collective platform for Health Tutors in Ghana and promote their representation, welfare, professional development and advancement.',
  },
  {
    id: 2,
    question: 'Who can become a member of COHTAG?',
    answer:
      'Health Tutors and other eligible persons working within Health Training Institutions in Ghana may join in accordance with the membership provisions of the COHTAG Constitution.',
  },
  {
    id: 3,
    question: 'Is COHTAG only for nurses and midwives?',
    answer:
      'No. COHTAG brings together Health Tutors from Nursing, Midwifery, Allied Health and other health-related disciplines.',
  },
  {
    id: 4,
    question: 'Why should I join COHTAG?',
    answer:
      'Membership provides an opportunity to become part of a collective voice dedicated to the interests of Health Tutors, including representation, professional development, research and academic advancement, networking and welfare initiatives.',
  },
  {
    id: 5,
    question: 'Does joining COHTAG mean I have to leave my existing professional association?',
    answer:
      'No. COHTAG does not require members to abandon their respective professional associations. Those organisations continue to represent their professional disciplines, while COHTAG provides a platform focused on their shared interests as Health Tutors.',
  },
  {
    id: 6,
    question: 'Do I lose the benefits of my existing association when I join COHTAG?',
    answer: (
      <div>
        <p className="mb-2">
          No. Joining COHTAG does not automatically mean that you lose the benefits you have already accrued from your existing association.
        </p>
        <p className="mb-2">
          Any dues or subscriptions already paid to an association are generally not refundable.
        </p>
        <p className="mb-2">
          However, where an association has transferable benefits, entitlements or accrued welfare benefits, these may be transferred or accessed in accordance with that association’s rules and procedures.
        </p>
        <p>
          The Leadership of COHTAG will provide guidance and support to members on how to request, access or transfer eligible benefits from their existing associations, where applicable.
        </p>
      </div>
    ),
  },
  {
    id: 7,
    question: 'How do I register as a COHTAG member?',
    answer: (
      <span>
        Membership registration can be completed through the COHTAG membership portal:{' '}
        <a href="/membership" className="text-primary font-medium underline">
          www.cohtag.com/membership
        </a>
      </span>
    ),
  },
  {
    id: 8,
    question: 'Is there a membership fee or monthly dues?',
    answer:
      'Yes. Applicable membership contributions and dues are determined in accordance with COHTAG’s approved structures. Current payment information will be communicated through official COHTAG channels.',
  },
  {
    id: 9,
    question: 'What happens after I complete my membership registration?',
    answer:
      'Your information will be processed and verified, after which your membership details can be incorporated into the official COHTAG membership database.',
  },
  {
    id: 10,
    question: 'Does COHTAG have regional structures?',
    answer:
      'Yes. COHTAG is developing regional and institutional structures to ensure effective communication, mobilisation, participation and representation across Health Training Institutions.',
  },
  {
    id: 11,
    question: 'What professional development opportunities will COHTAG provide?',
    answer:
      'COHTAG intends to organise workshops, seminars, CPD programmes, research activities and other capacity-building opportunities relevant to Health Tutors.',
  },
  {
    id: 12,
    question: 'How will COHTAG protect members’ interests?',
    answer:
      'COHTAG seeks to provide organised representation and advocacy on matters affecting Health Tutors and to engage relevant institutions and stakeholders through appropriate processes.',
  },
  {
    id: 13,
    question: 'How can I become actively involved in COHTAG?',
    answer:
      'Members can participate through regional and institutional structures, committees, professional programmes, research activities, membership mobilisation and other Association initiatives.',
  },
  {
    id: 14,
    question: 'How will COHTAG ensure accountability?',
    answer:
      'COHTAG operates through established governance structures and is committed to transparency, responsible financial management, reporting and accountability to its membership.',
  },
  {
    id: 15,
    question: 'Where can I get official information about COHTAG?',
    answer:
      'Official information and updates can be obtained through the COHTAG website and authorised COHTAG communication channels.',
  },
  {
    id: 16,
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

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  const filteredFaqs = faqData.filter((faq) => {
    const qText = faq.question.toLowerCase()
    const query = searchQuery.toLowerCase()
    return qText.includes(query)
  })

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
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="faq-search-input"
              />
            </div>
          </div>
        )}

        {filteredFaqs.length > 0 ? (
          <div className="faq-list">
            {filteredFaqs.map((faq) => {
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
            })}
          </div>
        ) : (
          <div className="faq-no-results">
            <HelpCircle size={48} className="mx-auto text-muted mb-2" />
            <p>No questions matched your search query. Try typing another keyword.</p>
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
