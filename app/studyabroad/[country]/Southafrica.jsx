import React from 'react';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const StudyInSouthAfrica = () => {
  return (
    <div className="text-[Times New Roman] p-6 md:p-10 text-lg leading-relaxed fontsize: 18px">
      <h1 className="text-3xl md:text-2xl font-bold mb-6">
        Welcome to <span className="text-orange-500">VJC Overseas</span> – Your Gateway to Studying in South Africa
      </h1>

      <p className="mb-4">
        Are you looking to study in South Africa? <span className="text-orange-500">VJC Overseas</span> provides expert guidance to help you explore
        higher education opportunities in South Africa's top universities and colleges. Known for its diverse culture,
        world-class institutions, and affordable education, South Africa is rapidly becoming one of the most sought-after
        destinations for international students.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Why Study in South Africa?</h2>
      <ul className="list-none pl-4 mt-2 space-y-2">
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>World-Class Education:</strong> Globally recognized qualifications from top-ranking universities.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Affordable Fees:</strong> High-quality education at a reasonable cost.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Cultural Diversity:</strong> A blend of languages, traditions, and multicultural experiences.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Innovative Research:</strong> Universities are leaders in cutting-edge research and development.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Post-Study Work:</strong> Opportunities for gaining work experience after graduation.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Top Universities in South Africa</h2>
      <ul className="list-none pl-4 mt-2 space-y-2">
        <li><FaCheckCircle className="inline text-green-600 mr-2" /><strong>University of Cape Town (UCT):</strong> Ranked among the top 200 globally.</li>
        <li><FaCheckCircle className="inline text-green-600 mr-2" /><strong>Wits University:</strong> Renowned for its research-based programs.</li>
        <li><FaCheckCircle className="inline text-green-600 mr-2" /><strong>Stellenbosch University:</strong> High academic standards and innovation.</li>
        <li><FaCheckCircle className="inline text-green-600 mr-2" /><strong>University of Pretoria (UP):</strong> Offers wide course selections.</li>
        <li><FaCheckCircle className="inline text-green-600 mr-2" /><strong>University of Johannesburg (UJ):</strong> Diverse, modern, and inclusive campus environment.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">Fee Structure for South African Universities</h2>

      <h3 className="text-xl font-semibold mt-4">🎓 Undergraduate Fees</h3>
      <ul className="list-disc pl-6">
        <li>Tuition Fees: R40,000 – R100,000/year</li>
        <li>Living Expenses: R60,000 – R100,000/year</li>
        <li>Accommodation: R50,000 – R70,000/year</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">🎓 Postgraduate Fees</h3>
      <ul className="list-disc pl-6">
        <li>Tuition Fees: R50,000 – R120,000/year</li>
        <li>Living Expenses: R70,000 – R100,000/year</li>
        <li>Accommodation: R55,000 – R80,000/year</li>
      </ul>

      <h3 className="text-xl font-semibold mt-4">💼 Additional Costs</h3>
      <ul className="list-disc pl-6">
        <li>Books and Materials: R5,000 – R10,000/year</li>
        <li>Health Insurance: R10,000 – R15,000/year</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">🎯 Scholarships and Financial Aid</h2>
      <p className="mb-4">Many universities offer scholarships based on merit, need, or specific program enrollment. <span className="text-orange-500">VJC Overseas</span> can help you find and apply for them.</p>

      <h2 className="text-2xl font-semibold mt-6">Why Choose <span className="text-orange-500">VJC Overseas</span>?</h2>
      <ul className="list-none pl-4 mt-2 space-y-2">
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Expert Guidance:</strong> Personalized counseling and course selection.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Application Support:</strong> Complete help with documentation and university application process.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Visa Process:</strong> End-to-end visa support and documentation help.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Accommodation Help:</strong> Assistance in finding safe and convenient places to stay.</li>
        <li><FaArrowRight className="inline text-orange-500 mr-2" /><strong>Arrival Support:</strong> Orientation, airport pickup, and settling-in assistance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6">🚀 Start Your Journey Today!</h2>
      <p>
        Let <span className="text-orange-500">VJC Overseas</span> be your trusted partner as you begin your South African education adventure.
        Reach out to us today for a <strong>free consultation</strong> and unlock your global future!
      </p>
    </div>
  );
};

export default StudyInSouthAfrica;
