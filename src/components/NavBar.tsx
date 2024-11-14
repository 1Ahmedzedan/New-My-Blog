import styled from "styled-components";
import Link from "../UI/Link";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

// Move styled components outside the NavBar function
const Container = styled.div`
  position: fixed;
  top: 50px;
  left: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #51ffa9;
  font-family: "Dela Gothic One", sans-serif;
  letter-spacing: 2px;
  word-spacing: 5px;
`;

const NavBarContainer = styled.div`
  background: linear-gradient(
    180deg,
    #1b2d2cac 0%,
    #171e2389 20%,
    #171e238e 100%
  );
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px 100px 50px 30px;
  gap: 30px;
  font-size: 18px;
  color: #ffffff;
  border-radius: 25px;
`;

const NavBar = () => {
  const [activeLink, setActiveLink] = useLocalStorageState("activeLink", "intro");

  return (
    <Container>
      <Name>Ahmed Zedan</Name>
      <NavBarContainer>
        <Link
          active={activeLink === "intro"}
          href="#intro"
          onClick={() => setActiveLink("intro")}
        >
          <span>Intro</span>
        </Link>
        <Link
          active={activeLink === "skills"}
          href="#skills"
          onClick={() => setActiveLink("skills")}
        >
          <span>Skills</span>
        </Link>
        <Link
          active={activeLink === "projects"}
          href="#projects"
          onClick={() => setActiveLink("projects")}
        >
          <span>Projects</span>
        </Link>
        <Link
          active={activeLink === "awards"}
          href="#awards"
          onClick={() => setActiveLink("awards")}
        >
          <span>Awards</span>
        </Link>
        <Link
          active={activeLink === "contact"}
          href="#contact"
          onClick={() => setActiveLink("contact")}
        >
          <span>Contact Me</span>
        </Link>
      </NavBarContainer>
    </Container>
  );
};

export default NavBar;
