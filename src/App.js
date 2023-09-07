import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div>
      <Header setCurrentSection={setCurrentSection}/>
      <main className="container my-4">
        {currentSection === 'About Me' && <div className="bg-light p-4">About Me Content</div>}
        {currentSection === 'Portfolio' && (
          <div className="row">
            <Project title="Project 1" link="#link1" repo="#repo1" />
            <Project title="Project 2" link="#link2" repo="#repo2" />
            {/* Add more Project components */}
          </div>
        )}
        {currentSection === 'Contact' && <div className="bg-light p-4">Contact Content</div>}
        {currentSection === 'Resume' && <div className="bg-light p-4">Resume Content</div>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
