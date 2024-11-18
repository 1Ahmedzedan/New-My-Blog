import SectionHead from "../UI/SectionHead";
import SectionContainer from "../UI/SectionContainer";
import ProjectCard from "../UI/ProjectCard";
import styled from "styled-components";

const Projects = () => {
  const ProjectContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 50px;
    position: relative;
    z-index: 1;

    &:hover {
      /* opacity: 0.5; */

      & > div {
        opacity: 0.5;
        transform: scale(0.9);
      }
    }
  `;
  return (
    <SectionContainer id="projects">
      <SectionHead>PROJECTS</SectionHead>
      <ProjectContainer>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectContainer>
    </SectionContainer>
  );
};
export default Projects;
