// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
import spring from "./assets/techstack/spring.png";
import docker from "./assets/techstack/docker.png";
import node from "./assets/techstack/node.png";
import mysql from "./assets/techstack/mysql.png";
import mongo from "./assets/techstack/mongo.png";
import python from "./assets/techstack/python.png"
import angular from "./assets/techstack/angular.png"
import java from "./assets/techstack/java.png"
import postgre from "./assets/techstack/postgre.png"
import oracle from "./assets/techstack/oracle.png"
import jenkins from "./assets/techstack/jenkins.png"
import ansible from "./assets/techstack/ansible.png"
import aws from "./assets/techstack/aws.png"
import azure from "./assets/techstack/azure.png"


// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.png";

//import projectImage5 from "./assets/projects/project5.jpg";
//import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Yannick Faical",
  tagline: "I build things for web",
  img: profile,
  about: `I am a software engineer with a strong passion for web development. I love creating intuitive user experiences with a solid backend`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein:
    "https://www.linkedin.com/in/yannick-fa%C3%AF%C3%A7al-compaore-184279225/",
  github: "https://github.com/YannickFaical",
  twitter: "https://twitter.com/",
  instagram: "https://www.instagram.com/",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Full Stack Web Developer",
    Company: `ArtEyez`,
    Location: "Tangier ,Morroco",
    Type: "Full Time",
    Duration: "jul 2023 - sept 2023",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master 2 in information and web technologies",
    Company: `Université claude bernard de lyon`,
    Location: "lyon ,france",
    Type: "Full Time",
    Duration: "2024 - 2025",
  },
  
 
  {
    Position: "State engineering diploma in software engineering",
    Company: `IGA`,
    Location: "Casablanca ,morroco",
    Type: "Full Time",
    Duration: "Oct 2023 - Sept 2025",
  },
  {
    Position: "Bachelor's degree in computer engineering",
    Company: `IGA`,
    Location: "Casablanca ,morroco",
    Type: "Full Time",
    Duration: "Oct 2020- Sept 2023",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
  spring: spring,
  docker: docker,
  node: node,
  mysql: mysql,
  mongo: mongo,
  python :python,
  angular:angular,
  java:java,
  postgre:postgre,
  oracle :oracle,
  jenkins :jenkins,
  ansible:ansible,
  aws:aws,
  azure:azure,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Makwins – B2B E-commerce Platform for Buying and Selling Backlinks",
    image: projectImage5,
    description: `Developed a secure and user-friendly web application to facilitate the purchase and sale of backlinks between companies, integrating payment systems like PayPal and Stripe`,
    techstack: " php ,symfony, twig template",
    previewLink: "https://google.com",
    githubLink: "https://github.com/YannickFaical/tech-backend",
  },
  {
    title: "User reviews",
    image: projectImage1,
    description: `A Spring boot application that allows users to enter their opinion on a service or item`,
    techstack: "Spring Boot, Postman",
    previewLink: "https://google.com",
    githubLink: "https://github.com/YannickFaical/tech-backend",
  },
  {
    title: "attendance management",
    image: projectImage2,
    description: `IMPLEMENTATION OF A MANAGEMENT SOLUTION AND MONITORING OF ATTENDANCE, LEAVES AND DELAYS in an engineering school`,
    techstack: "{spring boot , MySQL , DATA JPA , SPRING SECURITY }, Python",
    previewLink: "https://google.com",
    githubLink: "https://github.com/YannickFaical/GestionPresenceFin",
  },
  {
    title: "My progression",
    image: projectImage3,
    description: `this site devoted to your programming progression`,
    techstack: "HTML/CSS, React.js",
    previewLink: "https://google.com",
    githubLink: "https://github.com/YannickFaical/my-progress",
  },
  {
    title: "notepad app",
    image: projectImage4,
    description: `notepad App`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com/YannickFaical/BlocNote",
  },
  /* {
    title: "Project title 5",
    image: projectImage5,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  }, */
];

// Enter your Contact Details here
export const contactDetails = {
  email: "ycompaore48@gmail.com",
  phone: "+212 690166935",
};
