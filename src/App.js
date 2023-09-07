import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div className='app'>
      <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
      <main className="content container my-4">
        {currentSection === 'About Me' &&
          <div className="container my-5">
            <h2>About Me</h2>
            <div className="row">
              <div className="col-lg-4">
                <img src='/me.jpg' alt="Ralph Recinto" className="img-fluid rounded-circle mb-3" />
              </div>
              <div className="col-lg-8">
                <p>
                  Hello, my name is Ralph Recinto, I am a technology enthusiast who is eager to learn more about Software Development while utilizing
                  my current experience and knowledge to help build something great. I have experience in full-stack development, including frontend, backend, and database management.
                </p>
                <p>
                  In my free time, I like having family time and working on side projects.
                </p>
              </div>
            </div>
          </div>
        }
        {currentSection === 'Portfolio' && (
          <div className="row">
            <div className='col col-4'>
              <Project title="SVG Logo Creator" img={'/portfolio/svglogo.png'} link="https://pologcooks.github.io/Challenge_10/" repo="https://github.com/pologcooks/Challenge_10/" />
            </div>
            <div className='col col-4'>
              <Project title="Readme Generator" img={'/portfolio/readme.png'} link="https://pologcooks.github.io/Challenge_9/" repo="https://github.com/pologcooks/Challenge_9/" />
            </div>
            <div className='col col-4'>
              <Project title="Ecommerce API" img={'/portfolio/ecommerce_api.png'} link="https://pologcooks.github.io/ecommerce-API/" repo="https://github.com/pologcooks/ecommerce-API" />
            </div>
            <div className='col col-4'>
              <Project title="Share Square" img={'/portfolio/share_square.png'} link="https://sharesquare-c95734f95f40.herokuapp.com/" repo="https://github.com/DawsonBolen/project-3" />
            </div>
            <div className='col col-4'>
              <Project title="Password Generator" img={'/portfolio/password_generator.png'} link="https://pologcooks.github.io/Challenge_3/" repo="https://github.com/pologcooks/Challenge_3/" />
            </div>
            <div className='col col-4'>
              <Project title="Marvel" img={'/portfolio/marvel.png'} link="https://andressilva1.github.io/Group-Project/" repo="https://github.com/AndresSilva1/Group-Project" />
            </div>
          </div>
        )}
        {currentSection === 'Contact' && <Contact />}
        {currentSection === 'Resume' && <Resume/>}
      </main>
      <Footer />
    </div>
  );
}

export default App;
