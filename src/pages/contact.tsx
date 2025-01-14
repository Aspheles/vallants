import React, { useState } from "react";
import emailjs from "@emailjs/browser";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
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

    emailjs
      .send(
        "service_298jnrd",
        "template_tzsypnj",
        formData as unknown as Record<string, unknown>,
        "vswyuL8_O9AHF-XXS"
      )
      .then(
        () => {
          setSuccessMessage("Your message has been sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (err) => {
          console.error(err);
          setErrorMessage("Failed to send your message. Please try again.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1D0D4C] to-[#6A00A1] flex items-center justify-center py-8">
      <div className="w-[1600px] px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 ">
          {/* Left Section */}
          <div className="relative">
            <img
              src="/vision.jpg"
              alt="Contact Illustration"
              className="w-full h-full rounded-l-lg bg-blend-multiply bg-indigo-700 object-cover"
            />
            <h1 className="absolute top-11 left-11 text-white text-4xl font-bold">
              Contact us
            </h1>
            <div className="absolute bottom-0 w-full p-8">
              <div className="bg-white rounded-lg py-3 px-3">
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800">Call Us</h3>
                  <p className="text-gray-500">+31 644010132</p>
                </div>
                <div className="mb-3">
                  <h3 className="text-lg font-bold text-gray-800">Email Us</h3>
                  <p className="text-gray-500">vallants.dev@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-gray-100 p-6 lg:p-11 rounded-r-lg shadow-lg">
            <h2 className="text-4xl font-semibold text-[#6A00A1] mb-11">
              Send A Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone (optional)"
                className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                className="w-full h-32 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 pt-2"
                required
              />
              <button
                type="submit"
                disabled={isSending}
                className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 bg-[#6A00A1] hover:bg-[#693483] shadow-sm"
              >
                {isSending ? "Sending..." : "Send"}
              </button>
              {successMessage && (
                <p className="text-green-600 text-sm text-center mt-2">
                  {successMessage}
                </p>
              )}
              {errorMessage && (
                <p className="text-red-600 text-sm text-center mt-2">
                  {errorMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
