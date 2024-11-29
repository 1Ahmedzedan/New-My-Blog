import SectionContainer from "../../UI/SectionContainer";
import SectionHead from "../../UI/SectionHead";
import Education from "./Education";
import Summary from "./Summary";
import Volunteering from "./Volunteering";
import Work from "./Work";

const AboutMe = () => {
  return (
    <SectionContainer id="aboutMe">
      <SectionHead>About Me</SectionHead>

      <Summary />
      <Education />
      <Work />
      <Volunteering />
    </SectionContainer>
  );
};
export default AboutMe;
