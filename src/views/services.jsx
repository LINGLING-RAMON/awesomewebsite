// Service.jsx
import React from "react";

const items = [
    { label: "E-commerce websites with smooth checkout & custom product pages", href: "/work#ecommerce" },
    { label: "High-converting landing pages for SaaS & digital products", href: "/work#saas" },
    { label: "Portfolio & personal brand sites that stand out", href: "/work#portfolio" },
    { label: "Responsive, SEO-friendly builds optimized for speed and performance", href: "/work#performance" },
];

const Service = () => {
    return (
        <section className="services" aria-labelledby="services-title">
            <header className="services__header">
                <span className="services__angle">&lt;</span>
                <h2 id="services-title" className="services__title">What I Do</h2>
                <span className="services__slash">/&gt;</span>
            </header>

            <p className="services__lead">
                I design and build fast, responsive websites for clients who want clean code,
                smooth interactions, and results that matter. Whether you need a polished
                business site, a unique personal brand, or interactive features that stand out.
                I bring ideas to life with modern tools and attention to detail.
            </p>

            <ul className="services__list" role="list">
                {items.map(({ label, href }) => (
                    <li key={label} className="services__item">
                        <a className="services__link" href={href}>
                            <span className="services__comment">//</span>
                            <span className="services__text">{label}</span>
                            <span aria-hidden className="services__arrow">›</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Service;
