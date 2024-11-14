import styled from "styled-components";
import SkillsContainer from "../UI/SkillsContainer";
import { skills } from "../utils/data";
const Skills = () => {
  const Container = styled.div`
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 75px;
  `;

  const Head = styled.p`
    text-align: center;
    font-size: 50px;
    color: white;
    font-weight: bold;
    border-bottom: #51ffa9 solid 5px;
    width: 20%;
  `;

  return (
    <Container id="skills">
      <Head>SkILL</Head>
      {Object.keys(skills).map((category) => (
        <SkillsContainer title={category} />
      ))}
    </Container>
  );
};
export default Skills;
