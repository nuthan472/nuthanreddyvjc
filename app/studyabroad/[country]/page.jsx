import CountryClient from "./CountryClient";

// Metadata map
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

export function generateMetadata({ params }) {
  const country = params.country.toLowerCase();
  const data = metaData[country];

  return {
    title: data?.title || "VJC Overseas – Global Education Experts",
    description: data?.description || "Explore global study abroad opportunities with VJC Overseas.",
  };
}

export default function CountryPage({ params }) {
  return <CountryClient country={params.country} />;
}
