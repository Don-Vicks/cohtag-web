import React from 'react'
import FAQ from '../components/FAQ'

const FAQPage = () => {
  return (
    <div className="faq-page">
      <header className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about COHTAG membership, registration, governance, and professional development.</p>
        </div>
      </header>

      <FAQ showHeader={false} />
    </div>
  )
}

export default FAQPage
