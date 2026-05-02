import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0f1115] flex flex-col items-center justify-center px-6 text-center">
      {/* 1. Large background text for style */}
      <h1 className="text-[150px] md:text-[250px] font-black text-[#ffffff08] absolute select-none">
        404
      </h1>

      <div className="relative z-10">
        {/* 2. Error Message */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Lost in <span className="text-red-600 font-black italic">space?</span>
        </h2>
        
        <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to the project grid.
        </p>

        {/* 3. Action Button */}
        <Link 
          to="/" 
          className="inline-block bg-red-600 hover:bg-red-700 text-white px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] transition-all active:scale-95 shadow-lg shadow-red-900/20"
        >
          Back to Safety
        </Link>
      </div>

      {/* 4. Small decorative element */}
      <div className="mt-20 flex gap-2">
        <div className="w-1 h-1 bg-red-600 rounded-full animate-ping"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-800 rounded-full"></div>
      </div>
    </div>
  )
}

export default NotFound
