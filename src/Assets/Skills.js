import React from 'react';
import '../../src/Assets/Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section"style={{ backgroundImage: 'url(../image2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center',  justifyContent: 'center' }}>
      <h2 style={{color:'#3498db'}}>Skills</h2>
      <ul className="skills-list">
        <li className="skill-item">HTML5</li>
        <li className="skill-item">CSS3</li>
        <li className="skill-item">React.js</li>
        <li className="skill-item">Responsive Design</li>
        <li className="skill-item">UI/UX Design</li>
        <li className="skill-item">SEO for Social Media</li>
        <li className="skill-item">Video Editing</li>
        <li className="skill-item">Design (Thumbnails, Banners, Profile Images)</li>
      </ul>
    </section>
  );
}

export default Skills;
