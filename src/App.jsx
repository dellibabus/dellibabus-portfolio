import React from 'react';
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/HomePage/HomePage';
import AboutSection from './Components/AboutPage/AboutPage';
import SkillsSection from './Components/SkillPage/SkillPage';
import ProjectScetion from './Components/ProjectPage/ProjectPage';
import ContactSection from './Components/ContactPage/ContactPage';
import Footer from './Components/ContactPage/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <main className="bg-gray-900 text-white">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectScetion />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default App;
