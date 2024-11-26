import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;

  & > input,
  textarea {
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-weight: 600;
    background-color: #1b2b2be7;
    resize: none;
    color: whitesmoke;
    transition: all 300ms linear;
  }

  & > input:focus,
  textarea:focus {
    box-shadow: 0 0 5px 0.5px white;
  }

  & > button {
    width: 100%;
    padding: 10px;
    font-size: 24px;
    font-weight: bold;
    background-color: #2db872;
    color: white;
    transition: all 500ms linear;

    &:hover {
      background-color: #07f980;
    }
  }

  & > * {
    border-radius: 5px;
  }
`;

export default Form;
