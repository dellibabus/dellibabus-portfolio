import React, { useState, useEffect } from "react";
import Background from "../../assets/background1.png"

const HomePage = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer"];

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-900"></div>
            <style>
                {`
        @keyframes fadeIn {<style>
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideIn {
    0% {
      opacity: 0;
      transform: translateX(50px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .fade-in {
    animation: fadeIn 1.2s ease-in-out;
  }

  .slide-in {
    animation: slideIn 1.2s ease-in-out;
  }

  .text-glow {
    text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.6),
                 0px 0px 16px rgba(46, 213, 115, 0.8),
                 0px 0px 24px rgba(46, 213, 115, 0.9);
  }

  .btn-glow {
    box-shadow: 0 4px 10px rgba(46, 213, 115, 0.4),
                0 2px 20px rgba(46, 213, 115, 0.6);
    transition: box-shadow 0.3s, transform 0.3s;
  }

  .btn-glow:hover {
    box-shadow: 0 6px 20px rgba(46, 213, 115, 0.6),
                0 4px 30px rgba(46, 213, 115, 0.8);
    transform: scale(1.05);
  }

  .btn-outline {
    border: 2px solid #10B981;
    background-color: transparent;
    color: #10B981;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
  }

  .btn-outline:hover {
    background-color: #10B981;
    color: #fff;
    transform: scale(1.05);
  }

  .image-hover {
    transition: transform 0.5s ease, box-shadow 0.5s ease;
  }

  .image-hover:hover {
    transform: scale(1.1) rotate(3deg);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .gradient-bg {
    background: linear-gradient(
      to bottom right,
      #1E3A8A,
      #2563EB,
      #10B981
    );
    background-size: 400% 400%;
    animation: gradientAnimation 6s ease infinite;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
</style>

          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .fade-in {
          animation: fadeIn 1.2s ease-in-out;
        }

        .slide-in {
          animation: slideIn 1.2s ease-in-out;
        }

        . {
          text-shadow: 0px 0px 8px rgba(255, 255, 255, 0.5),
                       0px 0px 16px rgba(46, 213, 115, 0.6),
                       0px 0px 24px rgba(46, 213, 115, 0.7);
        }

        .btn-glow {
          box-shadow: 0 4px 10px rgba(46, 213, 115, 0.4),
                      0 2px 20px rgba(46, 213, 115, 0.6);
        }

        .btn-glow:hover {
          box-shadow: 0 6px 20px rgba(46, 213, 115, 0.6),
                      0 4px 30px rgba(46, 213, 115, 0.8);
        }

        .image-hover {
          transition: transform 0.5s, box-shadow 0.5s;
        }

        .image-hover:hover {
          transform: scale(1.1) rotate(2deg);
        }
        `}
            </style>
            <section
                id="home"
                className="relative container mx-auto px-6 py-12 pt-20 lg:flex lg:items-center lg:justify-between z-10"
            >
                <div className="space-y-8 lg:w-1/2 fade-in">
                    <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-snug tracking-wide">
                        Heyy, I'm Delli Babu
                    </h1>
                    <h2 className="mt-4 text-3xl md:text-4xl text-gray-300">
                        <span className="text-teal-500 ">{roles[currentRole]}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        Passionate about creating interactive web applications. I specialize
                        in front-end and back-end technologies, building seamless and
                        dynamic user experiences. Let’s create something extraordinary
                        together!
                    </p>
                    <div className="flex flex-wrap gap-4 pt-8">
                        <a
                            href="https://linkedin.com/in/delli-babu-s"
                            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-500 text-white font-medium rounded-md shadow-lg transition-transform duration-300 hover:scale-110"
                        >
                            Hire Me
                        </a>
                        <button
                            onClick={scrollToContact}
                            className="px-8 py-3 bg-gray-800 border border-teal-500 text-gray-300 font-medium rounded-md shadow-lg transition-transform duration-300 hover:scale-110 hover:bg-gray-700"
                        >
                            Contact
                        </button>
                    </div>
                </div>

                <div className="mt-10 lg:mt-0 lg:w-1/2 hidden md:block slide-in">
                    <img
                        src={Background}
                        alt="Heatmap Illustration"
                        className="w-full max-w-lg mx-auto image-hover"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
