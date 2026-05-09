import React from 'react'
import login_image from '../assets/login_app_image.png'

const Projects = () => {
  // 1. Keep data separate from the UI
  const projectData = [
    {
      id: 1,
      label: "Todo App",
      title: "MERN Task Manager",
      description: "Full-stack todo list with user authentication and MongoDB.",
      image: "./src/assets/portfolio.jpg",
      status: 'in-progress', // done or in-progress
      previewUrl: 'https://mern-todo-orpin.vercel.app/',
      githubUrl:'https://github.com/0000000-1/mern-todo'
    },
    {
      id: 2,
      label: "Login App",
      title: "Secure Auth System",
      description: "A clean login/signup flow using JWT and React context.",
      image: login_image,
      status: 'done',
      previewUrl: 'https://mern-login-theta.vercel.app/',
      githubUrl:'https://github.com/0000000-1/mern-login'
    }
  ];

  return (
    <div className='bg-[#0f1115] min-h-screen text-white font-sans selection:bg-red-500'>

      <div className="max-w-5xl mx-auto px-6">
        <section id="work" className="py-32">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-red-500 mb-16">
            Selected Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* 2. Map through the data to create cards */}
            {projectData.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                {/* Image/Placeholder Area */}

                <div className="bg-[#1a1c22] aspect-video mb-6 overflow-hidden flex items-center justify-center border border-white/5 group-hover:border-red-500/50 transition-all duration-500">
                  <span className="text-gray-700 font-black text-4xl group-hover:text-red-500/20 transition-all uppercase selection:bg-transparent">
                    {project.status === 'in-progress' ? (
                      <span className="text-[10px] text-gray-500 uppercase tracking-widest animate-pulse">
                        In Progress...
                      </span>
                    ) : (
                      <div className="relative w-full h-64  bg-[#16181d]"> {/* Parent must have height or aspect-video */}
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        />
                      </div>
                    )}
                  </span>
                </div>
                {/* Text Area */}
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-red-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className='flex w-full justify-between my-6'>

                {project.status !== 'in-progress' && (
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[11px] font-bold uppercase tracking-widest text-white border-b border-red-500 pb-1 hover:text-red-500 transition-colors"
                  >
                    Live Preview
                  </a>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="text-[11px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors"
                >
                  View Code
                </a>
            </div>
              </div>
            ))}
          </div>
        </section>
        </div>
    </div>
  )
}

export default Projects
