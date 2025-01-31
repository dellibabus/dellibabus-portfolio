import WorkExperience from "./experience";
import AboutImage from "../../assets/About-Img.png"

const AboutSection = () => {
    return (
        <div className="bg-gray-900 py-16">
            <section
                id="about"
                className="container mx-auto px-6 lg:px-12 text-center space-y-16 animate__animated animate__fadeInUp"
            >
                <h2 className="text-5xl font-semibold text-white uppercase mb-4 text-shadow-lg">
                    About Me
                </h2>
                {/* About Me Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="transform transition duration-500 hover:scale-105">
                        <img
                            src={AboutImage}
                            alt="About Delli Babu"
                            className="max-w-full rounded-xl shadow-xl transition duration-500 ease-in-out hover:scale-105"
                        />
                    </div>
                    {/* Text Section */}
                    <div className="flex flex-col text-gray-300 space-y-6 text-left">
                        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                            Hello! I'm{" "}
                            <span className="text-teal-400 font-semibold">Delli Babu</span>, a passionate{" "}
                            <span className="text-teal-400 font-semibold">Full Stack Developer</span> and{" "}
                            <span className="text-teal-400 font-semibold">UI/UX Designer</span>. With years of
                            experience in crafting user-friendly, scalable web applications, I thrive on solving
                            complex problems with innovative solutions.
                        </p>
                        <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                            I specialize in front-end frameworks like{" "}
                            <span className="text-teal-400 font-semibold">React</span>, and back-end technologies
                            like <span className="text-teal-400 font-semibold">Node.js, MongoDB</span>, and{" "}
                            <span className="text-teal-400 font-semibold">Express.js</span>. My focus is on
                            building seamless user experiences and clean, maintainable code. When I'm not coding,
                            you’ll find me exploring the latest trends in design or mentoring budding developers.
                        </p>
                    </div>
                </div>

                {/* Work Experience Section */}
                <div id="work-experience" className="pt-16 border-t border-gray-700">
                    <h3 className="text-2xl xl:text-3xl font-semibold text-white text-center mb-8">
                        Work Experience
                    </h3>
                    <WorkExperience />
                </div>
            </section>
        </div>
    );
};

export default AboutSection;

