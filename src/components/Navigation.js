import React from 'react';

const Navigation = ({ currentSection,setCurrentSection }) => {
    return (
        <nav>
            <a className={currentSection == "About Me" ? "mx-3 navlink active" : "mx-3 navlink"} href="#about" onClick={() => setCurrentSection('About Me')}>About Me</a>
            <a className={currentSection == "Portfolio" ? "mx-3 navlink active" : "mx-3 navlink"} href="#portfolio" onClick={() => setCurrentSection('Portfolio')}>Portfolio</a>
            <a className={currentSection == "Contact" ? "mx-3 navlink active" : "mx-3 navlink"} href="#contact" onClick={() => setCurrentSection('Contact')}>Contact</a>
            <a className={currentSection == "Resume" ? "mx-3 navlink active" : "mx-3 navlink"} href="#resume" onClick={() => setCurrentSection('Resume')}>Resume</a>
        </nav>
    );
};

export default Navigation;