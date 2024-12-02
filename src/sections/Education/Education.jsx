import React from "react";
import "./EducationStyles.css";
import edulight from '../../assets/edu.jpeg';
import eduright from '../../assets/edu-right.png';

const educationData = [
  {
    id: 1,
    institution: "St John College of Engineering and Management, Mumbai University",
    course: "Bachelor of Technology (Computer Engineering with Honors in Data Science)",
    startYear: 2021,
    endYear: 2025,
    details: "CGPA - 9.54",
  },
  {
    id: 2,
    institution: "Motilal Kanji Junior College, Maharashtra",
    course: "Higher Secondary School Certificate (PCMB with Information Technology)",
    startYear: 2020,
    endYear: 2021,
    details: "Percentage - 95.5%",
  },
  {
    id: 3,
    institution: "Shri Saraswati English Madhyamik Vidyalaya, Maharashtra",
    course: "Secondary School Certificate",
    startYear: 2018,
    endYear: 2019,
    details: "Percentage - 87%",
  },
];

const Education = () => {
  return (
    <div id="education">
      <h1 align="center">Education</h1>
      <div className="education">
      <h2 className="achievements-heading">QUALIFICATIONS</h2>
        <div className="education-body">
          {/* Left Column: Education Cards */}
          <div className="education-left">
            {educationData.map((edu) => (
              <div key={edu.id} className="education-card">
                <div className="educard-img">
                  <img
                    src={edulight}
                    alt="Education Icon"
                  />
                </div>
                <div className="education-details">
                  <h6>
                    {edu.startYear} - {edu.endYear}
                  </h6>
                  <h4>{edu.course}</h4>
                  <h5>{edu.institution}</h5>
                  <p>{edu.details}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right Column: Image */}
          <div className="education-right">
            <img
              src={eduright}
              alt="Education Illustration"
              className="education-image"
            />
          </div>
        </div>
        <h2 className="achievements-heading">CERTIFICATIONS</h2>
        <div className="achievements-grid">
          <div className="achievement-card">
            <h3>Design and Analysis of Algorithm</h3>
            <p>NPTEL Course from Indian Institute of Technology, Madras</p>
            <p>July 2023 – September 2023</p>
          </div>
          <div className="achievement-card">
            <h3>Python for Data Science</h3>
            <p>NPTEL Course from Indian Institute of Technology, Madras</p>
            <p>January 2023 – February 2023</p>
          </div>
          <div className="achievement-card">
            <h3>Frontend Development Bootcamp</h3>
            <p>Frontend Course from Codingwiz Company</p>
            <p>January 2023 – February 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
