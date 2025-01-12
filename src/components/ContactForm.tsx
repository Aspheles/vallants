import React, { useState } from "react";
import { useModal } from "../utils/ModalContext";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactFormModal: React.FC = () => {
  const { isModalOpen, closeModal } = useModal();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Casting formData to Record<string, unknown> to satisfy emailjs type
    emailjs
      .send(
        "service_298jnrd",
        "template_tzsypnj",
        formData as unknown as Record<string, unknown>, // Type assertion here
        "vswyuL8_O9AHF-XXS"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (err) => {
          console.error(err);
          setErrorMessage("Failed to send your message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 w-full max-w-lg relative">
            <button
              onClick={() => {
                setFormData({ name: "", email: "", message: "" });
                closeModal();
              }}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              ✖
            </button>

            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Contact Us
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-6">
              {/* Input Fields */}
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full border rounded px-4 py-2"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full border rounded px-4 py-2"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="w-full border rounded px-4 py-2"
                rows={4}
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full px-4 py-2 bg-gradient-to-r from-[#470981] to-[#A900FF] text-white rounded-md"
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {successMessage && (
                <p className="text-green-600 text-sm">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-sm">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactFormModal;
