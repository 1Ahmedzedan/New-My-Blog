import styled from "styled-components";

const SectionHead = styled.p`
  text-align: center;
  font-size: 50px;
  color: white;
  font-weight: bold;
  border-bottom: #51ffa9 solid 5px;
  width: fit-content;
  padding: 0 40px;

  @media (max-width: 900px) {
    font-size: 40px;
  }
`;

export default SectionHead;
