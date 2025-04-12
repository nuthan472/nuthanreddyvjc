import React from 'react';
import { ChevronRight, ArrowRightCircle, CheckCircle } from 'lucide-react';

const GermanyResumeMarketing = () => {
  return (
    <div className=" fontFamily: 'Times New Roman' px-4 md:px-12 py-4 text-[18px] leading-relaxed bg-white text-gray-800">
      <h1 className="text-3xl md:text-3xl font-bold mb-6">
        <span className="text-orange-500">VJC Overseas</span> – Germany Resume Marketing Services
      </h1>

      <p className="flex items-start gap-2 mb-6">
        <ArrowRightCircle className="text-orange-500 mt-1" size={20} />
        Are you looking to secure a job in Germany? <span className="text-orange-500">VJC Overseas</span> is your trusted partner in navigating the competitive German job market.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Choose <span className="text-orange-500">VJC Overseas</span> for Your Germany Job Search?</h2>
        <p className="flex items-start gap-2">
          <ChevronRight className="text-orange-500 mt-1" size={18} />
          Finding a job in Germany requires more than just a great resume—it demands a strategic approach and local know-how.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Germany Salary Structure: Understanding Your Earning Potential</h2>
        <ul className="list-none space-y-2">
          {[
            ["Entry-level positions", "€35,000 – €45,000 annually"],
            ["Mid-level professionals", "€45,000 – €60,000 annually"],
            ["Senior-level professionals", "€60,000 – €85,000 annually"],
            ["Top executives & specialized roles", "€90,000 and above annually"],
          ].map(([title, detail], i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-1" size={18} />
              <strong>{title}:</strong> {detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Living in Germany: A High Quality of Life</h2>
        <ul className="list-none space-y-2">
          {[
            ["Cost of Living", "€800 to €1,500 per month (excluding rent)"],
            ["Healthcare", "Access to world-class healthcare options"],
            ["Housing", "Rent varies from €900 – €1,500 in Berlin"],
          ].map(([title, detail], i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-1" size={18} />
              <strong>{title}:</strong> {detail}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Work Opportunities in Germany</h2>
        <ul className="list-none space-y-2">
          {[
            ["Information Technology (IT)", "Developers, software engineers"],
            ["Engineering", "Mechanical, electrical, civil engineering"],
            ["Healthcare", "Doctors, nurses, healthcare professionals"],
            ["Finance", "Accounting, financial analysis"],
            ["Manufacturing", "Automotive, machinery"],
          ].map(([sector, roles], i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-1" size={18} />
              <strong>{sector}:</strong> {roles}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Benefits of Working in Germany</h2>
        <ul className="list-none space-y-2">
          {[
            "Social Security Benefits",
            "Paid Vacation (minimum 20 days)",
            "Work-Life Balance (35–40 hour workweek)",
            "Career Development Opportunities",
          ].map((benefit, i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle className="text-orange-500 mt-1" size={18} />
              {benefit}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">How Our Germany Resume Marketing Service Works</h2>
        <ol className="list-decimal ml-6 space-y-2">
          {[
            ["Consultation", "Understand your career goals"],
            ["Customized Resume Design", "SEO-optimized resume"],
            ["LinkedIn Profile Optimization", "Improve online presence"],
            ["Job Search Assistance", "Connect with recruiters"],
            ["Interview Coaching", "Prepare for German interviews"],
          ].map(([step, detail], i) => (
            <li key={i}>
              <strong>{step}:</strong> {detail}
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-2">Get Started Today</h2>
        <p className="flex items-start gap-2">
          <ArrowRightCircle className="text-orange-500 mt-1" size={20} />
          Take the first step toward your new career in Germany. Contact <span className="text-orange-500">VJC Overseas</span> today to schedule a consultation!
        </p>
      </section>
    </div>
  );
};

export default GermanyResumeMarketing;
