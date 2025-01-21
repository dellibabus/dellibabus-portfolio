import WorkExperience from "./experience";

const AboutSection = () => {
    return (
        <div className="bg-gray-900 py-16">
            <section id="about" className="container mx-auto px-6 lg:px-12 text-center space-y-16">
                {/* About Me Section */}
                <div className="flex flex-col items-center text-gray-300 space-y-6">
                    <h2 className="text-4xl font-semibold text-indigo-500 uppercase mb-4">
                        About Me
                    </h2>
                    <p className="leading-relaxed text-lg text-gray-300 max-w-3xl">
                        Hello! I'm <span className="text-indigo-400">Delli Babu</span>, a passionate <span className="text-indigo-400">Full Stack Developer</span>
                        and <span className="text-indigo-400">UI/UX Designer</span>. With years of experience in crafting user-friendly,
                        scalable web applications, I thrive on solving complex problems with innovative solutions.
                    </p>
                    <p className="leading-relaxed text-lg text-gray-300 max-w-3xl">
                        I specialize in front-end frameworks like <span className="text-indigo-400">React</span>, and back-end technologies like
                        <span className="text-indigo-400"> Node.js, MongoDB,</span> and <span className="text-indigo-400">Redis</span>. My focus is on building seamless user experiences and
                        clean, maintainable code. When I'm not coding, you’ll find me exploring the latest trends in design
                        or mentoring budding developers.
                    </p>
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
