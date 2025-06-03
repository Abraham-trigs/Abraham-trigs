import { create } from 'zustand';
import emailjs from '@emailjs/browser';

/**
 * Zustand store for managing contact form submission state and logic.
 */
const useQuickSendEmail = create((set, get) => ({
  isSending: false, // Indicates whether the form is currently being submitted
  isSent: false,    // Indicates whether the form was successfully submitted
  error: null,      // Stores the error message if submission fails
  formData: null,   // Temporarily stores form data before submission

  /**
   * Initializes submission state and stores the form data in memory.
   * @param {Object} data - The form input data.
   */
  startSending: (data) => {
    set({ isSending: true, error: null, formData: data });
  },

  /**
   * Sends the contact form data using EmailJS.
   * Accepts optional callbacks for success and error handling.
   *
   * @param {Object} formRef - React ref to the form DOM element.
   * @param {Function} onSuccess - Callback executed on successful submission.
   * @param {Function} onError - Callback executed if submission fails.
   */
  sendEmail: async (formRef, onSuccess = () => {}, onError = () => {}) => {
    const formElement = formRef?.current;
    if (!formElement) {
      set({ isSending: false, error: 'Form element not found.' });
      return onError(new Error('Form element is null'));
    }

    try {
      const res = await emailjs.sendForm(
        'service_oaxazcv',      // EmailJS service ID
        'template_qfrw65u',     // EmailJS template ID
        formElement,            // DOM element reference
        'xph0AwbfEx6IdLW0c'     // EmailJS public key
      );

      console.log('SUCCESS:', res.text);
      set({ isSending: false, isSent: true });
      onSuccess();
    } catch (error) {
      console.error('Email failed:', error);
      set({ isSending: false, error: 'Failed to send message. Please try again.' });
      onError(error);
    }
  },

  /**
   * Resets the contact form submission status to its initial state.
   */
  resetStatus: () => {
    set({ isSending: false, isSent: false, error: null, formData: null });
  },

  /**
   * Clears all internal form state (recommended for use on component mount).
   */
  clearAll: () => {
    set({ isSending: false, isSent: false, error: null, formData: null });
  }
}));

export default useQuickSendEmail;
