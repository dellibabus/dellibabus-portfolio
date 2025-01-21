import React from "react";

const HomePage = () => {
    return (
        <div className="bg-gray-900 min-h-screen flex items-center justify-center">
            <style>
                {`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateX(50px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                .fade-in {
                    animation: fadeIn 1.5s ease-in-out;
                }

                .slide-in {
                    animation: slideIn 1.5s ease-in-out;
                }
                `}
            </style>
            <section id="home" className="container mx-auto px-6 py-12 pt-20 lg:flex lg:items-center lg:justify-between">
                {/* Left Section - Text */}
                <div className="space-y-8 lg:w-1/2 fade-in">
                    <h1 className="text-4xl xl:text-5xl font-extrabold text-white leading-snug tracking-wide">
                        Heyy, I'm Delli Babu{" "}
                    </h1>
                    <h2 className="mt-4 text-4xl text-gray-300">
                        <span className="text-indigo-400">Full Stack Developer</span> and{" "}
                        <span className="text-indigo-400">UI/UX Designer</span>
                    </h2>
                    <p className="text-gray-300 max-w-2xl leading-relaxed">
                        Passionate about creating interactive web applications. I specialize
                        in front-end and back-end technologies, building seamless and
                        dynamic user experiences. Let’s create something extraordinary
                        together!
                    </p>
                    <div className="flex flex-wrap gap-4 pt-8">
                        <a
                            href=""
                            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium rounded-sm shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-2xl hover:from-indigo-500 hover:to-indigo-700"
                        >
                            Hire Me
                        </a>
                        <a
                            href="contact"
                            className="px-8 py-3 bg-gray-800 text-gray-300 font-medium rounded-sm shadow-md transition-transform duration-300 hover:scale-110 hover:shadow-lg hover:bg-gray-700"
                        >
                            Contact
                        </a>
                    </div>
                </div>

                {/* Right Section - Image */}
                <div className="mt-10 lg:mt-0 lg:w-1/2 hidden md:block slide-in">
                    <img
                        src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
                        alt="Heatmap Illustration"
                        className="w-full max-w-lg mx-auto rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-105"
                    />
                </div>
            </section>
        </div>
    );
};

export default HomePage;
