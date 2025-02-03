import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Background from "../../assets/background1.png";

const HomePage = () => {
    const [currentRole, setCurrentRole] = useState(0);
    const roles = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "UI/UX Designer"];

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
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gray-900"></div>

            {/* Main Section */}
            <motion.section
                id="home"
                className="relative container mx-auto px-6 py-12 pt-20 lg:flex lg:items-center lg:justify-between z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
            >
                {/* Text Content */}
                <motion.div
                    className="space-y-8 lg:w-1/2"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                >
                    <h1 className="text-5xl xl:text-6xl font-extrabold text-white leading-snug tracking-wide">
                        Heyy, I'm <span className="text-teal-500">Delli Babu</span>
                    </h1>
                    <h2 className="mt-4 text-3xl md:text-4xl text-gray-300">
                        <span className="text-teal-500">{roles[currentRole]}</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl leading-relaxed">
                        Passionate about creating interactive web applications. I specialize
                        in front-end and back-end technologies, building seamless and dynamic user experiences. Let’s create something extraordinary together!
                    </p>
                    <div className="flex flex-wrap gap-4 pt-8">
                        <motion.a
                            href="https://linkedin.com/in/delli-babu-s"
                            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-green-500 text-white font-medium rounded-md shadow-lg btn-glow"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Hire Me
                        </motion.a>
                        <motion.button
                            onClick={scrollToContact}
                            className="px-8 py-3 bg-gray-800 border border-teal-500 text-gray-300 font-medium rounded-md shadow-lg btn-outline"
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Contact
                        </motion.button>
                    </div>
                </motion.div>

                {/* Image Section */}
                <motion.div
                    className="mt-10 lg:mt-0 lg:w-1/2 hidden md:block"
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <motion.img
                        src={Background}
                        alt="Heatmap Illustration"
                        className="w-full max-w-lg mx-auto image-hover"
                        whileHover={{ scale: 1.05, rotate: 2 }}
                        transition={{ duration: 0.5 }}
                    />
                </motion.div>
            </motion.section>
        </div>
    );
};

export default HomePage;
