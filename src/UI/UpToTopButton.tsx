import { useEffect, useState } from "react";
import { IoMdArrowRoundUp } from "react-icons/io";
import styled, { keyframes } from "styled-components";

interface Props {
  show: boolean;
}

const UpToTopButton = () => {
  const upDown = keyframes`
        0%{
            bottom: 10px;
        }
        50%{
            bottom: 30px;
        }
        75%{
            bottom: 10px;
        }
        100%{
            bottom: 30px;
        }
    `;
  const Button = styled.button<Props>`
    display: ${
      (props)=>props.show?"block": "none"
    };
    position: fixed;
    width: fit-content;
    bottom: 10px;
    right: 10px;
    z-index: 100;
    font-size: 26px;
    padding: 5px;
    border-radius: 50%;
    background-color: #2db872;
    /* transition: all 500ms linear; */
    animation: ${upDown} 2s linear 0s infinite alternate both;

    &:hover {
      background-color: #07f980;
    }
  `;

  const [show, setShow] = useState<boolean>(false);

  useEffect(function () {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setShow(scrollPosition > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      show={show}
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
        })
      }
    >
      <IoMdArrowRoundUp />
    </Button>
  );
};
export default UpToTopButton;
