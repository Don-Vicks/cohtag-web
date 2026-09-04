import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import About from './pages/About';
import Leadership from './pages/Leadership';
import Membership from './pages/Membership';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQ';

function App() {
  return (
    <SmoothScroll>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="leadership" element={<Leadership />} />
            <Route path="membership" element={<Membership />} />
            <Route path="projects" element={<Projects />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />
            <Route path="faq" element={<FAQPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </SmoothScroll>
  );
}

export default App;
