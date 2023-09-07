import React from 'react';
import Navigation from './Navigation';

const Header = ({ setCurrentSection,currentSection }) => {
    return (
      <header className="bg-dark text-white p-3">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1 className="m-0">Ralph Recinto</h1>
            </div>
            <div className="col-md-6 d-flex justify-content-end align-items-center">
              <Navigation currentSection={currentSection} setCurrentSection={setCurrentSection} />
            </div>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;