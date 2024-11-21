import { BiSolidShow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

interface Props {
  title: string;
  description: string;
  repoLink: string | undefined;
  demoLink: string | undefined;
}

const ProjectCard = ({ title, description, repoLink, demoLink }: Props) => {
  const ProjectCard = styled.div`
    background-color: white;
    width: 90%;
    height: 500px;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 0 8px 1px white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-bottom: 40px;
    cursor: pointer;
    transition: all 300ms linear;
    position: relative;
    z-index: 2;

    &:hover {
      transform: scale(1.1) !important;
      opacity: 1 !important;
    }
  `;

  const Title = styled.div`
    background-color: #2db872;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    padding: 10;
  `;

  const Description = styled.div`
    color: #2db872;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 20px;
    text-align: center;
  `;

  const Buttons = styled.div`
    padding: 0 20px;
    display: flex;
    gap: 10px;
    justify-content: start;

    & > a {
      background-color: #2db872;
      border: none;
      padding: 5px;
      font-size: 30px;
      border-radius: 25px;
      text-decoration: none;
      transition: all 500ms linear;
    }

    & > a:hover {
      background-color: #07f980;
    }
  `;

  return (
    <ProjectCard>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Buttons>
        {repoLink && (
          <a href={repoLink} target="_blank">
            <FaGithub />
          </a>
        )}
        {demoLink && (
          <a href={demoLink} target="_blank">
            <BiSolidShow />
          </a>
        )}
      </Buttons>
    </ProjectCard>
  );
};
export default ProjectCard;
