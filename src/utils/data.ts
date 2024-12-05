import { Icons, Project, Skills } from "./interfaces";
import CloudTracker from "../assets/cloudTracker.png" ;
import Talk from "../assets/Talk.jpeg" ;
import EC2 from "../assets/EC2.png" ; 
import MazeGame from "../assets/mazeGame.png"

export const icons: Icons = {
  html: "../src/assets/htmlIcon.png",
  css: "../src/assets/cssIcon.png",
  js: "../src/assets/jsIcon.png",
  react: "../src/assets/reactIcon.png",
  tailwind: "../src/assets/tailwindIcon.png",
  nodejs: "../src/assets/nodejsIcon.png",
  typescript: "../src/assets/typescriptIcon.png",
};

export const skills: Skills = {
  programmingLanguage: {
    title: "programming language",
    skills: [
      // {
      //   title: "C",
      //   percentage: 95,
      // },
      {
        title: "HTML",
        percentage: 95,
      },
      {
        title: "CSS",
        percentage: 95,
      },
      {
        title: "JavaScript",
        percentage: 90,
      },
      {
        title: "C++",
        percentage: 95,
      },
      {
        title: "Java",
        percentage: 50,
      },
      {
        title: "python",
        percentage: 80,
      },
      {
        title: "SQL",
        percentage: 50,
      },
    ],
  },
  tools: {
    title: "tools and concepts",
    skills: [
      {
        title: "GitHub",
        percentage: 95,
      },
      {
        title: "Figma",
        percentage: 80,
      },
      {
        title: "Object Oriented Programming",
        percentage: 90,
      },
      {
        title: "Data Structures",
        percentage: 90,
      },
      {
        title: "Algorithms",
        percentage: 90,
      },
      {
        title: "Design Patterns",
        percentage: 70,
      },
      {
        title: "System Desig",
        percentage: 60,
      },
      {
        title: "Problem Solving",
        percentage: 80,
      },
      {
        title: "Competitive Programming",
        percentage: 80,
      },
      {
        title: "Trello",
        percentage: 70,
      },
      {
        title: "Docker",
        percentage: 50,
      },
      {
        title: "Postman",
        percentage: 80,
      },
    ],
  },
  Miscellaneous: {
    title: "Miscellaneous",
    skills: [
      {
        title: "Git",
        percentage: 95,
      },
      {
        title: "Bash",
        percentage: 70,
      },
      {
        title: "LaTeX",
        percentage: 80,
      },
      {
        title: "Markdown",
        percentage: 80,
      },
      {
        title: "Microsoft Office",
        percentage: 100,
      },
      {
        title: "Google Documents (Docs, Sheets, Slides, Forms, etc.)",
        percentage: 100,
      },
    ],
  },
  FrameWorks: {
    title: "FRAMEWORKS ",
    skills: [
      {
        title: "React JS",
        percentage: 95,
      },
      {
        title: "Next JS",
        percentage: 50,
      },
      {
        title: "Tail Wind",
        percentage: 95,
      },
      {
        title: "Styled Component",
        percentage: 95,
      },
      {
        title: "Bootstrap",
        percentage: 50,
      },
    ],
  },
  operatingSystems: {
    title: "operating system",
    skills: [
      {
        title: "Windows",
        percentage: 95,
      },
      {
        title: "Linux",
        percentage: 80,
      },
    ],
  },
};

export const projects: Project[] = [
  {
    title: "Cloud Tracker",
    description:
      "Awebappto track & visualize AWS resource usage, obtaining data by assuming IAM Roles and other methods.",
    repoLink: "https://github.com/1Ahmedzedan/Cloud-Tracker-Frontend",
    image: CloudTracker,
    tools: ["react", "typescript", "tailwind"],
  },
  {
    title: "AWS EC2 Products Explorer",
    description:
      "React application to explore and compare pricing for AWS Cloud EC2 compute instances and  Real time and interactive visualization with rich filtration options.",
    repoLink: "https://github.com/1Ahmedzedan/aws-instances-ec2",
    demoLink: "https://1ahmedzedan.github.io/aws-instances-ec2/",
    image: EC2,
    tools: ["react", "css"],
  },
  {
    title: "Talk App",
    description:
      "Talk App is a real-time messaging application that allows users to communicate with each other instantly.It is built using Socket.IO for server-side communication, Node.js and Express for the backend, React.js with TypeScript for the frontend.",
    repoLink: "https://github.com/1Ahmedzedan/Talk-App",
    demoLink: "https://chat-app-dvqz.onrender.com/",
    image: Talk,
    tools: ["react", "typescript", "tailwind", "nodejs"],
  },
  {
    title: "Maze Game",
    description:
      "This project is a maze game built using React.js. It utilizes a backtracking algorithm to generate the maze and depth-first search (DFS) algorithm to find the end of the maze. ",
    repoLink: "https://github.com/1Ahmedzedan/MAZE-GAME",
    demoLink: "https://1ahmedzedan.github.io/MAZE-GAME/",
    image: MazeGame,
    tools: ["react", "tailwind"],
  },
];
