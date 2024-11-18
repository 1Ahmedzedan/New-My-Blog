import styled from "styled-components";
import SkillCard from "./SkillCard";
import { skills } from "../utils/data";
import { Skill, Skills } from "../utils/interfaces";
import { SiSitepoint } from "react-icons/si";

interface ComponentProps {
  title: string;
}

const SkillsContainer = ({ title }: ComponentProps) => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;

    & > .skills {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-items: center;
      padding: 0 30px;
      row-gap: 30px;
    }
  `;

  const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
    /* border-bottom: #51ffa9 solid 3px; */
    width: fit-content;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 20px;

    & > svg {
      color: #51ffa9;
    }
  `;

  return (
    <Container>
      <Title>
        <SiSitepoint />
        {skills[title as keyof Skills].title}
      </Title>
      <div className="skills">
        {skills[title as keyof Skills].skills.map((skill: Skill) => (
          <SkillCard title={skill.title} percentage={skill.percentage} />
        ))}
      </div>
    </Container>
  );
};
export default SkillsContainer;
