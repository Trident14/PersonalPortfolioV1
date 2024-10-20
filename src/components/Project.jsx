import React from "react";
import "../Styles/Project.css";
import deploy from "../assets/deploy.svg";

const Project = ({ title, description, imageUrl, altText, bgColor, fontsize = "2rem", txtcolor, urlTo }) => {
    return (
        <div className="Project-section" style={{ backgroundColor: bgColor }}>
            <div className="project-image">
                <img src={imageUrl} alt={altText} />
            </div>
            <div className="project-text">
                <h1 style={{ color: txtcolor, fontSize: fontsize }}>{title}</h1>
                <div className="project-cont">
                    <h1 style={{ color: txtcolor }}>{description}</h1>
                </div>
                <div className="project-view">
                    <a href={urlTo}>
                        <img src={deploy} alt="Deployment" />
                    </a>
                    
                </div>
            </div>
        </div>
    );
};

export default Project;
