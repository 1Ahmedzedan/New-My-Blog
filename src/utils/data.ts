import { Project, Skills } from "./interfaces";

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
  },
  {
    title: " AWS EC2 Products Explorer ",
    description:
      "React application to explore and compare pricing for AWS Cloud EC2 compute instances and  Real time and interactive visualization with rich filtration options.",
    repoLink: "https://github.com/1Ahmedzedan/aws-instances-ec2",
    demoLink: "https://1ahmedzedan.github.io/aws-instances-ec2/",
  },
];
