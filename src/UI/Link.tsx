import styled, { keyframes } from "styled-components";

const flipText = keyframes`
  0%{
    transform: translateY(-10px);
  }
  20%{
    transform: translateY(-20px);
  }
  40%{
    transform: translateY(20px);
  }  
  60%{
    transform: translateY(10px);
  }
  80%{
    transform: translateY(5px);
  }
  100%{
    transform: translateY(0px);
    color: #51FFA9;
  }
`;

interface LinkProps {
  active?: boolean;
}

const Link = styled.a<LinkProps>`
  position: relative;
  width: fit-content;
  cursor: pointer;

  height: 20px;
  overflow: hidden;

  color: ${(props) => (props.active ? "#51FFA9" : "white")};


  & > span {
    display: block;
    cursor: pointer;
  }

  &:hover {
    span {
      animation: ${flipText} 0.2s linear 0s 1 alternate both;
    }
  }
`;
export default Link;
