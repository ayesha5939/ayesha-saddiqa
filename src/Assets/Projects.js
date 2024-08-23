import React from 'react';
import '../Assets/Projects.css';
import project1Img from '../../src/Images/project2.png'; // Add paths to your images
import project2Img from '../../src/Images/project3.jpg';
import project3Img from '../../src/Images/project4.png';

function Projects() {
  return (
    <section id="projects" className="projects-section" style={{ backgroundImage: 'url(../image2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',  justifyContent: 'center' }}>
      <h2 style={{ color:"rgb(52, 152, 219"}}>Projects</h2>
      <div className="step-line" style={{ color:"rgb(52, 152, 219"}}></div>
      <div className="project-item">
        <img src={project3Img} alt="Project 1" className="project-image" />
        <div className="project-details" style ={{ backgroundColor: '#000', // Black background
      color: '#fff', // White text
      padding: '5px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      borderRadius: '10px',
      animation: 'fadeIn 2s ease-in-out'}}>
          <h3>Open Source Guided Surgery</h3>
          <p>Technologies: React.js, HTML, CSS</p>
          <p>Created the frontend for an real time  website name open-source guided surgery, similar to SMOP Swissmeda.</p>
        </div>
      </div>
      <div className="project-item">
        <img src={project2Img} alt="Project 2" className="project-image" />
        <div className="project-details"style ={{ backgroundColor: '#000', // Black background
      color: '#fff', // White text
      padding: '5px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      borderRadius: '10px',
      animation: 'fadeIn 2s ease-in-out'}}>
          <h3 >My Portfolio</h3>
          <p>Technologies: React.js, HTML, CSS</p>
          <p>Developed a responsive portfolio website using React.js with animations and hover effects. Successfully pushed the code to GitHub for version control.</p>
        </div>
      </div>
      <div className="project-item">
        <img src={project1Img} alt="Project 3" className="project-image" />
        <div className="project-details"style ={{ backgroundColor: '#000', // Black background
      color: 'white', // White text
      padding: '5px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      fontSize: '18px',
      borderRadius: '10px',
      animation: 'fadeIn 2s ease-in-out'}}>
          <h3>E-commerce Website</h3>
          <p>Technologies: React.js, HTML, CSS</p>
          <p>Building a shopping website with features including a shopping cart, product pages, header, footer, slider, and video integration.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
