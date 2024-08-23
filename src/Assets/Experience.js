import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience-section"  >
      <h2 style={{color:'#3498db'}}>Work Experience</h2>
      <div className="experience-item">
        <h3>Front End Developer - Hira Dental Lab</h3>
        <p>04/2024 - Present, Lahore</p>
        <ul>
          <li>Developed the front-end of the Open Source Guided Surgery website using React.js.</li>
          <li>Worked on the front-end development of a shopping website.</li>
          <li>Implemented responsive design to ensure mobile-friendly websites.</li>
          <li>Currently working on Admin Panel of a Software.</li>
        </ul>
      </div>
      <div className="experience-item">
        <h3>Digital Marketing and Front-End Developer - Sky Marketing</h3>
        <p>06/2023 - 09/2023, Islamabad</p>
        <ul>
          <li>Collaborated with Business Development Officers to strategize and implement digital marketing campaigns.</li>
          <li>Assisted in the creation and optimization of content for digital platforms to support marketing initiatives.</li>
        </ul>
      </div>
    </section>
  );
}

export default Experience;
