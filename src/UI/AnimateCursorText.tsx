import styled, { keyframes } from "styled-components";

const cursor = keyframes`
50%{
    border-color: transparent;
}
`;

const typing = keyframes`
0%{
    width: 0;
}
25%{
    width: 25%;
}
50%{
    width: 50%;
}
75%{
    width: 75%;
}
100%{
    width: 100%;
}
`;

const AnimateCursorText = styled.p`
  font-size: 40px;
  color: #51ffa9;
  font-family: "Dela Gothic One", sans-serif;
  border-right: 2px solid white;
  letter-spacing: 5px;
  white-space: nowrap;
  overflow: hidden;

  animation: ${typing} 5s steps(21), ${cursor} 0.4s step-end infinite alternate;
`;

export default AnimateCursorText;
