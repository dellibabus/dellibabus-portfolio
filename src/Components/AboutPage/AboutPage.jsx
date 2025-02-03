import { motion } from "framer-motion";
import WorkExperience from "./experience";
import AboutImage from "../../assets/About-Img.png";

const AboutSection = () => {
  return (
    <div className="bg-gray-900 py-16 lg:py-24">
      <motion.section
        id="about"
        className="container mx-auto px-6 lg:px-12 text-center space-y-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h2
          className="text-5xl font-bold text-teal-500 uppercase text-shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            className="transform transition duration-500 hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={AboutImage}
              alt="About Delli Babu"
              className="max-w-full rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex flex-col text-gray-300 space-y-6 text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              Hello! I'm{" "}
              <span className="text-teal-400 font-semibold">Delli Babu</span>, a
              passionate{" "}
              <span className="text-teal-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              and{" "}
              <span className="text-teal-400 font-semibold">
                UI/UX Designer
              </span>
              . With years of experience in crafting user-friendly, scalable web
              applications, I thrive on solving complex problems with innovative
              solutions.
            </p>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed">
              I specialize in front-end frameworks like{" "}
              <span className="text-teal-400 font-semibold">React</span>, and
              back-end technologies like{" "}
              <span className="text-teal-400 font-semibold">
                Node.js, MongoDB
              </span>
              and{" "}
              <span className="text-teal-400 font-semibold">Express.js</span>.
              My focus is on building seamless user experiences and clean,
              maintainable code. When I'm not coding, you’ll find me exploring
              the latest trends in design or mentoring budding developers.
            </p>
          </motion.div>
        </div>

        {/* Work Experience */}
        <motion.div
          id="work-experience"
          className="pt-16 border-t border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h3 className="text-2xl xl:text-3xl font-semibold text-white text-center mb-8">
            Work Experience
          </h3>
          <WorkExperience />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default AboutSection;
