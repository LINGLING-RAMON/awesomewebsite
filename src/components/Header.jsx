import React, { useState } from 'react';

const navItems = ['my-home', 'project-site', 'experience-level', 'contact-me'];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-20 bg-transparent">
            <div className="max-w-7xl mx-auto h-28 px-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                    <button
                        onClick={() => setMenuOpen(v => !v)}
                        className="relative w-8 h-8 bg-[#0D1C28] flex flex-col justify-center items-center group md:hidden rounded-full p-7">
                        <span
                            className={
                                `absolute h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ` +
                                (menuOpen ? 'rotate-45' : '-translate-y-1.5')
                            }
                        />
                        <span
                            className={
                                `absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ` +
                                (menuOpen ? 'opacity-0' : 'opacity-100')
                            }
                        />
                        <span
                            className={
                                `absolute h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ` +
                                (menuOpen ? '-rotate-45' : 'translate-y-1.5')
                            }
                        />
                    </button>

                    <div className="text-white text-4xl font-courier font-semibold select-none cursor-pointer">
                        .
                        <span className="animate-flicker" style={{ animationDelay: '0s' }}>R</span>
                        <span className="animate-flicker" style={{ animationDelay: '0.2s' }}>a</span>
                        <span className="animate-flicker" style={{ animationDelay: '0.4s' }}>m</span>
                        <span className="animate-flicker" style={{ animationDelay: '0.6s' }}>o</span>
                        <span className="animate-flicker" style={{ animationDelay: '0.8s' }}>n</span>
                        ;
                    </div>
                </div>

                <nav className="hidden md:absolute md:left-1/2 font-mono md:transform md:-translate-x-1/2 md:flex group w-auto">
                    {navItems.map(item => (
                        <a
                            key={item}
                            href={`#${item}`}
                            className="text-white tracking-wide font-semibold hover:text-gray-200 px-2 py-5 hover:!opacity-100 transition-opacity select-none group-hover:opacity-20"
                        >
                            <span className="opacity-70">// </span>
                            {item}
                        </a>
                    ))}
                </nav>
            </div>

            <div
                className={`fixed inset-0 flex md:hidden ${!menuOpen ? 'pointer-events-none' : ''
                    }`}
            >
                <div
                    className={
                        `relative w-3/4 bg-gray-100 flex flex-col p-8 transform ` +
                        `transition-transform duration-500 ease-out ` +
                        (menuOpen ? 'translate-x-0' : '-translate-x-full')
                    }
                >
                    <button onClick={() => setMenuOpen(false)} className="absolute top-9 left-3 p-2 bg-gray-100 rounded-full focus:outline-none">
                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    <nav className="flex-grow flex flex-col justify-center space-y-10">
                        {navItems.map(item => (
                            <a
                                key={item}
                                href={`#${item}`}
                                onClick={() => setMenuOpen(false)}
                                className="text-2xl font-medium text-black hover:text-gray-700 transition-colors"
                            >
                                <span className="opacity-50">// </span>
                                {item}
                            </a>
                        ))}
                    </nav>

                    <footer className="text-sm text-gray-600">
                        © 2025. Made with love.
                    </footer>
                </div>

                <div
                    onClick={() => setMenuOpen(false)}
                    className={
                        `w-1/4 bg-black transition-opacity duration-500 ease-out ` +
                        (menuOpen
                            ? 'bg-opacity-60 pointer-events-auto'
                            : 'bg-opacity-0 pointer-events-none')
                    }
                />
            </div>
        </header>
    );
}