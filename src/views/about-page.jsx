import React from 'react';
import './about.scss';

const About = () => {
    return (
        <section id="project-site" className="case-studies-section">
            <div className="case-studies-header">
                <h2 className="section-title">Project Sites</h2>
                <p className="section-subtitle">A small selection of my projects</p>
                <button className="view-all-btn">View All Work</button>
            </div>

            <div className="project-grid">
                <div className="project-card">
                    <img
                        className="project-image"
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt="Project"
                    />
                    <h3 className="project-title">&lt; Project Name /&gt;</h3>
                    <button className="project-link">// View Project</button>
                </div>
                <div className="project-card">
                    <img
                        className="project-image"
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt="Project"
                    />
                    <h3 className="project-title">&lt; Project Name /&gt;</h3>
                    <button className="project-link">// View Project</button>
                </div>
                <div className="project-card">
                    <img
                        className="project-image"
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt="Project"
                    />
                    <h3 className="project-title">&lt; Project Name /&gt;</h3>
                    <button className="project-link">// View Project</button>
                </div>
            </div>
        </section>

    );
};

export default About;
