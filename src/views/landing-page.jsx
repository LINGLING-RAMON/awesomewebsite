import React, { useState, useEffect } from 'react';
import './landing.scss';

const HEADING = ';Web Developer';
const DOT_COUNT = 11;

export default function HomeHero() {
    const letters = HEADING.split('');
    const [shiverSet, setShiverSet] = useState(new Set());

    useEffect(() => {
        const interval = setInterval(() => {
            const index = Math.floor(Math.random() * letters.length);
            setShiverSet(prev => {
                const next = new Set(prev);
                next.add(index);
                return next;
            });
            setTimeout(() => {
                setShiverSet(prev => {
                    const next = new Set(prev);
                    next.delete(index);
                    return next;
                });
            }, 400);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="home-hero bg-[#0a192f]">
            <h1 className="home-hero__heading">
                {letters.map((char, i) => (
                    <span className="rain-container" style={{ '--delay': `${i * 0.1}s` }}>
                        <span
                            key={i}
                            className={`home-hero__letter rain-fall ${shiverSet.has(i) ? 'shiver' : ''}`}>
                            {char}
                        </span>
                    </span>
                ))}
            </h1>

            <p className="home-hero__sub">
                Aspiring web developer with a passion for crafting modern web experiences.
            </p>

            <button className="home-hero__cta"><span class="cursor">&lt; Learn More /&gt;</span></button>

            {/* <ul className="home-hero__dots">
                {Array.from({ length: DOT_COUNT }).map((_, i) => (
                    <li
                        key={i}
                        className={[
                            'home-hero__dot',
                            i === Math.floor(DOT_COUNT / 2) && 'home-hero__dot--active',
                            i % 2 === 1 && 'home-hero__dot--pattern',
                        ]
                            .filter(Boolean)
                            .join(' ')}
                    />
                ))}
            </ul> */}
        </section>
    );
}
