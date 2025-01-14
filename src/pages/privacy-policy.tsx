import React from "react";

const PrivacyAndPolicy: React.FC = () => {
  return (
    <div className="p-6 font-sans bg-gradient-to-b from-[#1D0D4C] to-[#6A00A1] text-gray-800">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Privacy Policy
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Introduction
            </h2>
            <p className="mt-2 text-gray-600">
              Vallants ("we," "our," or "us") values your privacy. This Privacy
              Policy outlines how we collect, use, and protect your personal
              information when you use our website (
              <a
                href="https://vallants.com"
                className="text-blue-500 underline"
              >
                https://vallants.com
              </a>
              ) and our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Information We Collect
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                <strong>Personal Information:</strong> We may collect
                information such as your name, email address, phone number, and
                billing details when you interact with us or use our services.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> This includes data
                like IP addresses, browser types, and usage patterns, which help
                us improve our website and services.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              3. How We Use Your Information
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>To provide and improve our services.</li>
              <li>
                To communicate with you regarding inquiries, projects, or
                support.
              </li>
              <li>
                To process payments and maintain records for compliance and
                invoicing.
              </li>
              <li>
                To send updates, promotional materials, or important notices
                (you may opt-out of marketing communications).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Information Sharing
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                We do not sell, rent, or trade your personal information to
                third parties.
              </li>
              <li>
                We may share your information with trusted third-party service
                providers who assist us in delivering our services (e.g.,
                payment processors, hosting providers).
              </li>
              <li>
                We may disclose information if required by law or to protect our
                rights, property, or safety.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Data Storage and Security
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Your data is stored securely using industry-standard encryption
                and security measures.
              </li>
              <li>
                While we strive to protect your information, no method of
                transmission over the internet or electronic storage is
                completely secure.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Cookies and Tracking Technologies
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                We use cookies to enhance your experience on our website.
                Cookies help us understand user behavior and improve
                functionality.
              </li>
              <li>
                You can adjust your browser settings to refuse cookies, but this
                may limit your ability to use some features of our website.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Your Rights
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                You have the right to access, correct, or delete your personal
                information.
              </li>
              <li>
                You can object to the processing of your data or request data
                portability where applicable.
              </li>
              <li>
                To exercise these rights, contact us at{" "}
                <a
                  href="mailto:vallants.dev@gmail.com"
                  className="text-blue-500 underline"
                >
                  vallants.dev@gmail.com
                </a>
                .
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              8. Third-Party Links
            </h2>
            <p className="mt-2 text-gray-600">
              Our website may contain links to third-party websites. We are not
              responsible for their privacy practices, and we encourage you to
              review their policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to update this Privacy Policy at any time.
              Changes will be posted on this page with a revised "Last Updated"
              date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              10. Contact Us
            </h2>
            <p className="mt-2 text-gray-600">
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <ul className="mt-2 text-gray-600">
              <li>
                <strong>Vallants</strong>
              </li>
              <li>
                Email:{" "}
                <a
                  href="mailto:vallants.dev@gmail.com"
                  className="text-blue-500 underline"
                >
                  vallants.dev@gmail.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://vallants.com"
                  className="text-blue-500 underline"
                >
                  https://vallants.com
                </a>
              </li>
              <li>Location: Netherlands</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
