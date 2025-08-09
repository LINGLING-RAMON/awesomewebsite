import './index.scss'
import React, { useState, useRef, useEffect } from 'react';

// Components
import Rain from './components/Rain';
import Header from './components/Header';
import Landing from './views/landing-page';
import About from './views/about-page';
import Service from './views/services';

function App() {
  const rainRef = useRef();
  const thunderRef = useRef();

  // useEffect(() => {
  //   thunderRef.current = new Audio('/thunder.mp3');
  //   thunderRef.current.volume = 0.5; // tweak loudness
  // }, []);

  const scrollRef = useRef();

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let currentSection = 0;
    const sections = container.querySelectorAll('section');

    const scrollToSection = (index) => {
      if (index < 0 || index >= sections.length) return;
      currentSection = index;
      sections[index].scrollIntoView({ behavior: 'smooth' });
    };

    const handleWheel = (e) => {
      e.preventDefault();
      if (e.deltaY > 0) scrollToSection(currentSection + 1);
      else scrollToSection(currentSection - 1);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => container.removeEventListener('wheel', handleWheel);
  }, []);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    function handleMouseMove(e) {
      const pct = e.clientX / window.innerWidth;
      let angle;
      if (pct < 0.25) angle = '105deg';
      else if (pct < 0.5) angle = '95deg';
      else if (pct < 0.75) angle = '85deg';
      else angle = '75deg';
      rainRef.current?.style.setProperty('--angle', angle);
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);


  // function doLightningAndThunder() {
  //   const el = rainRef.current;
  //   if (!el) return;

  //   el.classList.add('storm-flash');
  //   setTimeout(() => el.classList.remove('storm-flash'), 300);

  //   document.body.classList.add('storm-shake');
  //   setTimeout(() => document.body.classList.remove('storm-shake'), 500);

  //   const delay = 200 + Math.random() * 600;
  //   setTimeout(() => {
  //     thunderRef.current.currentTime = 0;
  //     thunderRef.current.play();
  //   }, delay);
  // }

  return (
    <>
      <>
        <div className="relative z-10">
          <Rain ref={rainRef} />
          <Header />
          <div className='scroll-container h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth'>
            <section className="h-screen snap-start">
              <Landing />
            </section>
            <section className="snap-start overflow-y-auto md:min-h-[100vh] lg:min-m-screen">
              <Service />
            </section>
            <section className="snap-start overflow-y-auto md:min-h-[100vh] lg:min-m-screen">
              <About />
            </section>
          </div>
        </div>
      </>
    </>
  );
}

export default App