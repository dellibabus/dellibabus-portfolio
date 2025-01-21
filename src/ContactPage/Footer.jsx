import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-300">
          {/* Copyright */}
          <div className="text-center lg:text-left text-sm text-gray-500">
            © {new Date().getFullYear()} Delli Babu. All Rights Reserved.
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:items-start">
            <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
              <FaEnvelope size={20} />
              <a href="mailto:sdellibabu8@gmail.com" className="hover:underline">
                sdellibabu8@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-500 transition-colors duration-300">
              <FaPhoneAlt size={20} />
              <a href="tel:+919344262658" className="hover:underline">
                +91 9344262658
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6 justify-center">
            <a
              href="https://github.com/dellibabus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/delli-babu-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://instagram.com/_x_delli_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-indigo-500 transition-colors duration-300"
            >
              <FaInstagram size={28} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-700" />

        {/* Responsive Behavior */}
        <div className="text-center text-gray-500 text-sm">
          Built with 🤍 by Delli Babu
        </div>
      </div>
    </footer>
  );
};

export default Footer;
