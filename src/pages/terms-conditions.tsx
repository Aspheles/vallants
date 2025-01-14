import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="p-6 font-sans bg-gradient-to-b from-[#1D0D4C] to-[#6A00A1] text-gray-800">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          Terms and Conditions
        </h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              1. Introduction
            </h2>
            <p className="mt-2 text-gray-600">
              Welcome to Vallants! These Terms and Conditions ("Terms") govern
              the provision of website design and development services
              ("Services") by Vallants ("we," "our," or "us") to our clients
              ("Client," "you," or "your"). By engaging our Services, you agree
              to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              2. Scope of Services
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                We provide custom website design and development tailored to
                your requirements.
              </li>
              <li>
                Additional services such as maintenance, hosting, or third-party
                integrations will be agreed upon separately.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              3. Client Responsibilities
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                You shall provide timely access to necessary materials,
                information, and feedback required to complete the project.
              </li>
              <li>
                You are responsible for securing appropriate rights for any
                content provided to us for use in the project.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              4. Fees and Payment
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Fees for Services will be outlined in the project proposal or
                invoice.
              </li>
              <li>
                A deposit of 50% is required before commencement of the project.
              </li>
              <li>
                Full payment is due within 10 days of project completion or as
                otherwise agreed.
              </li>
              <li>Late payments may incur additional charges.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              5. Revisions and Approval
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Minor revisions are included in the agreed-upon fee. Major
                revisions may incur additional charges.
              </li>
              <li>
                Final approval from the Client is required before the project is
                considered complete.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              6. Intellectual Property
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Upon full payment, the intellectual property rights of the final
                deliverables will be transferred to you, excluding any
                third-party materials or tools used.
              </li>
              <li>
                We retain the right to showcase the project in our portfolio
                unless explicitly restricted by the Client.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              7. Confidentiality
            </h2>
            <p className="mt-2 text-gray-600">
              Both parties agree to maintain confidentiality of proprietary or
              sensitive information exchanged during the project.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              8. Warranties and Limitation of Liability
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                We warrant that our Services will be performed professionally
                and to the best of our abilities.
              </li>
              <li>
                We are not responsible for any issues arising from third-party
                platforms, tools, or content provided by the Client.
              </li>
              <li>
                Our liability is limited to the fees paid by the Client for the
                specific project.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              9. Termination
            </h2>
            <ul className="mt-2 space-y-2 list-disc list-inside text-gray-600">
              <li>
                Either party may terminate the agreement with written notice.
              </li>
              <li>
                Upon termination, all outstanding fees for work completed will
                become due immediately.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              10. Governing Law
            </h2>
            <p className="mt-2 text-gray-600">
              These Terms shall be governed by and construed in accordance with
              the laws of the Netherlands.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              11. Amendments
            </h2>
            <p className="mt-2 text-gray-600">
              We reserve the right to update these Terms from time to time.
              Clients will be notified of any significant changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800">
              12. Entire Agreement
            </h2>
            <p className="mt-2 text-gray-600">
              These Terms constitute the entire agreement between Vallants and
              the Client, superseding any prior agreements or understandings.
            </p>
          </section>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-600">
            If you have any questions about these Terms, please contact us at{" "}
            <a
              href="mailto:vallants.dev@gmail.com"
              className="text-blue-500 underline font-medium"
            >
              vallants.dev@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
