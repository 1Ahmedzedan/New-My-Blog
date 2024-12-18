import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneSquareAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdDoubleArrow } from "react-icons/md";
import styled from "styled-components";
import Img from "../assets/footerImg.gif";

interface SocialIConProps {
  backgroundColor: string;
}

const Footer = () => {
  const Container = styled.div`
    background: #1b2b2b;
    padding: 50px 50px;
    color: white;
    width: 100%;
    z-index: 2;

    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-top: #51ffa9 solid 2px;

    @media (max-width: 1200px) {
      flex-direction: column;
      align-items: center;

      gap: 40px;

      & > div {
        width: 100% !important;
        align-items: center;
      }
    }

    & > div {
      width: 22%;
    }
  `;

  const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;

    & > .name {
      font-size: 32px;
      font-weight: bold;
      letter-spacing: 3px;

      @media (max-width: 450px) {
        font-size: 24px;
      }
    }

    & > .socialIcons {
      display: flex;
      gap: 20px;
    }

    & > .expersion {
      color: #51ffa9;
      text-align: start;

      @media (max-width: 1200px) {
        text-align: center;
      }

      & > span {
        color: white;
        font-size: 20px;
        letter-spacing: 1px;
      }
    }
  `;

  const SocailIcon = styled.a<SocialIConProps>`
    font-size: 28px;
    color: white;
    background-color: #2e2e2e;
    line-height: 0;
    display: flex;
    width: fit-content;
    padding: 8px;
    border-radius: 10px;
    transition: all 300ms linear;

    &:hover {
      background-color: ${(props) => props.backgroundColor};
    }
  `;

  const Container2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 1200px) {
      width: 100%;
      gap: 20px;
    }

    & > a {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 20px;
      border-bottom: gray solid 1px;
      padding-bottom: 10px;
      transition: all 200ms linear;

      @media (max-width: 1200px) {
        width: 100%;
      }

      & > svg {
        color: #51ffa9;
      }

      &:hover {
        padding-left: 15px;
        color: #51ffa9;
      }
    }
  `;

  const Container3 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    @media (max-width: 1200px) {
      gap: 20px;
    }
    & > .location,
    .phones {
      display: flex;
      align-items: center;
      gap: 20px;
      font-size: 20px;

      @media (max-width: 1200px) {
        flex-direction: column;
        gap: 5px;
      }

      & > svg {
        font-size: 28px;
        color: #51ffa9;
      }
    }
  `;

  const Image = styled.img `
    width: 20%;
    height: 100%;

    @media (max-width: 1200px) {
      width: 60%;
      
    }

    @media (max-width: 600px) {
      width: 100%;
    }
  ` ; 
  return (
    <Container id="contact">
      <Container1>
        <p className="name">Ahmed Zedan</p>
        <div className="socialIcons">
          <SocailIcon
            backgroundColor="#0866ff"
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100013486804562"
          >
            <FaFacebookF />
          </SocailIcon>
          <SocailIcon
            backgroundColor="#d43d94"
            target="_blank"
            href="https://www.instagram.com/ahmed_zedan111/"
          >
            <FaInstagram />
          </SocailIcon>
          <SocailIcon
            backgroundColor="#39e95c"
            target="_blank"
            href="https://wa.me/01556188801"
          >
            <FaWhatsapp />
          </SocailIcon>
          <SocailIcon
            backgroundColor="#0072b2"
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-zedan-04589624a/"
          >
            <FaLinkedinIn />
          </SocailIcon>
        </div>
        <p className="expersion">
          <span>''</span>Unlocking innovation through stellar front-end
          development. Ready to elevate your team's success.<span>''</span>
        </p>
      </Container1>
      <Container2>
        <a href="#intro">
          <MdDoubleArrow />
          Intro
        </a>
        <a href="#skills">
          <MdDoubleArrow />
          Skills
        </a>
        <a href="#projects">
          <MdDoubleArrow />
          Projects
        </a>
        <a href="#contact">
          <MdDoubleArrow />
          Contact Me
        </a>
      </Container2>
      <Container3>
        <p className="location">
          <FaLocationDot />
          <span>Egypt, Portsaid</span>
        </p>
        <div className="phones">
          <FaPhoneSquareAlt />
          <div>
            <p>01556188801</p>
            <p>01556188801</p>
          </div>
        </div>
      </Container3>

      <Image
        src={Img}
        alt="img"
        draggable={false}
      />
    </Container>
  );
};
export default Footer;
