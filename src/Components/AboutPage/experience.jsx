import React from "react";
import { motion } from "framer-motion";
import WhyGlobalLogo from "../../assets/wog.png";

const WorkExperience = () => {
  const experiences = [
    {
      role: "UI/UX Designer",
      company: "Why Global Services",
      date: "July 2024 - Jan 2025",
      logo: WhyGlobalLogo,
      details: [
        "Conducted user research through surveys, interviews, and usability tests to understand user needs and preferences.",
        "Created wireframes, prototypes, and high-fidelity mockups using tools like Figma, Sketch, and Adobe XD.",
        "Developed user personas and journey maps to identify pain points and enhance the user experience.",
        "Collaborated with developers to ensure the seamless implementation of designs and consistent branding.",
      ],
    },
    {
      role: "Full-Stack Web Developer Intern",
      company: "Why Global Services",
      date: "July 2024 - Jan 2025",
      logo: WhyGlobalLogo,
      details: [
        "Developed dynamic and responsive web applications using modern frameworks and libraries.",
        "Implemented secure and scalable APIs for seamless communication between front-end and back-end systems.",
        "Enhanced application performance through optimized database queries and caching techniques.",
        "Collaborated with the design team to ensure a cohesive user experience and responsive design.",
      ],
    },
  ];

  return (
    <motion.section
      className="w-full bg-gray-900 text-white px-6 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-5xl font-bold text-center mb-12"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          What I Have Done So Far
          <span className="block text-teal-500">Work Experience</span>
        </motion.h2>

        {/* Experience Timeline */}
        <div className="relative border-l-4 border-teal-500 pl-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              className="mb-16 relative flex flex-col sm:flex-row items-start sm:items-center gap-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.7 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <span className="w-4 h-4 bg-gray-900 rounded-full"></span>
              </div>

              {/* Date */}
              <p className="text-sm text-gray-400 sm:mr-6">{experience.date}</p>

              {/* Experience Card */}
              <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 hover:shadow-xl hover:shadow-teal-500/50 transform hover:scale-105 transition-all duration-300 ease-in-out">
                <div className="flex items-center mb-4">
                  <motion.img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="w-14 h-14 rounded-full bg-gray-700 p-2 mr-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-teal-400">
                      {experience.role}
                    </h3>
                    <h4 className="text-md text-gray-300">{experience.company}</h4>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {experience.details.map((detail, i) => (
                    <motion.li
                      key={i}
                      className="hover:text-teal-400 transition-colors duration-200"
                      whileHover={{ x: 10 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="border-gray-700 mt-12" />
    </motion.section>
  );
};

export default WorkExperience;
