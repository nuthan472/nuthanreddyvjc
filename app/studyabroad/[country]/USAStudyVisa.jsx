import React from "react";
import { FaCheckCircle, FaArrowRight, FaUniversity, FaMoneyBillWave, FaPlaneDeparture, FaGlobeAmericas } from "react-icons/fa";

const USAStudyVisa = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-4" style={{ fontFamily: 'Times New Roman, serif' }}>
      <h1 className="text-3xl font-bold mb-4">
        USA Study Visa Information – <span className="text-orange-500">VJC Overseas</span>
      </h1>

      <p className="mb-4">
        Are you planning to study in the United States? <span className="text-orange-500">VJC Overseas</span> is here to guide you 
        <FaArrowRight className="inline text-orange-500 ml-1" /> from understanding the financial aspects to navigating the visa process.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        <FaUniversity className="inline mr-2 text-blue-500" /> Why Study in the USA?
      </h2>
      <p className="mb-4">
        The United States is home to top-ranked universities offering world-class education 
        <FaCheckCircle className="inline text-green-600 ml-1" /> and global opportunities.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        <FaArrowRight className="inline mr-2 text-red-500" /> USA Study Visa Types
      </h2>
      <p className="mb-4">
        The most common type is the <strong>F-1 Visa</strong> for academic programs, and <strong>M-1 Visa</strong> for vocational studies.
      </p>

      <h2 className="text-xl font-semibold mb-2">
        <FaMoneyBillWave className="inline mr-2 text-green-500" /> Key Costs for Studying in the USA
      </h2>

      <h3 className="font-semibold mb-1">1. College/University Fees</h3>
      <ul className="list-disc list-inside mb-4">
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Undergraduate: $20,000 - $50,000/year</li>
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Graduate: $25,000 - $70,000/year</li>
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Community College: $8,000 - $15,000/year</li>
      </ul>

      <h3 className="font-semibold mb-1">2. Living Expenses</h3>
      <ul className="list-disc list-inside mb-4">
        <li><FaArrowRight className="inline text-blue-600 mr-1" /> Off-campus: $8,000 - $20,000/year</li>
        <li><FaArrowRight className="inline text-blue-600 mr-1" /> On-campus: $6,000 - $15,000/year</li>
        <li><FaArrowRight className="inline text-blue-600 mr-1" /> Food & Utilities: $3,000 - $5,000/year</li>
        <li><FaArrowRight className="inline text-blue-600 mr-1" /> Transport: $1,000 - $2,000/year</li>
      </ul>

      <h3 className="font-semibold mb-1">3. Other Expenses</h3>
      <ul className="list-disc list-inside mb-4">
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Books: $1,000 - $1,500/year</li>
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Health Insurance: $500 - $2,000/year</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        <FaGlobeAmericas className="inline mr-2 text-purple-500" /> Lifestyle in the USA
      </h2>
      <p className="mb-4">Experience rich campus life, multicultural events, and career opportunities.</p>

      <h2 className="text-xl font-semibold mb-2">
        <FaPlaneDeparture className="inline mr-2 text-yellow-500" /> Processing Time for USA Study Visa
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li><FaArrowRight className="inline text-red-500 mr-1" /> Acceptance from SEVP school</li>
        <li><FaArrowRight className="inline text-red-500 mr-1" /> Get your I-20 form</li>
        <li><FaArrowRight className="inline text-red-500 mr-1" /> Visa Interview & Documents</li>
        <li><FaArrowRight className="inline text-red-500 mr-1" /> Receive your visa</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">💵 Visa Fees</h2>
      <ul className="list-disc list-inside mb-4">
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> DS-160 Fee: ~$160</li>
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> SEVIS Fee: ~$350</li>
        <li><FaCheckCircle className="inline text-green-600 mr-1" /> Issuance Fee: $0–$200 (varies)</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">
        🎯 How <span className="text-orange-500">VJC Overseas</span> Can Help
      </h2>
      <ul className="list-disc list-inside mb-4">
        <li><FaArrowRight className="inline text-blue-500 mr-1" /> College selection support</li>
        <li><FaArrowRight className="inline text-blue-500 mr-1" /> Visa application assistance</li>
        <li><FaArrowRight className="inline text-blue-500 mr-1" /> Financial planning & scholarships</li>
        <li><FaArrowRight className="inline text-blue-500 mr-1" /> Post-visa guidance & support</li>
      </ul>

      <p className="mb-4">
        ✨ <span className="text-orange-500">VJC Overseas</span> ensures your path to studying in the USA is smooth, successful, and inspiring.
      </p>

      <p className="text-sm italic">
        🔔 Note: Fees and details mentioned are subject to change. Always verify with official sources.
      </p>
    </div>
  );
};

export default USAStudyVisa;
