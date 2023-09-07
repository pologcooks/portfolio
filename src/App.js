import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('About Me');

  return (
    <div className='app'>
      <Header setCurrentSection={setCurrentSection} />
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
                  Hello, my name is Ralph Receninto, I am a technology enthusiast who is eager to learn more about Software Development while utilizing
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
            <div className='col col-6'>
              <Project title="SVG Logo Creator" link="https://pologcooks.github.io/Challenge_10/" repo="https://github.com/pologcooks/Challenge_10/" />
            </div>
            <div className='col col-6'>
              <Project title="Readme Generator" link="https://pologcooks.github.io/Challenge_9/" repo="https://github.com/pologcooks/Challenge_9/" />
            </div>
            <div className='col col-6'>
              <Project title="Ecommerce API" link="https://pologcooks.github.io/ecommerce-API/" repo="https://github.com/pologcooks/ecommerce-API" />
            </div>
            <div className='col col-6'>
              <Project title="Share Square" link="https://sharesquare-c95734f95f40.herokuapp.com/" repo="https://github.com/DawsonBolen/project-3" />
            </div>
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
