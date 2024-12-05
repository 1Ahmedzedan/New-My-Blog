import styled from "styled-components";
import Link from "../UI/Link";
import { HiViewList } from "react-icons/hi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
// import { useLocalStorageState } from "../hooks/useLocalStorageState";

interface NavBarProps {
  show: boolean;
}

const Container = styled.div`
  position: fixed;
  top: 20px;
  left: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media (max-width: 900px) {
    position: relative;
  }

  @media (max-width: 600px) {
    left: 5px;
  }
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #51ffa9;
  font-family: "Dela Gothic One", sans-serif;
  letter-spacing: 2px;
  word-spacing: 5px;

  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 20px;
  }

  & > .listBtn {
    font-size: 20px;
    background-color: #1b2b2b;
    color: white;
    padding: 5px;
    border-radius: 10px;
    border: #51ffa9 solid 2px;
    display: none;

    &:hover {
      box-shadow: 0 0 5px 0.5px white;
    }

    @media (max-width: 900px) {
      display: block;
    }
  }
`;

const NavBarContainer = styled.div<NavBarProps>`
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

  @media (max-width: 900px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0;
    background: #1b2b2b;
    z-index: 100;
    width: 100%;
    height: 150vh;
    justify-content: flex-start;
    padding: 50px;

    & > .close {
      display: block !important;
      align-self: flex-end;
      padding: 5px;
      font-size: 16px;
      font-weight: bold;
      border-radius: 10px;
    }
  }

  & > .close {
    display: none;
  }
`;

const NavBar = () => {
  // const [activeLink, setActiveLink] = useLocalStorageState(
  //   "activeLink",
  //   "intro"
  // );

  const [showNav, setShowNav] = useState<boolean>(false);

  return (
    <Container>
      <Name>
        <button onClick={() => setShowNav(true)} className="listBtn">
          <HiViewList />
        </button>
        Ahmed Zedan
      </Name>
      <NavBarContainer show={showNav}>
        <button onClick={() => setShowNav(false)} className="close">
          <IoCloseSharp />
        </button>
        <Link
          // active={activeLink === "intro"}
          href="#intro"
          onClick={() => setShowNav(false)}
        >
          <span>Intro</span>
        </Link>
        <Link
          // active={activeLink === "intro"}
          href="#aboutMe"
          onClick={() => setShowNav(false)}
        >
          <span>About Me</span>
        </Link>
        <Link
          // active={activeLink === "skills"}
          href="#skills"
          onClick={() => setShowNav(false)}
        >
          <span>Skills</span>
        </Link>
        <Link
          // active={activeLink === "projects"}
          href="#projects"
          onClick={() => setShowNav(false)}
        >
          <span>Projects</span>
        </Link>
        <Link
          // active={activeLink === "contact"}
          href="#contact"
          onClick={() => setShowNav(false)}
        >
          <span>Contact Me</span>
        </Link>
      </NavBarContainer>
    </Container>
  );
};

export default NavBar;
