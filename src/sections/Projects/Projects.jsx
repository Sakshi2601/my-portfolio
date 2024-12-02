import React from "react";
import styles from "./ProjectsStyles.module.css";
import one from "../../assets/Projects/digividya.jpg";
import two from "../../assets/Projects/marketing.jpeg";
import three from "../../assets/Projects/housyy.jpg";
import four from "../../assets/Projects/recipe.jpeg";
import five from "../../assets/Projects/fashion.jpeg"
import six from "../../assets/Projects/photo.jpeg"
import seven from "../../assets/Projects/gamified.jpg"
import eight from "../../assets/Projects/weather.jpeg"
const projectsData = [
  {
    id: 1,
    name: "DigiVidya Learning Platform",
    duration: "Oct 2024 - Nov, 2024",
    description: "Voice-based digital learning platform with an AI chatbot assistant.",
    demoLink: "https://hack-vcet.vercel.app",
    githubLink: "https://github.com/Sakshi2601/hack-vcet",
    image: one,
  },
  {
    id: 2,
    name: "Housyy House Service Provider",
    duration: "Aug 2023 – Mar, 2024",
    description: "MERN stack platform offering house services with back-end focus.",
    demoLink: "https://housyy.vercel.app",
    githubLink: "https://github.com/Haamidraza03/House-Services",
    image: three,
  },
  {
    id: 3,
    name: "Meal: Recipe Finder App",
    duration: "Mar 2024 - Apr 2024",
    description: "Suggests YouTube videos and recipes using React and Meal Database API.",
    demoLink: "https://meal-alpha.vercel.app",
    githubLink: "https://github.com/Sakshi2601/meal",
    image: four,
  },
  {
    id: 4,
    name: "Fashion Blaze E-Commerce",
    duration: "May 2023 – June, 2023",
    description: "Seamless e-commerce experience using Owl Carousel, HTML, CSS, and JavaScript.",
    demoLink: "https://fashion-blaze-project.vercel.app",
    githubLink: "https://github.com/Sakshi2601/proj-cloth",
    image: five,
  },
  {
    id: 5,
    name: "Digital Marketing Website",
    duration: "June 2024 – July, 2024",
    description: "Website focusing on design and functionality using Bootstrap and Getform.io.",
    demoLink: "https://digital-marketing-sable.vercel.app",
    githubLink: "https://github.com/Sakshi2601/Digital-Marketing",
    image: two,
  },
  {
    id: 6,
    name: "Gamified Platform For Law Awareness",
    duration: "August 2024",
    description: "VR-based platform for learning laws, developed using MERN Stack and React360.",
    demoLink: null,
    githubLink: "https://github.com/Sakshi2601/main_project",
    image: seven,
  },
  {
    id: 7,
    name: "Photography Website",
    duration: "May 2023 - June 2023",
    description: "A showcase for excellent photography collections built with HTML and CSS.",
    demoLink: "https://photography-ashy.vercel.app",
    githubLink: "https://github.com/Sakshi2601/photography",
    image: six,
  },
  {
    id: 8,
    name: "Weather App",
    duration: "March 2024 - April 2024",
    description: "Provides weather updates for different locations using Weather API.",
    demoLink: "https://weather-app-omega-smoky-24.vercel.app",
    githubLink: "https://github.com/Sakshi2601/weather-app",
    image: eight,
  },
];

const Projects = () => {
  return (
    <div className={styles.projectsSection} id="projects">
      <h1 className={styles.heading}>Projects</h1>
      <div className={styles.projectsGrid}>
        {projectsData.map((project) => (
          <div key={project.id} className={styles.card}>
            <div className={styles.imageContainer}>
              <img src={project.image} alt={project.name} />
            </div>
            <div className={styles.content}>
              <h3>{project.name}</h3>
              <p className={styles.duration}>{project.duration}</p>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
