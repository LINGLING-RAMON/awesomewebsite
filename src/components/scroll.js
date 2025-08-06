// src/utils/scrollHelper.js

// easing curve
function easeInOutCubic(pos) {
    if ((pos /= 0.5) < 1) return 0.5 * Math.pow(pos, 3);
    return 0.5 * (Math.pow(pos - 2, 3) + 2);
}

/**
 * Smoothly scrolls the page to `targetY` over a duration
 * proportional to the distance (min .1s, max .8s), at ~60fps.
 */
export function smoothScroll(targetY, speed = 1000) {
    const startY = window.pageYOffset || document.documentElement.scrollTop;
    const distance = targetY - startY;
    const reduced = window.matchMedia('(prefers-reduced-motion)').matches;
    const derivedSpeed = reduced ? speed * 3 : speed;
    // time = distance ÷ speed, clamped to [0.1, 0.8] seconds
    const duration = Math.max(
        0.1,
        Math.min(Math.abs(distance) / derivedSpeed, 0.8)
    );

    let currentTime = 0;
    function animate() {
        currentTime += 1 / 60;
        const progress = Math.min(currentTime / duration, 1);
        const eased = easeInOutCubic(progress);
        window.scrollTo(0, startY + distance * eased);
        if (progress < 1) requestAnimationFrame(animate);
    }
    animate();
}

/**
 * Given a section index and direction, figure out the
 * next scrollTop and call smoothScroll.
 */
export function goToSection(index, sectionCount, direction = 'next') {
    let newIndex = index;
    if (direction === 'next') newIndex = Math.min(index + 1, sectionCount - 1);
    else if (direction === 'prev') newIndex = Math.max(index - 1, 0);
    const targetY = window.innerHeight * newIndex;
    smoothScroll(targetY);
    return newIndex;
}
