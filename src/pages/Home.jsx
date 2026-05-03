import React from 'react'
import { Link } from 'react-router'; // Ensure you're using react-router-dom

const Home = () => {
  return (
    <div className="bg-[#0f1115] min-h-screen text-white font-sans selection:bg-red-500">
      <main className="max-w-5xl mx-auto px-6">

        {/* HERO SECTION - Reduced height and tighter spacing */}
        <section className="pt-32 pb-20 flex flex-col justify-center">
          <div className="max-w-3xl"> {/* Narrower container for better readability */}

            {/* 1. Name & Role - Smaller margin */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-red-500"></span>
              <p className="text-red-500 text-[10px] font-bold uppercase tracking-[0.3em]">
                Sumit — MERN Developer
              </p>
            </div>

            {/* 2. Headline - Scaled down from 8xl to 6xl/4xl */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              I'm <span className="text-white">Sumit.</span>
              <span className="text-gray-500"> I build high-performance digital systems.</span>
            </h1>

            {/* 3. Description - Slightly smaller text */}
            <p className="text-gray-400 text-base md:text-lg max-w-xl leading-relaxed mb-10">
              Specialising in crafting clean, scalable web applications with
              <span className="text-white"> React</span> and <span className="text-white">Node.js</span>.
              Based in Delhi.
            </p>

            {/* 4. Action Buttons - Smaller padding */}
            <div className="flex items-center gap-6 mb-16">
              <Link to="/work" className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-[12px] font-bold uppercase tracking-widest transition-all">
                Work
              </Link>
              <Link to="/contact" className="text-white text-sm font-bold uppercase tracking-widest border-b border-red-500 pb-1 hover:text-red-500 transition-colors">
                Get in touch
              </Link>
            </div>

            {/* 5. Compact Stack Overview - Tighter grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 border-t border-white/5 pt-12">
              <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Languages</p>
                  <p className="text-[16px] font-medium">JavaScript (ES6+), HTML5, CSS3, SQL</p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Frontend</p>
                  <p className="text-[16px] font-medium">React.js, Redux, Bootstrap, Tailwind CSS</p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Backend</p>
                  <p className="text-[16px] font-medium">Node.js, Express.js, REST APIs</p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Database</p>
                  <p className="text-[16px] font-medium">MongoDB, Mongoose</p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Tools</p>
                  <p className="text-[16px] font-medium">Git, GitHub, VS Code, Postman</p>
                </div>

                <div>
                  <p className="text-[11px] text-gray-500 uppercase tracking-widest mb-2">Focus</p>
                  <p className="text-[16px] font-medium">Full Stack Development / Clean Architecture</p>
                </div>
              </div>
             </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
