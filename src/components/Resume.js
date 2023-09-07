import React from 'react';
import resumeFile from '../assets/Profile.pdf';

const Resume = () => {
  return (
    <div className="container my-5">
      <h2>Resume</h2>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Download My Resume</h4>
        <a href={resumeFile} download className="btn btn-primary">
          Download
        </a>
      </div>
      <h4>Proficiencies</h4>
      <ul className="list-group">
        <li className="list-group-item">JavaScript</li>
        <li className="list-group-item">React</li>
        <li className="list-group-item">Node.js</li>
        <li className="list-group-item">MongoDB</li>
        <li className="list-group-item">SQL</li>
        <li className="list-group-item">MySQL</li>
      </ul>
    </div>
  );
};

export default Resume;
