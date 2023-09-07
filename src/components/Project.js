import React from 'react';

const Project = ({ title, link, repo }) => {
  return (
    <div className="card m-1">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <a className="btn btn-primary m-1" href={link}>Live View</a>
        <a className="btn btn-secondary m-1" href={repo}>GitHub</a>
      </div>
    </div>
  );
};

export default Project;