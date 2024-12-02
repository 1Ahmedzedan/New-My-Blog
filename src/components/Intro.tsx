import styled from "styled-components";
import myPhoto from "../assets/myPhoto.png";
import AnimateCursorText from "../UI/AnimateCursorText";
import { SiSitepoint } from "react-icons/si";
import Linkedin from "../assets/linkedinLogo.png";
import Gmail from "../assets/GmailLogo.png";
import WhatsApp from "../assets/whatsAppIcon.png";
import Github from "../assets/githubIcons.png";
import Facebook from "../assets/facebookIcon.png";
import { FaFileDownload } from "react-icons/fa";

const Intro = () => {
  const Container = styled.div`
    padding: 100px 0px;
    position: relative;
    display: flex;
    gap: 60px;

    @media (max-width: 1300px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 40px;
    }
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
    align-self: center;

    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    & > div .icon {
      width: fit-content;
      transition: all 300ms linear;
    }

    & > div .icon:hover {
      scale: 130%;
      opacity: 0.5;
    }

    & > div {
      display: flex;
      align-items: center;
      justify-items: center;
      gap: 40px;
    }
  `;

  const SocialIcon = styled.img`
    width: 60px;
    height: 60px;
  `;

  const DownloadBtn = styled.a`
    background-color: #2db872;
    transition: all 500ms linear;
    color: white;
    width: fit-content;
    font-size: 20px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 20px;
    border-radius: 25px;
    &:hover {
      background-color: #07f980;
    }
  `;

  return (
    <Container id="intro">
      <ImageContainer>
        <MyImage src={myPhoto} alt="myPhoto" />
      </ImageContainer>
      <Content>
        <div>
          <div style={{ width: "fit-content" }}>
            <AnimateCursorText duration={2} cursor={false} delay={0}>
              Welcome,
            </AnimateCursorText>
          </div>
          <AnimateCursorText duration={3} cursor={true} delay={2}>
            I am Ahmed Zedan
          </AnimateCursorText>
        </div>
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
          <div>
            <a
              className="icon"
              target="_blank"
              href="https://www.linkedin.com/in/ahmed-zedan-04589624a/"
            >
              <SocialIcon src={Linkedin} alt="linkedin" />
            </a>
            <a
              className="icon"
              target="_blank"
              href="mailto:a7mdzedan199@gmail.com"
            >
              <SocialIcon src={Gmail} alt="gmail" />
            </a>
            <a
              className="icon"
              target="_blank"
              href="https://wa.me/01556188801"
            >
              <SocialIcon src={WhatsApp} alt="whatsApp" />
            </a>
            <a
              className="icon"
              target="_blank"
              href="https://github.com/1Ahmedzedan"
            >
              <SocialIcon src={Github} alt="github" />
            </a>
            <a
              className="icon"
              target="_blank"
              href="https://www.facebook.com/profile.php?id=100013486804562"
            >
              <SocialIcon src={Facebook} alt="facebook" />
            </a>
          </div>
          <DownloadBtn
            target="_blank"
            href="https://drive.google.com/file/d/1C9sWRKXcImokfAd7QsRx0fQtu12kGwY6/view?usp=sharing"
          >
            Download Resume
            <FaFileDownload />
          </DownloadBtn>
        </SocialMedia>
      </Content>
    </Container>
  );
};
export default Intro;
