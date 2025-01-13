import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import { ModalProvider } from "./utils/ModalContext.tsx";
import ContactFormModal from "./components/ContactForm.tsx";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Analytics />
    <BrowserRouter>
      <ModalProvider>
        <ContactFormModal />
        <App />
      </ModalProvider>
    </BrowserRouter>
  </StrictMode>
);
