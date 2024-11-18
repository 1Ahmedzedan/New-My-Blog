import SkillsContainer from "../UI/SkillsContainer";
import { skills } from "../utils/data";
import SectionHead from "../UI/SectionHead";
import SectionContainer from "../UI/SectionContainer";
const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionHead>SkILL</SectionHead>
      {Object.keys(skills).map((category) => (
        <SkillsContainer title={category} />
      ))}
    </SectionContainer>
  );
};
export default Skills;
