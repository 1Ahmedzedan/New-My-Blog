import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  row-gap: 10px;
  position: relative;
  z-index: 1;
`;

export default ProjectContainer;
