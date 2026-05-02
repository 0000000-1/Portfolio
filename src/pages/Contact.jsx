import React from 'react'
import { FaGithub, FaLinkedin, FaCopy } from "react-icons/fa";

const Contact = () => {
  const email = "jir99587@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    toast.success('Email copied!', {
      style: {
        borderRadius: '10px',
        background: '#1a1c22',
        color: '#fff',
        border: '1px solid #333'
      },
    });
  };

  return (
    <div className="bg-[#0f1115]">
      {/* Increased padding to py-48 for more "white space" */}
      <section id="contact" className="py-38 border-t border-white/5 text-center px-6">

        {/* Headline with larger margin-bottom */}
        <h2 className="text-5xl md:text-7xl font-bold mb-16 italic tracking-tight leading-tight text-white">
          Let's build something <br />
          <span className="text-gray-500">amazing together.</span>
        </h2>

        {/* Email Container with more space below (mb-20) */}
        <div className="flex flex-col items-center gap-2 mb-24 group">
          <div className="flex items-center justify-center gap-4">
            <a
              href={`mailto:${email}`}
              className="text-red-500 text-[12px] md:text-3xl font-medium hover:text-red-400 transition-colors tracking-tight"
            >
              {email}
            </a>
            <button
              onClick={copyToClipboard}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-gray-500 hover:text-white transition-all active:scale-90"
              title="Copy Email"
            >
              <FaCopy size={20} />
            </button>
          </div>

          {/* Added a subtle sub-text for better spacing flow */}
          <p className="text-gray-500 text-[10px] uppercase tracking-[0.3em]">Available for new projects</p>
        </div>

        {/* Social Icons with wider gap */}
        <div className="flex justify-center items-center gap-10">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 text-gray-500 hover:text-white transition-all transform hover:-translate-y-2 group"
          >
            <div className="flex justify-center items-center">
              <FaGithub size={36} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-red-500 transition-colors">
              Github
            </span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 text-gray-500 hover:text-[#0077b5] transition-all transform hover:-translate-y-2 group"
          >
            <div className="flex justify-center items-center">
              <FaLinkedin size={36} />
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold group-hover:text-red-500 transition-colors">
              Linkedin
            </span>
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact
