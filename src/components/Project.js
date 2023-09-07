import React from 'react';

const Project = ({ title, link, repo }) => {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <a className="btn btn-primary" href={link}>Live View</a>
        <a className="btn btn-secondary" href={repo}>GitHub</a>
      </div>
    </div>
  );
};

export default Project;