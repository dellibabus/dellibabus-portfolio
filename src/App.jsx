import React from 'react';
import Navbar from './NavBar/Navbar';
import HeroSection from './HomePage/HomePage';
import AboutSection from './AboutPage/AboutPage';
import SkillsSection from './SkillPage/SkillPage';
import ProjectScetion from './ProjectPage/ProjectPage';
import ContactSection from './ContactPage/ContactPage';
import Footer from './ContactPage/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectScetion/>
        <ContactSection/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
