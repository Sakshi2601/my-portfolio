import React from 'react';
import './Achievements.css';

export default function Achievements() {
  return (
    <div className="achievements-container" id="achievements">
      <h1 className="achievements-head">MY ACHIEVEMENTS</h1>
      <h2 className="achievements-heading">PROUD MOMENTS & RECOGNITION</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <h3>HackerRank Badges</h3>
          <p>Achieved 5 Star in SQL and C programming languages.</p>
        </div>
        <div className="achievement-card">
          <h3>Clue Chronicles Quiz</h3>
          <p>Won 1st Prize in Clue Chronicles Quiz, September 2024.</p>
        </div>
        <div className="achievement-card">
          <h3>GATE Qualified</h3>
          <p>Qualified GATE Computer Science, March 2024.</p>
        </div>
        <div className="achievement-card">
          <h3>Paper-a-thon</h3>
          <p>
            Won 3rd Prize in Paper-a-thon, a technical research paper writing competition, March
            2023.
          </p>
        </div>
      </div>
      <h2 className="achievements-heading">RESPONSIBILITIES</h2>
      <div className="achievements-grid">
        <div className="achievement-card">
          <h3>Volunteer</h3>
          <p>Women Development Cell, August 2024</p>
        </div>
        <div className="achievement-card">
          <h3>Advisor</h3>
          <p>Sophisticated and Perpetual Coders Association, June 2024</p>
        </div>
        <div className="achievement-card">
          <h3>Secretary</h3>
          <p>Indian Society for Technical Education, June 2023 - May 2024</p>
        </div>
        <div className="achievement-card">
          <h3>Content Member</h3>
          <p>Google Developer Students Club, June 2023 - May 2024</p>
        </div>
      </div>
    </div>
  );
}
