import React from "react";
import { FaArrowRight, FaChevronRight, FaCheckCircle } from "react-icons/fa";

const UKStudyGuide = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-justify">
      <h1 className="text-2xl md:text-2xl font-bold text-blue-600 mb-4 border-b-2 pb-2 border-blue-200" style={{ fontFamily: 'Times New Roman' }}>
        🎓 Study in the UK: A Comprehensive Guide to UK Study Visas, Universities, Fees, and Admission Process
      </h1>

      <p className="mb-4" style={{ fontFamily: 'Times New Roman' }}>
        The UK has long been a favourite destination for international students seeking world-class education, cultural diversity, and outstanding career opportunities. With its rich history, vibrant cities, and renowned institutions, it’s no wonder that the UK remains one of the top choices for students worldwide. This guide provides an overview of the UK study visa process, top universities, fee structures, and the admission process.
      </p>

      {/* Visa Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-6 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman' }}>
        <FaArrowRight className="text-blue-400" /> UK Study Visa: An Overview
      </h2>
      <ol className="list-decimal pl-6 space-y-2 text-gray-800" style={{ fontFamily: 'Times New Roman' }}>
        <li>Choose Your Course and University (get a <strong>CAS</strong>)</li>
        <li>Check Visa Requirements:
          <ul className="list-disc pl-6">
            <li><FaChevronRight className="inline text-blue-400 mr-1" />Unconditional offer</li>
            <li><FaChevronRight className="inline text-blue-400 mr-1" />Financial proof</li>
            <li><FaChevronRight className="inline text-blue-400 mr-1" />IELTS/TOEFL</li>
          </ul>
        </li>
        <li>Complete Visa Application:
          <ul className="list-disc pl-6">
            <li><FaChevronRight className="inline text-blue-400 mr-1" />Valid passport</li>
            <li><FaChevronRight className="inline text-blue-400 mr-1" />Proof of CAS & funds</li>
            <li><FaChevronRight className="inline text-blue-400 mr-1" />English test results</li>
            <li><FaChevronRight className="inline text-blue-400 mr-1" />Visa fee (~£348)</li>
          </ul>
        </li>
        <li>Attend Biometrics Appointment</li>
        <li>Wait for Visa Decision (up to 3 weeks)</li>
        <li>Arrival: Visa valid for course + extra time</li>
      </ol>

      {/* Universities Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-6 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman' }}>
        <FaArrowRight className="text-blue-400" /> Top UK Universities and Their Fee Structure
      </h2>
      <ul className="list-disc pl-6 space-y-3" style={{ fontFamily: 'Times New Roman' }}>
        {[
          { name: "University of Oxford", ug: "£26,770 – £38,010", pg: "£24,000 – £45,000" },
          { name: "University of Cambridge", ug: "£22,227 – £58,038", pg: "£22,000 – £45,000" },
          { name: "London School of Economics (LSE)", ug: "£22,000 – £31,000", pg: "£24,000 – £45,000" },
          { name: "University College London (UCL)", ug: "£20,000 – £35,000", pg: "£20,000 – £50,000" },
          { name: "University of Edinburgh", ug: "£19,000 – £34,000", pg: "£21,000 – £40,000" },
          { name: "University of Manchester", ug: "£20,000 – £33,000", pg: "£22,000 – £40,000" },
        ].map((uni, i) => (
          <li key={i}>
            <strong>{uni.name}</strong><br />
            Undergraduate: {uni.ug}/year<br />
            Postgraduate: {uni.pg}/year
          </li>
        ))}
      </ul>

      {/* Admission Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-6 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman' }}>
        <FaArrowRight className="text-blue-400" /> Admission Process for UK Universities
      </h2>
      <ol className="list-decimal pl-6 space-y-2" style={{ fontFamily: 'Times New Roman' }}>
        <li>Research and Choose a Course</li>
        <li>Meet Entry Requirements:
          <ul className="list-disc pl-6">
            <li>Academic qualifications</li>
            <li>English proficiency</li>
            <li>Portfolio (arts)</li>
            <li>Recommendation letters (PG)</li>
          </ul>
        </li>
        <li>Application Submission:
          <ul className="list-disc pl-6">
            <li>UG: via UCAS (max 5)</li>
            <li>PG: direct to university</li>
          </ul>
        </li>
        <li>Interview (if needed)</li>
        <li>Offer Letter Acceptance</li>
        <li>Apply for Visa with CAS</li>
      </ol>

      {/* Cost of Living Section */}
      <h2 className="text-2xl font-bold text-blue-500 mt-6 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman' }}>
        <FaArrowRight className="text-blue-400" /> Cost of Living in the UK
      </h2>
      <ul className="list-disc pl-6 space-y-2" style={{ fontFamily: 'Times New Roman' }}>
        <li><FaCheckCircle className="inline text-green-500 mr-1" />London: £1,200 – £1,800/month</li>
        <li><FaCheckCircle className="inline text-green-500 mr-1" />Outside London: £900 – £1,300/month</li>
        <li><FaCheckCircle className="inline text-green-500 mr-1" />Includes housing, food, transport, leisure</li>
        <li><FaCheckCircle className="inline text-green-500 mr-1" />Work part-time: up to 20 hrs/week</li>
      </ul>

      {/* Conclusion */}
      <h2 className="text-2xl font-bold text-blue-500 mt-6 mb-3 flex items-center gap-2" style={{ fontFamily: 'Times New Roman' }}>
        <FaArrowRight className="text-blue-400" /> Conclusion
      </h2>
      <p className="mb-4" style={{ fontFamily: 'Times New Roman' }}>
        Studying in the UK offers not just an academic challenge but also an opportunity to immerse yourself in a rich cultural experience. With a well-structured visa process, world-renowned universities, and a diverse student community, the UK is an excellent choice for international students.
      </p>

      <div className="mb-6 mt-4 bg-orange-100 border-l-4 border-orange-500 p-4 rounded-md">
        <p className="text-orange-700 font-semibold" style={{ fontFamily: 'Times New Roman' }}>
          📣 <span className="font-bold">VJC Overseas</span> is here to guide you every step of the way — from selecting the right UK university to securing your visa. Contact us today to begin your journey!
        </p>
      </div>
    </div>
  );
};

export default UKStudyGuide;
