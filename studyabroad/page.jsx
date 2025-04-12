"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Nav from "./Nav";
import Form from "./Form";
import Two from "./Two";
import Footer from "./Footer";

const ContactPage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  useEffect(() => {
    const metaDescription = document.querySelector("meta[name='description']");
    const metaKeywords = document.querySelector("meta[name='keywords']");

    // Set initial title + meta
    document.title =
      "Study Abroad – Explore Global Education Paths | VJC Overseas";

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Get expert guidance to study abroad with VJC Overseas. Explore top universities, countries, scholarships & student visa options. Begin your journey now!"
      );
    }

    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "study abroad consultants, overseas education consultants, study abroad with scholarship, study abroad, abroad education consultants, foreign study consultancy, overseas study consultants, abroad for studies, study in UK, study in Canada, study in Australia, study in Germany"
      );
    }

    // Optional scroll-based update
    const handleScroll = () => {
      if (window.scrollY > 300) {
        document.title = "Get In Touch | VJC Overseas";
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            "Contact VJC Overseas to begin your study abroad journey. We're here to support you at every step."
          );
        }
      } else {
        document.title =
          "Study Abroad – Explore Global Education Paths | VJC Overseas";
        if (metaDescription) {
          metaDescription.setAttribute(
            "content",
            "Get expert guidance to study abroad with VJC Overseas. Explore top universities, countries, scholarships & student visa options. Begin your journey now!"
          );
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>
      <Two />
      <Footer />
    </>
  );
};

export default ContactPage;
