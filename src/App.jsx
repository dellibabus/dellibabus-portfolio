import React, { useEffect, useState } from 'react';
import Navbar from './Components/NavBar/Navbar';
import HeroSection from './Components/HomePage/HomePage';
import AboutSection from './Components/AboutPage/AboutPage';
import SkillsSection from './Components/SkillPage/SkillPage';
import ProjectSection from './Components/ProjectPage/ProjectPage';
import ContactSection from './Components/ContactPage/ContactPage';
import Footer from './Components/ContactPage/Footer';
import Loader from './Loader/Loader';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <main className="bg-gray-900 text-white">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectSection />
            <ContactSection />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default App;