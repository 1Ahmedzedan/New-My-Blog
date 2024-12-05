import styled from "styled-components";
import SectionContainer from "../UI/SectionContainer";
import SectionHead from "../UI/SectionHead";
import ContactForm from "./ContactForm";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 40px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `;
  const SocialMediaIcons = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    @media (max-width: 600px) {
      flex-direction: row;
      gap: 0;
      justify-content: space-between;
    }

    & > a {
      background-color: #2db872;
      font-size: 40px;
      padding: 10px;
      border-radius: 10px;
      transition: all 500ms linear;
      color: white;

      @media (max-width: 450px) {
        font-size: 30px;
        padding: 5px;
      }

      &:hover {
        background-color: #07f980;
      }
    }
  `;
  return (
    <SectionContainer id="contact">
      <SectionHead>Contact</SectionHead>
      <Container>
        <SocialMediaIcons>
          <a
            target="_blank"
            href="https://www.facebook.com/profile.php?id=100013486804562"
          >
            <FaFacebookF />
          </a>
          <a target="_blank" href="https://www.instagram.com/ahmed_zedan111/">
            <FaInstagram />
          </a>
          <a target="_blank" href="https://wa.me/01556188801">
            <FaWhatsapp />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ahmed-zedan-04589624a/"
          >
            <FaLinkedinIn />
          </a>
          <a target="_blank" href="https://github.com/1Ahmedzedan">
            <FaGithub />
          </a>
        </SocialMediaIcons>
        <ContactForm />
      </Container>
    </SectionContainer>
  );
};
export default Contact;
