import React from "react";
import { Routes, Route } from "react-router";

import Home from "../pages/home";
import About from "../pages/about";
import Pricing from "../pages/pricing";
import NotFound from "../pages/notfound";
import Cases from "../pages/cases";
import Contact from "../pages/contact";
import TermsAndConditions from "../pages/terms-conditions";
import PrivacyAndPolicy from "../pages/privacy-policy";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      <Route path="/terms-conditions" element={<TermsAndConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
