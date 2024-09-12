import styled from "styled-components";
import myPhoto from "../assets/myPhoto.png";
import AnimateCursorText from "../UI/AnimateCursorText";

const Intro = () => {
  const Container = styled.div`
    padding: 60px 0px;
    position: relative;
    display: flex;
    gap: 60px;
  `;

  const ImageContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, #1b2d2c 0%, #171e23 20%, #171e23 100%);

    width: 350px;
    height: 350px;
    border-radius: 50%;
  `;

  const MyImage = styled.img`
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;

  const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px ; 
  `;

  const Text = styled.p`
    font-size: 22px;
    color: white;
  `;

  return (
    <Container id="intro">
      <ImageContainer>
        <MyImage src={myPhoto} alt="myPhoto" />
      </ImageContainer>
      <Content>
        <AnimateCursorText>Welcome, I am Ahmed Zedan</AnimateCursorText>
        <Text>Senior CS Student In FCI</Text>
        <Text>Software Engineer</Text>
        <Text>Competitive Programmer</Text>
      </Content>
    </Container>
  );
};
export default Intro;
