import { SiSitepoint } from "react-icons/si";
import styled from "styled-components";

const Summary = () => {
  const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    & > .skills {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      justify-items: center;
      padding: 0 30px;
      row-gap: 30px;
    }
  `;

  const Title = styled.p`
    font-size: 22px;
    font-weight: bold;
    /* border-bottom: #51ffa9 solid 3px; */
    width: fit-content;
    text-transform: uppercase;

    display: flex;
    align-items: center;
    gap: 20px;

    & > svg {
      color: #51ffa9;
    }
  `;

  const Content = styled.div`
    font-size: 18px;
    padding-left: 36px;
  `;
  return (
    <Container>
      <Title>
        <SiSitepoint />
        SUMMARY
      </Title>
      <Content>
        Graduated with honors from the Faculty of Computers and Informatics at
        Suez Canal University in 2024.FrontEnd Web Development Engineer with
        extensive experience in competitive programming, highlighted by
        achievements as a 1-time ECPC Finalist. Possesses a robust background in
        various programming languages and frameworks, including React JS and
        Next JS.
      </Content>
    </Container>
  );
};
export default Summary;
