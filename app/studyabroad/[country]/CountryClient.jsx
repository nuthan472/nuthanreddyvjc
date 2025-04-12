"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";

import Two from "./Two";
import Footer from "./Footer";
import { notFound } from "next/navigation";

const metaData = {
  usa: {
    title: "Study in USA - Visa Support | VJC Overseas",
    description: "Dreaming of studying in the USA? Get expert visa guidance and admission support from VJC Overseas.",
  },
  canada: {
    title: "Canada PR Process | VJC Overseas",
    description: "Learn how to get Permanent Residency in Canada. VJC Overseas helps you step-by-step.",
  },
  france: {
    title: "Study in France - Complete Visa Guide | VJC Overseas",
    description: "Looking to study in France? Learn about universities, visa process, and lifestyle.",
  },
  australiastudyvisa: {
    title: "Study in Australia - Visa Guidance | VJC Overseas",
    description: "Apply for an Australia Study Visa with VJC Overseas. Get expert help with documentation, eligibility, and timelines.",
  },
};

export default function CountryClient({ country }) {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    const data = metaData[country?.toLowerCase()];
    if (!data) {
      notFound(); // trigger 404
    } else {
      setMeta(data);
    }
  }, [country]);

  if (!meta) return null;

  return (
    <>
      <div style={{ marginTop: "5%", zIndex: 20, position: "relative" }}>
        <Nav />
      </div>

     
        {/* Additional Sections */}
      
        <Two />
        <Footer />
     
    </>
  );
}
