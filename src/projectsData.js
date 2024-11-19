// src/data/projectsData.js
import moneywiseImage from "./assets/moneywise.png";
import sisu from "./assets/sisu.png";
import scheduler from "./assets/scheduler.png";
import weather from "./assets/weather.png";
import quiz from "./assets/quiz.png";
import pass from "./assets/pass.png";
import readme from "./assets/readme.png";
import tm from "./assets/tm.png";
import gks from "./assets/gks.png";
const projectsData = [
  {
    id: 1,
    title: "Moneywise",
    description:
      "A finance and budgeting app that helps users manage their expenses and set savings goals.",
    image: moneywiseImage,
    technologies: ["React", "Node.js", "PostgreSQL", "Bootstrap", "Chart.js"],
    link: "https://github.com/yasfeh12/moneywise--frontend",
    details:
      "Moneywise is a comprehensive finance app that enables users to set budgets, track expenses, and set financial goals. It utilizes Chart.js for data visualization and is built with responsive design principles using Bootstrap.",
  },
  {
    id: 2,
    title: "Equity Inclusion App",
    description:
      "A web app developed for an equity and diversity inclusion company to improve accessibility.",
    image: sisu,
    technologies: ["React", "React Native", "CSS"],
    link: "https://github.com/example/equityapp",
    details:
      "This app is designed to improve accessibility, with features aimed at enhancing user engagement and dynamic content delivery. It was developed with responsive web design principles and CSS.",
  },
  {
    id: 3,
    title: "Scheduler",
    description:
      "A scheduling app for users to manage tasks and set reminders.",
    image: scheduler,
    technologies: ["React", "Node.js", "Bootstrap", "PostgreSQL"],
    link: "https://github.com/yasfeh12/scheduler",
    details:
      "A robust scheduling app allowing users to create tasks, set deadlines, and receive notifications. Features a responsive design built with Bootstrap and data management through PostgreSQL.",
  },
  {
    id: 4,
    title: "Weather App",
    description: "A weather forecasting app providing real-time updates.",
    image: weather,
    technologies: ["JavaScript", "HTML", "CSS", "APIs"],
    link: "https://github.com/yasfeh12/weather-app",
    details:
      "Provides accurate, real-time weather data by integrating with an external weather API. Built with a responsive design to ensure usability across devices.",
  },
  {
    id: 5,
    title: "Quiz App",
    description: "An interactive quiz app with various categories and levels.",
    image: quiz,
    technologies: ["React", "CSS"],
    link: "https://github.com/yasfeh12/quiz",
    details:
      "This app features multiple quiz categories, dynamic scoring, and timed questions. Built with a focus on responsive design and user engagement.",
  },
  {
    id: 6,
    title: "README Generator",
    description:
      "A CLI tool for generating professional README files for GitHub projects.",
    image: readme,
    technologies: ["Node.js"],
    link: "https://github.com/yasfeh12/readme-generator",
    details:
      "Simplifies README creation by generating formatted content based on user inputs. Enhances project documentation consistency for GitHub repositories.",
  },
  {
    id: 7,
    title: "Password Generator",
    description:
      "A secure password generator with custom length and complexity.",
    image: pass,
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/yasfeh12/new-Password-Generator",
    details:
      "Generates secure passwords with customizable options for length, character types, and strength, ensuring robust security for users.",
  },
  {
    id: 8,
    title: "GKS Tanning",
    description: "A business page for a tanning bed company.",
    image: gks,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/yasfeh12/GKS-tanning",
    details:
      "A modern, responsive website for GKS Tanning, highlighting services, customer testimonials, and an attractive design built with HTML, CSS, and JavaScript.",
  },
  {
    id: 9,
    title: "Marketplace",
    description:
      "An e-commerce platform similar to eBay for buying and selling items.",
    image: "/images/marketplace.png",
    technologies: ["React", "Node.js", "Bootstrap", "PostgreSQL"],
    link: "https://github.com/yasfeh12/fe-nc-marketplace",
    details:
      "A full-fledged e-commerce site featuring user listings, profiles, and secure transactions. Built with a focus on responsiveness and database management.",
  },
  {
    id: 10,
    title: "TM Electric",
    description: "A business website for a local electrician company.",
    image: tm,
    technologies: ["React", "Bootstrap", "CSS"],
    link: "https://github.com/yasfeh12/tm-electric",
    details:
      "TM Electric’s website showcases services, contact information, and a booking form, providing a seamless user experience with responsive design.",
  },
];

export default projectsData;
