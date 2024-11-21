import styled, { keyframes } from "styled-components";

interface AnimationTextProps {
  delay: number;
  cursor: boolean;
  duration: number;
}

const cursor = keyframes`
50%{
    border-color: transparent;
}
`;

const typing = keyframes`
0%{
    width: 0;
    border-right: 2px solid white;

}
25%{
    width: 25%;
    border-right: 2px solid white;

}
50%{
    width: 50%;
    border-right: 2px solid white;

}
75%{
    width: 75%;
    border-right: 2px solid white;

}
95%{
    width: 100%;
    border-right: 2px solid white;
}
100%{
    width: 100%;
    border-right: none;
}
`;

const typingWithCursor = keyframes`
0%{
    width: 0;
    border-right: 2px solid white;

}
25%{
    width: 25%;
    border-right: 2px solid white;

}
50%{
    width: 50%;
    border-right: 2px solid white;

}
75%{
    width: 75%;
    border-right: 2px solid white;

}
100%{
    width: 100%;
    border-right: 2px solid white;
}
`;

const AnimateCursorText = styled.p<AnimationTextProps>`
  font-size: 40px;
  color: #51ffa9;
  font-family: "Dela Gothic One", sans-serif;
  letter-spacing: 5px;
  white-space: nowrap;
  overflow: hidden;
  width: 0%;
  /* border-right: 2px solid white; */

  animation: ${(props) => (props.cursor ? typingWithCursor : typing)}
      ${(props) => props.duration}s steps(10) ${(props) => props.delay}s
      forwards,
    ${cursor} 0.4s step-end infinite alternate;
`;

export default AnimateCursorText;
