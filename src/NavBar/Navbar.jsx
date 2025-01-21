import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home'); // State to store active link

  const Navlist = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Contact', link: 'contact' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to check which section is in view
  const handleScroll = () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const scrollPosition = window.scrollY + 50; // Adjust for better accuracy

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

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to dynamically apply the active class
  const isActiveLink = (link) => (activeLink === link ? 'text-indigo-400' : 'text-white');

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 h-20 text-white p-4 flex items-center justify-between shadow-lg z-50">

      <div className="text-2xl font-extrabold tracking-wide">
        <a href="#home" className="hover:text-gray-200">
          <span className='text-indigo-400 underline'>D</span>elli.
        </a>
      </div>


      <div
        className={`${isOpen ? 'block' : 'hidden'
          } md:flex flex-1 justify-center items-center md:static absolute top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
      >
        <ul className="flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0 items-center text-lg">
          {Navlist.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.link}`}
                className={`hover:text-indigo-400 transition ease-in duration-500 ${isActiveLink(item.link)}`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>


      {!isOpen && (
        <div className="hidden md:flex items-center space-x-5">
          <a
            href="https://github.com/dellibabus"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition ease-in duration-500"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/delli-babu-s"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-400 transition ease-in duration-500"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      )}


      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <FaTimes size={28} className="hover:text-gray-200" /> : <FaBars size={28} className="hover:text-gray-200" />}
      </div>
    </nav>
  );
};

export default Navbar;
