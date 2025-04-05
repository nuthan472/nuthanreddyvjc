import React from "react";
import {
  ArrowRight,
  ArrowBigRightDash,
  CheckCircle2,
  Star,
  School,
  Euro,
  Briefcase,
  Building2,
} from "lucide-react";

const StudyNetherlands = () => {
  return (
    <div className="text-[Times New Roman]  p- md:p-4  text-lg bg-white text-gray-800 space-y-6">
      <h1 className="text-2xl font-bold text-center">
        Study in the Netherlands with{" "}
        <span className="text-orange-500">VJC Overseas</span>: Your Gateway to a Bright Future
      </h1>

      <p>
        Are you considering pursuing higher education in the Netherlands? Known for its high academic standards,
        diverse cultural environment, and excellent quality of life, the Netherlands is one of the top destinations
        for international students. At <span className="text-orange-500">VJC Overseas</span>, we are committed to
        guiding you through every step of the process.
      </p>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Star className="text-orange-500" /> Why Choose the Netherlands?
        </h2>
        <ul className="list-none pl-4 space-y-2 mt-2">
          <li className="flex gap-2 items-start">
            <ArrowRight className="text-orange-400 mt-1" />
            <span><strong>High-Quality Education:</strong> Globally recognized universities with top academic standards.</span>
          </li>
          <li className="flex gap-2 items-start">
            <ArrowRight className="text-orange-400 mt-1" />
            <span><strong>Cultural Diversity:</strong> A multicultural environment welcoming students worldwide.</span>
          </li>
          <li className="flex gap-2 items-start">
            <ArrowRight className="text-orange-400 mt-1" />
            <span><strong>Innovative & Practical:</strong> Focus on real-world learning, teamwork, and critical thinking.</span>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <School className="text-orange-500" /> Top Universities in the Netherlands
        </h2>
        <ol className="list-decimal list-inside pl-4 mt-2 space-y-1">
          <li><strong>TU Delft</strong> – Engineering & technical excellence.</li>
          <li><strong>University of Amsterdam</strong> – Social sciences & humanities leader.</li>
          <li><strong>Leiden University</strong> – Law, humanities, and science-focused.</li>
          <li><strong>TU Eindhoven</strong> – Tech and innovation driven.</li>
          <li><strong>Wageningen University</strong> – Agriculture & environmental sciences.</li>
          <li><strong>Rotterdam School of Management</strong> – Premier business education.</li>
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Euro className="text-orange-500" /> Tuition Fees
        </h2>
        <ul className="list-none pl-4 space-y-2 mt-2">
          <li><ArrowBigRightDash className="inline-block text-orange-400 mr-2" />Bachelor’s: €6,000 - €15,000/year</li>
          <li><ArrowBigRightDash className="inline-block text-orange-400 mr-2" />Master’s: €8,000 - €20,000/year</li>
          <li><ArrowBigRightDash className="inline-block text-orange-400 mr-2" />PhD: Varies by program</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Building2 className="text-orange-500" /> Living Costs
        </h2>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>Rent: €300 - €1,000/month</li>
          <li>Food: €150 - €250/month</li>
          <li>Utilities: €100 - €150/month</li>
          <li>Transportation: €35 - €100/month</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Briefcase className="text-orange-500" /> Work Opportunities
        </h2>
        <p>International students can work:</p>
        <ul className="list-disc list-inside pl-4 mt-2 space-y-1">
          <li>Up to 16 hours/week during term</li>
          <li>Full-time during summer (June–August)</li>
        </ul>
        <p className="mt-2">
          <strong>Post-study visa:</strong> Orientation year (zoekjaar) allows 1-year stay to find a job.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <CheckCircle2 className="text-orange-500" /> Benefits of Studying in the Netherlands
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 mt-2">
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> Quality Education</li>
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> Affordable Tuition</li>
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> International Community</li>
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> Excellent Job Market</li>
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> Strategic European Location</li>
          <li className="flex items-center gap-2"><ArrowRight className="text-orange-400" /> High Quality of Life</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Conclusion</h2>
        <p>
          Studying in the Netherlands offers a unique opportunity to experience world-class education in a vibrant,
          multicultural setting. At <span className="text-orange-500">VJC Overseas</span>, we're here to help you every step of the way.
          Reach out today and let’s start planning your future!
        </p>
      </section>
    </div>
  );
};

export default StudyNetherlands;
