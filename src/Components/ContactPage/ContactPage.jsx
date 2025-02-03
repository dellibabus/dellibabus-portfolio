import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

const apiKey = import.meta.env.VITE_ACCESS_KEY;

const ContactSection = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", apiKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        setResult(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setResult("An error occurred. Please check your network and try again.");
      console.error("Error submitting form:", error);
    }
  };

  return (
    <section className="bg-gray-900 py-16 pt-20" id="contact">
      <div className="text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-teal-500 uppercase tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <motion.p
          className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Feel free to reach out by filling out the form below. I’m always happy
          to collaborate or assist with your projects.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <motion.div
            className="bg-gray-800 w-full max-w-2xl p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-teal-400 mb-6 text-center">
              Get in Touch
            </h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              <input
                type="hidden"
                name="access_key"
                value={import.meta.env.VITE_ACCESS_KEY}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your Email"
                    required
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <label
                  htmlFor="mobile"
                  className="block text-sm font-medium text-gray-300"
                >
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your Mobile Number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number."
                  required
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your Message"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 rounded-lg bg-teal-500 text-white font-semibold hover:bg-teal-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-teal-400"
                disabled={result === "Sending..."}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </motion.button>
            </form>

            {result && (
              <motion.p
                className="text-center text-sm mt-4 text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
