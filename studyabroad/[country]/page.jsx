import CountryClient from "./CountryClient";

// Metadata map
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
};

export function generateMetadata({ params }) {
  const country = params.country.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "Study Abroad – Explore Global Education Paths | VJC Overseas",
    description: data?.description || "Explore global study abroad opportunities with VJC Overseas.",
  };
}

export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}
