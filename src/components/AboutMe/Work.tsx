import { SiSitepoint } from "react-icons/si";
import styled from "styled-components";

const Work = () => {
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

    @media (max-width: 900px) {
      font-size: 20px;
    }

    & > svg {
      color: #51ffa9;
    }
  `;

  const Content = styled.div`
    font-size: 18px;
    padding-left: 36px;

    & > div .title {
      font-size: 26px;
      color: #51ffa9;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 20px;

      @media (max-width: 900px) {
        font-size: 20px;
      }

      & > span {
        color: white;
        font-size: 20px;
        font-weight: 300;

        @media (max-width: 900px) {
          font-size: 16px;
        }
      }
    }

    & > div .subTitle {
      display: flex;
      gap: 60px;

      @media (max-width: 900px) {
        font-size: 16px;
        flex-direction: column;
        gap: 0;
      }

      & > .major {
        font-weight: bold;
      }

      & > .dates {
        color: #51ffa9;
        @media (max-width: 900px) {
          align-self: flex-end;
        }
      }
    }
  `;

  const List = styled.ul`
    list-style-type: circle;
    padding: 18px;
    & > li {
      & > span,
      p span {
        color: #51ffa9;
        font-weight: bold;
      }

      & > a {
        color: #51ffa9;
        transition: all 300ms linear;
        &:hover {
          color: white;
        }
      }
    }
  `;

  return (
    <Container>
      <Title>
        <SiSitepoint />
        Work
      </Title>
      <Content>
        <div>
          <p className="title">
            Coach Academy <span>-Part Time</span>
          </p>
          <div className="subTitle">
            <p className="major"> Problem Solving Instructor</p>
            <p className="dates"> Aug 2024 - Present</p>
          </div>
          <List>
            <li>
              Sessions explain fundamental programming concepts and problem
              solving topics .
            </li>
            <li>
              Coached students in mastering fundamental programming concepts,
              including algorithms and data structures .
            </li>
          </List>
        </div>
      </Content>
    </Container>
  );
};
export default Work;
