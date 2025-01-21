import React from "react";

const apiKey = import.meta.env.VITE_ACCESS_KEY;

const ContactSection = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    // Append access key safely
    formData.append("access_key",apiKey);

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
        <h2 className="text-4xl font-bold text-indigo-500 uppercase tracking-wide">
          Contact Me
        </h2>
        <p className="text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          Feel free to reach out by filling out the form below. I’m always happy
          to collaborate or assist with your projects.
        </p>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center">
          <div className="bg-gray-800 w-full max-w-2xl p-6 rounded-lg shadow-xl hover:shadow-2xl transform transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-indigo-400 mb-6 text-center">
              Get in Touch
            </h3>
            <form className="space-y-6" onSubmit={onSubmit}>
              {/* Hidden Input for Access Key */}
              <input type="hidden" name="access_key" value={import.meta.env.VITE_ACCESS_KEY} />

              {/* Grid for Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
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
                    className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
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
                    className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>
              {/* Mobile Number */}
              <div>
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
                  className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your Mobile Number"
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number."
                  required
                />
              </div>
              {/* Message */}
              <div>
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
                  className="w-full p-3 mt-2 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-indigo-500 text-white font-semibold hover:bg-indigo-600 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                disabled={result === "Sending..."}
              >
                {result === "Sending..." ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Result Message */}
            {result && (
              <p className="text-center text-sm mt-4 text-gray-300">
                {result}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
