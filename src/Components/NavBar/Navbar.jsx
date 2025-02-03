import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const Navlist = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 50;

    sections.forEach((section) => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(section);
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (link) => (activeLink === link ? 'text-teal-400 font-semibold' : 'text-gray-300');

  return (
    <nav className="fixed top-0 left-0 w-full h-16 bg-gray-900 text-white flex items-center justify-between px-6 md:px-12 shadow-lg z-50">
      {/* Logo */}
      <div className="text-2xl font-extrabold tracking-wide">
        <a href="#home" className="hover:text-gray-200 transition duration-300">
          <span className="text-teal-400 hover:underline">D</span>elli.
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-10">
        <ul className="flex space-x-8 items-center text-lg">
          {Navlist.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.link}`}
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink(item.link)}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/dellibabus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/delli-babu-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Mobile Menu Toggle Button */}
      <div className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
        {isOpen ? (
          <FaTimes size={28} className="hover:text-gray-200 transition duration-300" />
        ) : (
          <FaBars size={28} className="hover:text-gray-200 transition duration-300" />
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-20 right-0 w-64 h-[calc(100vh-5rem)] bg-gray-900 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        <ul className="flex flex-col space-y-6 p-6 text-lg">
          {Navlist.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.link}`}
                className={`hover:text-teal-400 transition duration-300 ${isActiveLink(item.link)}`}
                onClick={() => setIsOpen(false)} // Close menu on link click
                aria-label={`Navigate to ${item.name}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons in Mobile Menu */}
        <div className="flex items-center space-x-6 p-6">
          <a
            href="https://github.com/dellibabus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/delli-babu-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-400 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
