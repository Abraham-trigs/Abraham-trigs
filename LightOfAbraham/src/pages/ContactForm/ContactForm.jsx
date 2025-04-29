import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        form.current,
        "your_public_key"
      )
      .then(
        () => {
          setSent(true);
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white dark:bg-cloud rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4 text-bone">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-2 border rounded-xl bg-cloud text-black"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 border rounded-xl bg-cloud text-black"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full px-4 py-2 border rounded-xl bg-cloud text-black"
          rows="4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blood hover:bg-red-800 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
        >
          Send Message
        </button>
        {sent && (
          <p className="text-green-600 text-center pt-2">
            ✅ Message sent successfully!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
