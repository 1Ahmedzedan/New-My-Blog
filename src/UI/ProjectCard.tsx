import { BiSolidShow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import styled, { keyframes } from "styled-components";
// import ProjectImg from "../assets/projectImg.jpg";
import { icons } from "../utils/data";
import { Icons } from "../utils/interfaces";

interface Props {
  title: string;
  description: string;
  repoLink: string | undefined;
  demoLink: string | undefined;
  image: string | undefined;
  tools: string[] | undefined;
}

const ProjectCard = ({
  title,
  description,
  repoLink,
  demoLink,
  image,
  tools,
}: Props) => {
  const ProjectCard = styled.div`
    background-color: #1b2b2b;
    width: 98%;
    height: 420px;
    max-height: 420px;
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 300ms linear;
    position: relative;
    z-index: 2;

    padding: 8px;

    &:hover {
      transform: scale(1) !important;
      opacity: 1 !important;
      /* box-shadow: 0 0 5px 0.5px white; */

      .overlay {
        display: flex;
      }
    }
  `;

  const Content = styled.div`
    & > .title {
      font-size: 20px;
      color: #51ffa9;
    }

    & > .description {
      font-size: 14px;
    }
  `;

  const ProjectImg = styled.img`
    width: 100%;
    height: 100%;
    z-index: 2;
  `;

  const backgroundAnimation = keyframes`
    0%{
      background-color: rgba(0 , 0 , 0 , 0.4);
      justify-content: space-between;
    }
    25%{
      background-color: rgba(0 , 0 , 0 , 0.5);
      justify-content: space-around;
    }
    50%{
      background-color: rgba(0 , 0 , 0 , 0.6);
      justify-content: space-evenly;
    }
    75%{
      background-color: rgba(0 , 0 , 0 , 0.7);
      justify-content: space-evenly;
    }
    100%{
      background-color: rgba(0 , 0 , 0 , 0.8);
      justify-content: center;
      gap: 40px;
    }
  `;

  const ProjectImgContainer = styled.div`
    height: 50%;
    position: relative;

    & > .overlay {
      position: absolute;
      height: 100%;
      max-height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      z-index: 3;
      top: 0;
      left: 0;
      display: none;

      align-items: center;
      /* gap : 120px ;  */

      animation: ${backgroundAnimation} 150ms step-end 0s 1 normal forwards;

      .btn {
        background-color: #2db872;
        border: none;
        padding: 3px;
        font-size: 42px;
        border-radius: 25px;
        text-decoration: none;
        transition: all 500ms linear;
      }

      .btn:hover {
        background-color: #07f980;
      }
    }
  `;

  const Tools = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;


    & > img {
      width: 28px;
      height: 28px;
    }
  `;

  return (
    <ProjectCard>
      <ProjectImgContainer>
        <ProjectImg
          src={image ? image : "../src/assets/projectImg.jpg"}
          alt="projectImg"
        />
        <div className="overlay">
          {repoLink && (
            <a href={repoLink} target="_blank" className="btn">
              <FaGithub />
            </a>
          )}
          {demoLink && (
            <a href={demoLink} target="_blank" className="btn">
              <BiSolidShow />
            </a>
          )}
        </div>
      </ProjectImgContainer>

      <Content>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </Content>

      <Tools>
        {tools?.map((tool: string) => (
          <img src={icons[tool as keyof Icons]} alt="tool" />
        ))}
      </Tools>
    </ProjectCard>
  );
};
export default ProjectCard;
