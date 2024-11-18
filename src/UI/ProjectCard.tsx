import { BiSolidShow } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const ProjectCard = () => {
  const ProjectCard = styled.div`
    background-color: white;
    width: 350px;
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
    font-size: 36px;
    font-weight: bold;
    text-transform: uppercase;
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
      <Title>Title</Title>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptas,
        placeat ullam quibusdam, nisi dicta eveniet rerum praesentium magni esse
        qui obcaecati consectetur est facere et velit aliquid sequi laborum!
      </Description>
      <Buttons>
        <a
          href="https://react-icons.github.io/react-icons/search/#q=shows"
          target="_blank"
        >
          <FaGithub />
        </a>
        <a href="" target="_blank">
          <BiSolidShow />
        </a>
      </Buttons>
    </ProjectCard>
  );
};
export default ProjectCard;
