import styled from "styled-components";
import myPhoto from "../assets/myPhoto.png";
import AnimateCursorText from "../UI/AnimateCursorText";
import { SiSitepoint } from "react-icons/si";
import Linkedin from "../assets/linkedinLogo.png";
import Gmail from "../assets/GmailLogo.png";
import WhatsApp from "../assets/whatsAppIcon.png";
import Github from "../assets/githubIcons.png";
import Facebook from "../assets/facebookIcon.png";

const Intro = () => {
  const Container = styled.div`
    padding: 100px 0px;
    position: relative;
    display: flex;
    gap: 60px;
  `;

  const ImageContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, #1b2d2c 0%, #171e23 20%, #171e23 100%);

    width: 350px;
    height: 350px;
    border-radius: 50%;
  `;

  const MyImage = styled.img`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  `;

  const Text = styled.p`
    font-size: 24px;
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;

    & > svg {
      color: #51ffa9;
    }
  `;

  const SocialMedia = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 40px;

    align-self: center;

    & > a {
      width: fit-content;
      transition: all 300ms linear;
    }

    & > a:hover {
      scale: 130%;
      opacity: 0.5;
    }
  `;

  const SocialIcon = styled.img`
    width: 60px;
    height: 60px;
  `;

  return (
    <Container id="intro">
      <ImageContainer>
        <MyImage src={myPhoto} alt="myPhoto" />
      </ImageContainer>
      <Content>
        <AnimateCursorText>Welcome, I am Ahmed Zedan</AnimateCursorText>
        <div>
          <Text>
            <SiSitepoint />
            Senior CS Student In FCI
          </Text>
          <Text>
            <SiSitepoint />
            Software Engineer
          </Text>
          <Text>
            <SiSitepoint />
            Front-End Devloper
          </Text>
          <Text>
            <SiSitepoint />
            Competitive Programmer
          </Text>
        </div>
        <SocialMedia>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-zedan-04589624a/"
          >
            <SocialIcon src={Linkedin} alt="linkedin" />
          </a>
          <a target="_blank" href="mailto:a7mdzedan199@gmail.com">
            <SocialIcon src={Gmail} alt="gmail" />
          </a>
          <a target="_blank" href="https://wa.me/01556188801">
            <SocialIcon src={WhatsApp} alt="whatsApp" />
          </a>
          <a target="_blank" href="https://github.com/1Ahmedzedan">
            <SocialIcon src={Github} alt="github" />
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100013486804562"
          >
            <SocialIcon src={Facebook} alt="facebook" />
          </a>
        </SocialMedia>
      </Content>
    </Container>
  );
};
export default Intro;
