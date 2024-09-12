import styled from "styled-components";
import Link from "../UI/Link";

const NavBar = () => {
  const Container = styled.div`
    position: fixed;
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

  return (
    <Container>
      <Name>Ahmed Zedan</Name>
      <NavBarContainer>
        <Link>
          <span>Intro</span>
        </Link>
        <Link>
          <span>Eduction</span>
        </Link>
        <Link>
          <span>Skills</span>
        </Link>
        <Link>
          <span>Projects</span>
        </Link>
        <Link>
          <span>Awards</span>
        </Link>
        <Link>
          <span>Contact Me</span>
        </Link>
      </NavBarContainer>
    </Container>
  );
};
export default NavBar;
