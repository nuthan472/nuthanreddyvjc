import React, { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const StudyInNewZealand = () => {
  const router = useRouter();

  // Metadata values for this page
  const pageTitle = "Study in New Zealand - VJC Overseas";
  const pageDescription =
    "Study in New Zealand with VJC Overseas. Discover top universities, affordable tuition, scholarships, post-study work opportunities, and expert visa guidance.";
  const pageKeywords =
    "Study in New Zealand, New Zealand universities, student visa New Zealand, VJC Overseas, study abroad consultants";

  useEffect(() => {
    // Dynamically set <title>
    document.title = pageTitle;

    // Dynamically update <meta name="description">
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) {
      descTag.setAttribute("content", pageDescription);
    } else {
      const newDesc = document.createElement("meta");
      newDesc.name = "description";
      newDesc.content = pageDescription;
      document.head.appendChild(newDesc);
    }

    // Dynamically update <meta name="keywords">
    const keywordTag = document.querySelector('meta[name="keywords"]');
    if (keywordTag) {
      keywordTag.setAttribute("content", pageKeywords);
    } else {
      const newKeyword = document.createElement("meta");
      newKeyword.name = "keywords";
      newKeyword.content = pageKeywords;
      document.head.appendChild(newKeyword);
    }

    // Optional: Also set Open Graph title/description (good for social)
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", pageTitle);
    } else {
      const newOgTitle = document.createElement("meta");
      newOgTitle.setAttribute("property", "og:title");
      newOgTitle.content = pageTitle;
      document.head.appendChild(newOgTitle);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", pageDescription);
    } else {
      const newOgDesc = document.createElement("meta");
      newOgDesc.setAttribute("property", "og:description");
      newOgDesc.content = pageDescription;
      document.head.appendChild(newOgDesc);
    }
  }, [router.pathname]);

  return (
    <>
      <Head>
        {/* This will be used only for SSR. Client-side will update dynamically */}
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} key="desc" />
        <meta name="keywords" content={pageKeywords} key="keywords" />
        <meta property="og:title" content={pageTitle} key="ogtitle" />
        <meta property="og:description" content={pageDescription} key="ogdesc" />
      </Head>

      <div style={{ fontFamily: "Times New Roman", padding: "20px", fontSize: "18px" }}>
        <h1>
          Welcome to <span style={{ color: "orange" }}>VJC</span> Overseas – Your Gateway to Studying in New Zealand
        </h1>
        <p>
          Are you dreaming of studying in one of the world’s top educational destinations? <span style={{ color: "orange" }}>VJC</span> Overseas is here to turn your dream into reality by helping you navigate the process of studying in New Zealand, a country known for its high-quality education system, scenic landscapes, and vibrant multicultural society.
        </p>
        <h2>Why Choose New Zealand for Higher Education?</h2>
        <ul>
          <li><b>World-Class Education:</b> Globally recognized system focused on research and innovation.</li>
          <li><b>Quality of Life:</b> Breathtaking landscapes and a balanced lifestyle.</li>
          <li><b>Post-Study Work:</b> Favorable post-study work visa options.</li>
          <li><b>Affordable Tuition:</b> Compared to other countries.</li>
        </ul>
        <h2>Top Universities</h2>
        <ul>
          <li><b>University of Auckland</b> – Top 100 – NZD $25,000–$60,000/yr</li>
          <li><b>University of Otago</b> – Top 200 – NZD $22,000–$45,000/yr</li>
          <li><b>Victoria University of Wellington</b> – Top 250 – NZD $20,000–$45,000/yr</li>
          <li><b>AUT</b> – Top 300 – NZD $22,000–$40,000/yr</li>
          <li><b>Massey University</b> – Top 350 – NZD $20,000–$35,000/yr</li>
        </ul>
        <h2>Popular Programs</h2>
        <ul>
          <li>Business and Management</li>
          <li>Engineering and Technology</li>
          <li>Health and Medical Sciences</li>
          <li>Education and Teaching</li>
          <li>Arts and Humanities</li>
        </ul>
        <h2>Fees & Living</h2>
        <p>
          <b>UG:</b> NZD $22k–$45k/yr <br />
          <b>PG:</b> NZD $25k–$60k/yr <br />
          <b>Living:</b> NZD $15k–$18k/yr
        </p>
        <h2>Scholarships</h2>
        <ul>
          <li>New Zealand Development Scholarships</li>
          <li>University-Specific Scholarships</li>
          <li>Government Grants</li>
        </ul>
        <h2>Why VJC Overseas?</h2>
        <ul>
          <li>Personalized Consultation</li>
          <li>Application & Visa Support</li>
          <li>Pre & Post Departure Assistance</li>
        </ul>
        <h2>Contact</h2>
        <p>
          <b>Phone:</b> +91-9160449000 <br />
          <b>Email:</b> info@vjcoverses.com <br />
          <b>Website:</b> www.vjcoverses.com
        </p>
      </div>
    </>
  );
};

export default StudyInNewZealand;
