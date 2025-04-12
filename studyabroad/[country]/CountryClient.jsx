"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";

import Two from "./Two";
import Footer from "./Footer";
import { notFound } from "next/navigation";

const metaData = {
  usa: {
    title: "Study in USA – Top Universities & Visa Support | VJC Overseas",
    description: "Get expert guidance to study in the USA. Explore top universities, scholarships, courses & student visa options with VJC Overseas. Start today!",
    keywords:"study abroad, usa visa, abroad education consultants, visa for united states, golden visa, study abroad consultants, usa visa application, overseas study consultants, foreign study consultancy, abroad for studies, best immigration consultants in hyderabad, best immigration consultants in bangalore, foreign study consultancy, foreign education consultants, study in usa",
  },
  canada: {
    title: "Canada PR Process | VJC Overseas",
    description: "Learn how to get Permanent Residency in Canada. VJC Overseas helps you step-by-step.",
  },
  france: {
    title: "Study in France - Complete Visa Guide | VJC Overseas",
    description: "Looking to study in France? Learn about universities, visa process, and lifestyle.",
  },
  uk: {
    title: "Study in UK – Top Universities & Visa Guidance | VJC Overseas",
    description: "Study in the UK with VJC Overseas. Explore top universities, scholarships, visa process & post-study work options. Get expert guidance and support today.",
    keywords:"study in uk, uk student visa, uk study visa, uk study visa fees, requirements for uk study visa, best universities in uk, top universities in uk, uk student visa fees, study abroad, study abroad consultants, abroad education consultants, overseas education consultants, study abroad consultants near me, foreign education consultants, foreign study consultancy",
  },
  australia: {
    
  }
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
