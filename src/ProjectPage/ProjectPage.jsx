import React from "react";
import Portfolio from "../assets/Portfolio.1.jpg";
import wallpaper from "../assets/wp.1.jpg";
import movie from "../assets/movie.jpg";
import Doctor from "../assets/doctor.1.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing my skills, projects, and contact details.",
    image: Portfolio,
    githubLink: "https://github.com/dellibabus/dellibabus-portfolio",
  },
  {
    title: "Wallpaper Website",
    description: "A MERN stack wallpaper website for showcasing high-quality wallpapers.",
    image: wallpaper,
    githubLink: "https://github.com/dellibabus/wallpaper-website-MERN",
  },
  {
    title: "Online Movie Ticket Booking",
    description: "An online platform to book movie tickets with user authentication and payment integration.",
    image: movie,
    githubLink: "https://github.com/PopcornSpot",
  },
  {
    title: "Doctor Appointment",
    description: "An app for scheduling doctor appointments with real-time availability.",
    image: Doctor,
    githubLink: "https://github.com/online-consultation-project",
  },
];

const ProjectSection = () => {
  return (
    <section className="bg-gray-900 py-16 pt-20" id="projects">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-500 uppercase tracking-wide">Projects</h2>
          <p className="text-lg text-gray-300 mt-4">
            Explore some of my featured projects. Click on the links to view the source code on GitHub.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg bg-gray-800 group hover:shadow-2xl transition-all duration-300"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm text-center px-4 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-indigo-500 text-white font-medium rounded-lg shadow hover:bg-indigo-600 hover:shadow-lg transition-all"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
