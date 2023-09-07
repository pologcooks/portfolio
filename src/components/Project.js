import React from 'react';

const Project = ({ title, link, repo, img }) => {
    return (
        <div className="card m-1">
            <h3 className="card-title">{title}</h3>
            <img height={250} src={img} alt={title} className="card-img-top" />
            <div className="card-body">
                <a className="btn btn-primary m-1" href={link}>Live View</a>
                <a className="btn btn-secondary m-1" href={repo}>GitHub</a>
            </div>
        </div>
    );
};

export default Project;