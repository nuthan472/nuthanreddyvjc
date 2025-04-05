'use client';
import React from 'react';
import {
  GraduationCap,
  ArrowRightCircle,
  Info,
  ClipboardCheck,
  FileText,
  Wallet,
  Timer,
  RefreshCw,
  Briefcase,
  MapPin,
  PhoneCall,
} from 'lucide-react';

const HongKongStudentVisa = () => {
  return (
    <div className="p-2 md:p-4 max-w-3xl mx-auto text-justify text-black font-['Times New Roman']">
      {/* Header */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center text-black-600 flex items-center justify-center gap-3">
        <GraduationCap size={32} /> Hong Kong Student Visa
      </h1>

      {/* About Section */}
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-md shadow-sm">
        <p className="text-lg text-gray-700">
          <Info className="inline-block mr-2 text-orange-500" />
          <strong>About:</strong> Studying in Hong Kong means gaining access to
          <span className="font-semibold text-orange-600"> world-class education</span>, global exposure, and cutting-edge innovation in one of Asia's most vibrant cities.
        </p>
      </div>

      {/* Why Choose */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <ArrowRightCircle className="text-orange-600" /> Why Choose Hong Kong for Your Education?
      </h2>
      <p className="mb-4">
        Hong Kong hosts several top-ranked universities and offers a unique blend of
        <span className="font-semibold text-orange-600"> Eastern and Western cultures</span>. The city is a
        <span className="font-semibold text-orange-600"> global hub for finance and innovation</span>,
        giving students unparalleled opportunities in academics and career development.
      </p>
      <hr className="my-6" />

      {/* Eligibility */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <ClipboardCheck className="text-orange-600" /> Eligibility Requirements
      </h2>
      <ul className="list-disc ml-6 mb-4 space-y-2">
        <li><strong>Offer of Admission:</strong> Acceptance letter from a recognized institution</li>
        <li><strong>Sufficient Funds:</strong> Proof of financial support covering tuition & living expenses</li>
        <li><strong>Valid Passport:</strong> Minimum 6 months validity</li>
        <li><strong>Good Character:</strong> No criminal record, may require medical checkup</li>
      </ul>
      <hr className="my-6" />

      {/* Application Process */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <FileText className="text-orange-600" /> Visa Application Process
      </h2>
      <ol className="list-decimal ml-6 mb-4 space-y-2">
        <li>Secure admission from a recognized Hong Kong institution</li>
        <li>Complete Visa Application Form (ID 995A)</li>
        <li>Prepare Required Documents:
          <ul className="list-disc ml-6 mt-2">
            <li>Valid passport</li>
            <li>Letter of acceptance</li>
            <li>Financial documents</li>
            <li>Photographs</li>
            <li>Medical reports (if needed)</li>
          </ul>
        </li>
        <li>Submit application to the Immigration Department</li>
        <li>Wait for visa processing</li>
        <li>Receive your Student Visa</li>
      </ol>
      <hr className="my-6" />

      {/* Fees */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Wallet className="text-orange-600" /> Visa Fees
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Application Fee:</strong> HKD 230 (~USD 30)</li>
        <li><strong>Re-entry Permit (if required):</strong> HKD 230</li>
      </ul>
      <hr className="my-6" />

      {/* Processing Time */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <Timer className="text-orange-600" /> Processing Time
      </h2>
      <p className="mb-4">Standard processing time is <span className="font-semibold text-orange-600">4 to 8 weeks</span>. Apply early to avoid delays.</p>
      <hr className="my-6" />

      {/* Extension & Work Rights */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <RefreshCw className="text-orange-600" /> Extension & Work Rights
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li><strong>Extension:</strong> Renewable yearly or based on course duration</li>
        <li><strong>Work Rights:</strong> Part-time up to 20 hours/week & full-time during holidays (with approval)</li>
      </ul>
      <hr className="my-6" />

      {/* Living in HK */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 flex items-center gap-2">
        <MapPin className="text-orange-600" /> Living in Hong Kong
      </h2>
      <p className="mb-4">Enjoy a cosmopolitan lifestyle with modern infrastructure, efficient public transport, scenic spots like Victoria Peak, and a food paradise blending Chinese, Japanese, and Western cuisines.</p>
      <hr className="my-6" />

      {/* Final CTA */}
      <h2 className="text-2xl font-semibold mt-8 mb-4 text-center text-orange-600 flex items-center justify-center gap-2">
        <Briefcase /> Start Your Journey Today!
      </h2>
      <p className="mb-4 text-center">With top-tier academics and vibrant culture, Hong Kong is your launchpad to success. Begin your student visa application with <span className="text-orange-600 font-semibold">VJC Overseas</span>.</p>

      <div className="bg-orange-100 rounded-md p-4 mt-4 shadow-sm text-center">
        <p className="text-lg font-semibold text-orange-700">VJC Overseas: Helping You Study Abroad with Confidence!</p>
        <p className="my-2">Need guidance? Contact our expert team for full support on admissions and visa processes.</p>
        <p className="text-orange-600 font-semibold flex justify-center items-center gap-2 mt-2">
          <PhoneCall className="w-5 h-5" /> +91-91604490000 | www.vjcoverseas.com
        </p>
      </div>
    </div>
  );
};

export default HongKongStudentVisa;
