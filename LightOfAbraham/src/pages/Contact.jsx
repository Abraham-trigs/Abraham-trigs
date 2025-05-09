import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: You will connect this to EmailJS or backend later
    console.log('Form Submitted', formData);
  };

  return (
    <section className="max-w-3xl mx-auto p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-3xl font-bold text-bone mb-6"
      >
        Contact Me
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-bone">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-bone rounded bg-cloud text-bone focus:outline-none focus:ring-2 focus:ring-blood"
            required
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-bone">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-bone rounded bg-cloud text-bone focus:outline-none focus:ring-2 focus:ring-blood"
            required
          />
        </div>

        {/* Subject Dropdown */}
        <div>
          <label htmlFor="subject" className="block mb-1 font-medium text-bone">
            Subject
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-bone rounded bg-cloud text-bone focus:outline-none focus:ring-2 focus:ring-blood"
            required
          >
            <option value="" disabled>
              Select a Subject
            </option>
            <option value="collaboration">Collaboration</option>
            <option value="freelance">Freelance Work</option>
            <option value="feedback">Feedback</option>
            <option value="other">Something Else</option>
          </select>
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-bone">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="w-full px-4 py-2 border border-bone rounded bg-cloud text-bone focus:outline-none focus:ring-2 focus:ring-blood"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileTap={{ scale: 0.95 }}
          className="w-full py-2 px-4 bg-blood text-cloud rounded text-xl font-semibold cursor-pointer transition-colors duration-300 hover:bg-bone hover:text-power"
        >
          Submit
        </motion.button>
      </motion.form>

      {/* Optional: Map/Location Embed */}
      {/* You can add a location map iframe below, if needed. */}

      {/* Social Links */}
      <div className="mt-6 flex justify-center gap-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <motion.i
            className="fab fa-twitter text-2xl text-bone hover:text-blood transition duration-300"
            whileHover={{ scale: 1.2 }}
          />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <motion.i
            className="fab fa-github text-2xl text-bone hover:text-blood transition duration-300"
            whileHover={{ scale: 1.2 }}
          />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <motion.i
            className="fab fa-linkedin text-2xl text-bone hover:text-blood transition duration-300"
            whileHover={{ scale: 1.2 }}
          />
        </a>
      </div>
    </section>
  );
};

export default ContactPage;
