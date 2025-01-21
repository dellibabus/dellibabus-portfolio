import React from "react";
import WhyGlobalLogo from "../assets/wog.png";

const WorkExperience = () => {
    const experiences = [
        {
            role: "UI/UX Designer",
            company: "Why Global Services",
            date: "July 2023 - Jan 2025",
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
            date: "January 2024 - Present",
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
        <section className="w-full bg-gray-900 text-white px-6">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl sm:text-5xl font-bold text-center mb-12">
                    What I Have Done So Far
                    <span className="block text-indigo-500">Work Experience</span>
                </h2>

                <div className="relative border-l-4 border-indigo-500 pl-8">
                    {experiences.map((experience, index) => (
                        <div
                            key={index}
                            className="mb-16 relative flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <div className="absolute -left-12 top-0 w-8 h-8 bg-gradient-to-r from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center">
                                <span className="w-4 h-4 bg-gray-900 rounded-full"></span>
                            </div>
                            <p className="text-sm text-gray-400 sm:mr-6">
                                {experience.date}
                            </p>
                            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex-1 transition-transform duration-300 hover:scale-105">
                                <div className="flex items-center mb-4">
                                    <img
                                        src={experience.logo}
                                        alt={`${experience.company} logo`}
                                        className="w-14 h-14 rounded bg-gray-700 p-2 mr-4"
                                    />
                                    <div>
                                        <h3 className="text-xl font-semibold text-indigo-400">
                                            {experience.role}
                                        </h3>
                                        <h4 className="text-md text-gray-300">{experience.company}</h4>
                                    </div>
                                </div>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    {experience.details.map((detail, i) => (
                                        <li key={i}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <hr />
        </section>
    );
};

export default WorkExperience;
