import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaDatabase, FaFigma } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26] text-7xl mb-4" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6] text-7xl mb-4" /> },
  { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E] text-7xl mb-4" /> },
  { name: "ReactJS", icon: <FaReact className="text-[#61DAFB] text-7xl mb-4" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-[#7952B3] text-7xl mb-4" /> },
  { name: "TailwindCss", icon: <RiTailwindCssFill className="text-[#06B6D4] text-7xl mb-4" /> },
  { name: "NodeJS", icon: <FaNodeJs className="text-[#339933] text-7xl mb-4" /> },
  { name: "Express", icon: <SiExpress className="text-gray-300 text-7xl mb-4" /> },
  { name: "SQL", icon: <FaDatabase className="text-[#003B57] text-7xl mb-4" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248] text-7xl mb-4" /> },
  { name: "Figma", icon: <FaFigma className="text-[#F24E1E] text-7xl mb-4" /> },
];

const SkillsSection = () => {
  return (
    <section className="bg-gray-900 py-16 pt-20" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-500 uppercase mb-6">Skills</h2>
          <p className="text-lg text-gray-400">
            A collection of technologies and tools I have worked with.
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center w-[130px] sm:w-[160px] lg:w-[180px] h-[130px] sm:h-[160px] lg:h-[180px] p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-indigo-500/40 transform hover:scale-110 transition-all duration-300"
            >
              {skill.icon}
              <h5 className="text-base sm:text-lg lg:text-xl font-semibold text-white mt-2 text-center">
                {skill.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
