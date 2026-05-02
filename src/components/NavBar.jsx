import React from 'react'
import { Link } from 'react-router'; // Ensure you're using react-router-dom
import { FiArrowUpRight } from 'react-icons/fi'; // Minimalist arrow icon

const NavBar = () => {
    const navLinks = [
        { name: 'About', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-[#0f1115]/80 backdrop-blur-md border-b border-white/5">
            {/* Logo with hover grow */}
            <Link to="/" className="text-xl font-bold tracking-tighter uppercase group cursor-pointer">
                Portfolio<span className="text-red-500 group-hover:animate-pulse">.</span>
            </Link>

            <div className="flex gap-8">
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        className="relative text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 hover:text-white transition-all duration-300 group flex items-center gap-1"
                    >
                        {link.name}
                        
                        {/* 1. The Arrow Reveal: Slides in from bottom-left */}
                        <span className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-red-500">
                            <FiArrowUpRight size={12} />
                        </span>

                        {/* 2. The Animated Underline */}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                ))}
            </div>
        </nav>
    );
}

export default NavBar;
