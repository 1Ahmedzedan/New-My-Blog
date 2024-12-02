import styled from "styled-components";

const ContentContainer = styled.div`
  width: 80%;
  height: fit-content;

  display: flex;
  flex-direction: column;
  gap: 150px;

  @media (max-width: 1400px) {
    width: 70%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export default ContentContainer;
