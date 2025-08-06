import React, { forwardRef } from 'react';

const buildStars = (count) =>
    Array.from({ length: count }).map((_, i) => {
        const top = Math.random() * 100;
        const left = Math.random() * 100;
        const size = Math.random() * 0.3 + 0.1;
        const op = Math.random() * 0.5 + 0.3;

        return (
            <div
                key={`star-${i}`}
                className="star"
                style={{
                    top: `${top}%`,
                    left: `${left}%`,
                    width: `${size}vmin`,
                    height: `${size}vmin`,
                    opacity: op,
                }}
            />
        );
    });

const buildDrops = (count = 300) =>
    Array.from({ length: count }).map((_, i) => {
        const left = Math.random() * 120; // matches .rain width (120vw)
        const delay = Math.random() * 2;
        const duration = 0.5 + Math.random();
        const opacity = 0.3 + Math.random() * 0.5;
        const blur = Math.random() < 0.3 ? '0.5px' : '0px';

        return (
            <div
                key={`drop-${i}`}
                className="drop"
                style={{
                    left: `${left}vw`,
                    animationDelay: `${delay}s`,
                    animationDuration: `${duration}s`,
                    opacity,
                    filter: `blur(${blur})`,
                }}
            />
        );
    });

const RainBackground = forwardRef((props, ref) => (
    <div className="rain" ref={ref} {...props}>
        <div className="stars">{buildStars(100)}</div>
        <div className="moon" />
        {buildDrops()}
    </div>
));

export default RainBackground;