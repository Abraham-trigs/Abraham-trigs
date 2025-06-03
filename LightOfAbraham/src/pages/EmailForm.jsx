import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '../../components/UI/Logo';
import useContactStore from "../../store/ContactFormStore";

const ContactForm = () => {
  const formRef = useRef(); // Form reference used for EmailJS integration
  const navigate = useNavigate(); // Used for post-submission redirection

  const [fileName, setFileName] = useState("No file selected"); // Displays name or error for selected file

  // Zustand store for contact form submission state management
  const {
    isSending,     // Indicates whether the message is currently being sent
    isSent,        // Indicates whether the message was sent successfully
    error,         // Holds any error encountered during submission
    startSending,  // Action to initiate loading state and store form data
    sendEmail,     // Async action to submit the form through EmailJS
    resetStatus,   // Resets form state after submission
  } = useContactStore();

  // Maximum allowed file size: 5MB
  const MAX_FILE_SIZE = 1 * 1024 * 1024;

  /**
   * Handles submission of the contact form.
   * Validates inputs and triggers the EmailJS send action.
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    startSending(formData);

    sendEmail(formRef, () => {
      // Success callback: clear form and redirect after short delay
      formRef.current.reset();
      setFileName("No file selected");

      setTimeout(() => {
        navigate('/');
        resetStatus();
      }, 2000);
    });
  };

  /**
   * Handles file input change event.
   * Validates selected file size and updates UI state.
   */
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.size > MAX_FILE_SIZE) {
      setFileName("❌ File size exceeds 50kb limit");
      e.target.value = ''; // Clears the invalid file from input
    } else {
      setFileName(file ? file.name : "No file selected");
    }
  };

  /**
   * Triggers status reset after a successful submission.
   * Ensures temporary state like `isSent` and `error` is cleared after display.
   */
  useEffect(() => {
    if (isSent) {
      const timer = setTimeout(() => resetStatus(), 5000);
      return () => clearTimeout(timer);
    }
  }, [isSent]);

  return (
    <div className="max-w-md mx-auto p-6 bg-air rounded-2xl flex flex-col shadow-md">
      
      {/* Logo Display */}
      <div className="max-w-md mx-auto rounded-2xl my-4">
        <Logo />
      </div>

      {/* Header */}
      <h2 className="text-2xl font-bold text-center mb-4 text-bone">
        Contact Me
      </h2>

      {/* Contact Form */}
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="space-y-4 bg-air"
        encType="multipart/form-data"
      >
        {/* Full Name Field */}
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-xl bg-air text-bone"
          required
        />

        {/* Email Address Field */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-xl bg-air text-power"
          required
        />

        {/* Message Body */}
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-xl bg-air text-bone"
          rows="4"
          required
        />

        {/* File Attachment Upload */}
        <div className="space-y-1">
          <input
            type="file"
            name="attachment"
            className="w-full px-4 py-2 border rounded-xl bg-air text-bone"
            accept=".jpg,.png,.pdf,.doc,.docx"
            onChange={handleFileChange}
          />
          <p className="text-xs text-cloud">{fileName}</p>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSending}
          className={`w-full ${isSending ? 'bg-gray-500 cursor-not-allowed' : 'bg-bone hover:bg-blood'} text-power font-semibold py-2 px-4 rounded-xl transition-all duration-300`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {/* Feedback Messages */}
        {isSent && (
          <p className="text-green-600 text-center pt-2">
            ✅ Message sent successfully!
          </p>
        )}
        {error && (
          <p className="text-red-600 text-center pt-2">
            {error}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
