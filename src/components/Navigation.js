import React from 'react';

const Navigation = ({ setCurrentSection }) => {
    return (
        <nav>
            <a className="mx-3" href="#about" onClick={() => setCurrentSection('About Me')}>About Me</a>
            <a className="mx-3" href="#portfolio" onClick={() => setCurrentSection('Portfolio')}>Portfolio</a>
            <a className="mx-3" href="#contact" onClick={() => setCurrentSection('Contact')}>Contact</a>
            <a className="mx-3" href="#resume" onClick={() => setCurrentSection('Resume')}>Resume</a>
        </nav>
    );
};

export default Navigation;