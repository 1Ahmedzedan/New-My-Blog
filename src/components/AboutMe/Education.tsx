import { SiSitepoint } from "react-icons/si";
import styled from "styled-components";

const Education = () => {
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

    & > .title {
      font-size: 26px;
      color: #51ffa9;
      font-weight: bold;

      @media (max-width: 900px) {
        font-size: 20px;
      }
    }

    & > .subTitle {
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
        font-size: 16px;
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
        EDUCATION
      </Title>
      <Content>
        <p className="title">Suez Canal University</p>
        <div className="subTitle">
          <p className="major">Bachelor of Computer Science and Informatics</p>
          <p className="dates">Sep 2020 — July 2024</p>
        </div>
        <List>
          <li>
            <p>
              Grade : <span>Very Good with Honor</span>
            </p>
          </li>
          <li>
            Achieved an <span>'Excellent'</span> grade for the Graduation
            Project -{" "}
            <a
              target="_blank"
              href="https://github.com/1Ahmedzedan/Cloud-Tracker-Frontend"
            >
              Cloud Tracker
            </a>
          </li>
        </List>
      </Content>
    </Container>
  );
};
export default Education;
