import SectionHead from "../UI/SectionHead";
import SectionContainer from "../UI/SectionContainer";
import ProjectCard from "../UI/ProjectCard";
import ProjectContainer from "../UI/ProjectContainer";
import { projects } from "../utils/data";
import { Project } from "../utils/interfaces";

const Projects = () => {
  return (
    <SectionContainer id="projects">
      <SectionHead>PROJECTS</SectionHead>
      <ProjectContainer>
        {projects.map((project: Project) => (
          <ProjectCard
            title={project.title}
            description={project.description}
            demoLink={project.demoLink}
            repoLink={project.repoLink}
          />
        ))}
      </ProjectContainer>
    </SectionContainer>
  );
};
export default Projects;
