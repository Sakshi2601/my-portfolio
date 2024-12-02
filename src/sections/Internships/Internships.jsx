import React from "react";
import "./Internships.css";
import interlight from "../../assets/edu-img-icon.svg";
import interleft from "../../assets/edu-right.png";

const internshipData = [
  {
    id: 1,
    company: "Codsoft",
    role: "Python Intern",
    startDate: "June, 2024",
    endDate: "July, 2024",
    details:
      "Worked on real-world projects to enhance knowledge of Python and Tkinter.",
  },
  {
    id: 2,
    company: "Last Moment Tuitions",
    role: "Marketing Intern",
    startDate: "May, 2024",
    endDate: "June, 2024",
    details:
      "Promoted educational content and increased student engagement.",
  },
  {
    id: 3,
    company: "Jagtaran Educational Society",
    role: "Software System Intern",
    startDate: "December, 2023",
    endDate: "January, 2024",
    details:
      "Designed software to support student management and worked on technical systems.",
  },
  {
    id: 4,
    company: "Codingwiz Company",
    role: "Front-end Developer Intern",
    startDate: "May, 2023",
    endDate: "June, 2023",
    details:
      "Translated design concepts into functional user interfaces in projects.",
  },
];

const Internships = () => {
  return (
    <div id="internships">
      <h1 align="center">Internships</h1>
      <div className="internships">
        <div className="internships-body">
          {/* Left Column: Image */}
          <div className="internship-left">
            <img
              src={interleft}
              alt="Internship Illustration"
              className="internship-image"
            />
          </div>

          {/* Right Column: Internship Cards */}
          <div className="internship-right">
            {internshipData.map((intern) => (
              <div key={intern.id} className="internship-card">
                <div className="interncard-img">
                  <img src={interlight} alt="Internship Icon" />
                </div>
                <div className="internship-details">
                  <h6>
                    {intern.startDate} – {intern.endDate}
                  </h6>
                  <h4>{intern.role}</h4>
                  <h5>{intern.company}</h5>
                  <p>{intern.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
