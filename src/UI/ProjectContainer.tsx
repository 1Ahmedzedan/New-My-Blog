import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 50px;
  position: relative;
  z-index: 1;

  &:hover {
    & > div {
      /* opacity: 0.5; */
      transform: scale(0.9);
    }
  }
`;


export default ProjectContainer ; 