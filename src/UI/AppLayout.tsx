import React from "react";
import styled, { keyframes } from "styled-components";
import element1 from "../assets/element1.png";
import element2 from "../assets/element2.png";

interface Props {
  children: React.ReactNode;
}

const AppLayout: React.FC<Props> = ({ children }) => {
  const rotate = keyframes`
        0% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(90deg);
        }
        75% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-90deg);
        }
    `;
  const Container = styled.div`
    position: relative;
    background: #171c22;
    min-height: 100vh;
    padding: 100px 30px;

    display: flex;
    justify-content: flex-end;

    @media (max-width: 900px) {
      justify-content: flex-start;
      padding: 30px;
      flex-direction: column;
    }

    & > img {
      position: fixed;
      animation: ${rotate} 8s linear 0s infinite alternate both;
    }
    & > img:nth-child(1) {
      top: 5%;
      left: 5%;
    }
    & > img:nth-child(2) {
      top: 10%;
      left: 15%;
      @media (max-width: 900px) {
        top: 20%;
      }
    }
    & > img:nth-child(3) {
      top: 5%;
      left: 30%;
    }
    & > img:nth-child(4) {
      top: 10%;
      left: 45%;

      @media (max-width: 900px) {
        top: 20%;
      }
    }
    & > img:nth-child(5) {
      top: 5%;
      left: 60%;
    }
    & > img:nth-child(6) {
      top: 10%;
      left: 75%;

      @media (max-width: 900px) {
        top: 20%;
      }
    }
    & > img:nth-child(7) {
      top: 5%;
      left: 90%;
    }

    & > img:nth-child(8) {
      top: 40%;
      left: 5%;
    }
    & > img:nth-child(9) {
      top: 45%;
      left: 15%;

      @media (max-width: 900px) {
        top: 55%;
      }
    }
    & > img:nth-child(10) {
      top: 40%;
      left: 30%;
    }
    & > img:nth-child(11) {
      top: 45%;
      left: 45%;

      @media (max-width: 900px) {
        top: 55%;
      }
    }
    & > img:nth-child(12) {
      top: 40%;
      left: 60%;
    }
    & > img:nth-child(13) {
      top: 45%;
      left: 75%;

      @media (max-width: 900px) {
        top: 55%;
      }
    }
    & > img:nth-child(14) {
      top: 40%;
      left: 90%;
    }

    & > img:nth-child(15) {
      top: 80%;
      left: 5%;

      @media (max-width: 900px) {
        top: 75%;
      }
    }
    & > img:nth-child(16) {
      top: 85%;
      left: 15%;
    }
    & > img:nth-child(17) {
      top: 80%;
      left: 30%;

      @media (max-width: 900px) {
        top: 75%;
      }
    }
    & > img:nth-child(18) {
      top: 85%;
      left: 45%;
    }
    & > img:nth-child(19) {
      top: 80%;
      left: 60%;

      @media (max-width: 900px) {
        top: 75%;
      }
    }
    & > img:nth-child(20) {
      top: 85%;
      left: 75%;
    }
    & > img:nth-child(21) {
      top: 80%;
      left: 90%;

      @media (max-width: 900px) {
        top: 75%;
      }
    }
  `;

  const Image = styled.img`
    opacity: 0.1;
  `;
  return (
    <Container>
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      <Image src={element2} alt="icon" draggable="false" />
      <Image src={element1} alt="icon" draggable="false" />
      {children}
    </Container>
  );
};
export default AppLayout;
