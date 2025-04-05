import React from "react";
import { ArrowRight } from "lucide-react";

const StudyInSwitzerland = () => {
  return (
    <div className="p-6 md:p-4 font-[Times_New_Roman] text-lg leading-relaxed  text-justify space-y-4">
      <h1 className="text-3xl font-bold text-center text-gray-800">
        Study in Switzerland: A World-Class Education Awaits You!
      </h1>

      <p>
        Switzerland is known for its excellence in education, offering world-class universities and colleges that provide exceptional learning experiences. Whether you're seeking a high-quality undergraduate degree, a specialized postgraduate program, or a diploma in a technical field, Switzerland offers unparalleled academic opportunities. On this page, we will guide you through the costs of studying in Switzerland and highlight the unique benefits of pursuing your higher education in this beautiful, multicultural country.
      </p>

      <h2 className="text-2xl font-semibold">Why Study in Switzerland?</h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span>
            <strong>Top-Ranking Universities and Colleges:</strong> ETH Zurich and EPFL are renowned globally for their research, innovation, and academic excellence.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span>
            <strong>Multicultural Environment:</strong> With four official languages and a diverse international community, Switzerland fosters global connections.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span>
            <strong>Strategic European Location:</strong> Ideal base for students to explore neighboring countries across Europe.
          </span>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Tuition Fees at Swiss Universities</h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Undergraduate:</strong> CHF 500 – 2,000/year (public); CHF 5,000 – 25,000/year (private)</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Postgraduate:</strong> CHF 1,000 – 3,000/year (public); CHF 10,000 – 35,000/year (private)</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Living Costs:</strong> CHF 1,500 – 2,500/month including rent, food, and transport</span>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Benefits of Studying in Switzerland</h2>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Top-tier Education:</strong> Renowned for R&D in engineering, finance, and medicine</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Safe and Clean Environment:</strong> Switzerland ranks among the safest countries globally</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Career Potential:</strong> Home to global corporations in banking, pharma, and engineering</span>
        </li>
        <li className="flex items-start gap-2">
          <ArrowRight className="text-orange-500 mt-1" size={20} />
          <span><strong>Stunning Nature:</strong> Enjoy lakes, mountains, and outdoor adventures year-round</span>
        </li>
      </ul>

      <h2 className="text-2xl font-semibold">Scholarships and Financial Aid</h2>
      <p>
        Switzerland offers a wide range of scholarship opportunities for international students including:
      </p>
      <ul className="space-y-2 pl-4 list-disc">
        <li>Swiss Government Excellence Scholarships</li>
        <li>University-specific merit-based scholarships</li>
        <li>Private foundations and international aid</li>
      </ul>

      <h2 className="text-2xl font-semibold">Conclusion: Take the First Step</h2>
      <p>
        Studying in Switzerland offers you a unique blend of academic excellence, cultural diversity, and life-changing experiences. Whether you're aiming for Zurich, Geneva, or Lausanne — you’re in for an inspiring journey.
      </p>
      <p>
        Ready to begin? Contact <span className="text-orange-500 font-semibold">VJC Overseas</span> today and let us help you explore top universities in Switzerland, craft a winning application, and secure your dream admission!
      </p>

      <div className="text-center mt-6">
        <p className="font-semibold">📞 +91-9160449000</p>
        <p className="font-semibold">📧 info@vjcoverseas.com</p>
        <p className="font-semibold">📍 HYDERABAD | BENGALURU | USA</p>
      </div>
    </div>
  );
};

export default StudyInSwitzerland;
