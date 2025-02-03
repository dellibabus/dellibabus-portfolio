import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 text-gray-300">
          <motion.div
            className="text-center lg:text-left text-sm text-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            © {new Date().getFullYear()} Delli Babu. All Rights Reserved.
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 lg:items-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 text-gray-400 hover:text-teal-500 transition-colors duration-300">
              <FaEnvelope size={20} />
              <a
                href="mailto:sdellibabu8@gmail.com"
                className="hover:underline"
              >
                sdellibabu8@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-400 hover:text-teal-500 transition-colors duration-300">
              <FaPhoneAlt size={20} />
              <a href="tel:+919344262658" className="hover:underline">
                +91 9344262658
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex gap-4 sm:gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a
              href="https://github.com/dellibabus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://linkedin.com/in/delli-babu-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://instagram.com/_x_delli_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-300 transform hover:scale-110"
            >
              <FaInstagram size={28} />
            </a>
          </motion.div>
        </div>

        <hr className="my-8 border-gray-700" />

        <motion.div
          className="text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Built with by Delli Babu 🤍
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
