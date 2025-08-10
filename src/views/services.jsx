import React, { useState, useEffect } from 'react';

const items = [
    { label: "E-commerce websites with smooth checkout & custom product pages", href: "/work#ecommerce", icon: "🛒", tech: "React • Next.js • Stripe" },
    { label: "High-converting landing pages for SaaS & digital products", href: "/work#saas", icon: "🚀", tech: "Vue • Tailwind • Analytics" },
    { label: "Portfolio & personal brand sites that stand out", href: "/work#portfolio", icon: "🎨", tech: "React • GSAP • WebGL" },
    { label: "Responsive, SEO-friendly builds optimized for speed and performance", href: "/work#performance", icon: "⚡", tech: "Vite • TypeScript • Lighthouse" },
];

const Service = () => {
    const [activeIndex, setActiveIndex] = useState(-1);
    // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    // useEffect(() => {
    //     const handleMouseMove = (e) => {
    //         setMousePos({ x: e.clientX, y: e.clientY });
    //     };
    //     window.addEventListener('mousemove', handleMouseMove);
    //     return () => window.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    return (
        // <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
        //     {/* Animated background elements */}
        //     <div className="absolute inset-0 opacity-30">
        //         {[...Array(50)].map((_, i) => (
        //             <div
        //                 key={i}
        //                 className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
        //                 style={{
        //                     left: `${Math.random() * 100}%`,
        //                     top: `${Math.random() * 100}%`,
        //                     animationDelay: `${Math.random() * 2}s`,
        //                     animationDuration: `${2 + Math.random() * 2}s`
        //                 }}
        //             />
        //         ))}
        //     </div>

        // {/* Cursor follower */}
        // <div
        //     className="fixed pointer-events-none z-50 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl transition-all duration-500"
        //     style={{
        //         left: mousePos.x - 128,
        //         top: mousePos.y - 128,
        //     }}
        // />

        <section className="relative z-10 max-w-4xl mx-auto px-6 py-20">
            {/* Header */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 mb-4 text-blue-400 font-mono text-lg group">
                    <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">&lt;</span>
                    <h2 className="text-white text-3xl md:text-4xl font-bold relative">
                        What I Do
                        <span className="inline-block w-1 h-8 ml-2 bg-gradient-to-b from-purple-400 to-transparent animate-pulse shadow-lg shadow-purple-400/50" />
                    </h2>
                    <span className="text-2xl group-hover:-rotate-12 transition-transform duration-300">/&gt;</span>
                </div>

                <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mx-auto font-mono">
                    I design and build fast, responsive websites for clients who want clean code,
                    smooth interactions, and results that matter. Whether you need a polished
                    business site, a unique personal brand, or interactive features that stand out.
                    I bring ideas to life with modern tools and attention to detail.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid gap-6 md:gap-8">
                {items.map((item, index) => (
                    <div
                        key={item.label}
                        className={`group relative overflow-hidden rounded-2xl bg-gradient-to-r from-slate-800/50 to-slate-700/30 backdrop-blur-sm border border-slate-600/30 transition-all duration-500 hover:border-blue-400/50 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/20 ${activeIndex === index ? 'ring-2 ring-blue-400/50' : ''
                            }`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onMouseLeave={() => setActiveIndex(-1)}
                    >
                        {/* Background gradient effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <a
                            href={item.href}
                            className="block p-8 relative z-10 text-decoration-none"
                        >
                            <div className="flex items-start gap-6">
                                {/* Icon */}
                                <div className="text-4xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                    {item.icon}
                                </div>

                                <div className="flex-1 min-w-0">
                                    {/* Service title */}
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="text-purple-400 font-mono text-lg font-bold opacity-70 group-hover:opacity-100 transition-opacity">
                                                //
                                        </span>
                                        <h3 className="text-white text-xl font-semibold group-hover:text-blue-300 transition-colors">
                                            {item.label}
                                        </h3>
                                        <span className="text-blue-400 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300 text-xl">
                                            →
                                        </span>
                                    </div>

                                    {/* Tech stack */}
                                    <div className="flex items-center gap-2 text-slate-400 font-mono text-sm">
                                        <span className="opacity-60">Tech:</span>
                                        <span className="group-hover:text-blue-300 transition-colors">
                                            {item.tech}
                                        </span>
                                    </div>

                                    {/* Progress bar animation */}
                                    <div className="mt-4 h-1 bg-slate-700 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Hover highlight effect */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </a>
                    </div>
                ))}
            </div>

            {/* Call to action */}
            {/* <div className="text-center mt-16">
                <div className="inline-block p-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500">
                    <button className="px-8 py-3 bg-slate-900 text-white font-mono rounded-full hover:bg-slate-800 transition-colors duration-300 group">
                        <span className="mr-2">Ready to start your project?</span>
                        <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </button>
                </div>
                <p className="text-slate-400 font-mono text-sm mt-4">
                    Let's build something amazing together
                </p>
            </div> */}
        </section>
        // </div>
    );
};

export default Service;