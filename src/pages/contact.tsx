import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FiPhone, FiMail, FiLinkedin, FiMessageCircle } from "react-icons/fi";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
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
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
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
          <div className="relative rounded-l-lg overflow-hidden shadow-lg">
            <img
              src="/contact.jpg"
              alt="Contact"
              className="w-full h-full object-cover bg-blend-multiply bg-indigo-700"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] md:w-[60%] text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Let's keep in touch!
                </h3>
                <div className="flex flex-row">
                  <div className="flex flex-col gap-4 justify-center">
                    {/* Phone */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FiPhone className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-md text-gray-700">
                          <a href="callto:+31 644010132">+31 644010132</a>
                        </p>
                      </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FiMail className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-md text-gray-700">
                          <a href="mailto:vallants.dev@gmail.com">
                            vallants.dev@gmail.com
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FiLinkedin className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-md text-gray-700">
                          <a
                            href="https://www.linkedin.com/in/yavuz-dereli/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn Profile
                          </a>
                        </p>
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3 text-gray-700">
                      <FiMessageCircle className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-md text-gray-700">
                          <a
                            href="https://wa.me/31644010132"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Chat on WhatsApp
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
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
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder="First Name"
                className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder="Last Name"
                className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
                required
              />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone (optional)"
                className="w-full h-12 text-gray-600 placeholder-gray-500 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="How can we help you?"
                className="w-full h-32 text-gray-600 placeholder-gray-500 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pl-4 pt-2"
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
