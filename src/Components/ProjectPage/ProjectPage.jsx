import React from "react";
import Portfolio from "../../assets/portfolio.jpg";
import wallpaper from "../../assets/wallpaper.jpg";
import movie from "../../assets/movie.jpg";
import Doctor from "../../assets/doctor.1.jpg";
import Lawyer from "../../assets/Lawyer.jpeg";
import Porsche from "../../assets/Porsche.jpg";

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
    title: "Movie Ticket Booking Website Online",
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
  {
    title: "Lawyer Appointment",
    description: "An app for scheduling lawyer appointments with real-time availability.",
    image: Lawyer,
    githubLink: "https://github.com/Lawyerwebsite",
  },
  {
    title: "Porsche Landing Page",
    description: "A responsive landing page for Porsche showcasing their latest models.",
    image: Porsche,
    githubLink: "https://github.com/dellibabus/Porsche",
  }
];

const ProjectSection = () => {
  return (
    <section className="bg-gray-900 py-16 pt-20" id="projects">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-teal-500 uppercase tracking-wide">Projects</h2>
          <p className="text-lg text-gray-300 mt-4">
            Explore some of my featured projects. Click on the links to view the source code on GitHub.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-xl bg-gray-800 group hover:shadow-teal-500/40 transform hover:scale-105 transition-all duration-500 ease-in-out"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm text-center px-4 mb-4">{project.description}</p>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 bg-teal-500 text-white font-medium rounded-lg shadow hover:bg-teal-600 hover:shadow-lg transition-all duration-300"
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
