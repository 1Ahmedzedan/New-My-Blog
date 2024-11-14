import styled from "styled-components";

interface ProgressProps {
  percentage: number;
}

interface ComponentProps {
  title: string;
  percentage: number;
}

const SkillCard = ({ title, percentage }: ComponentProps) => {
  const Skill = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    width: 200px;

    & > span {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      text-transform: capitalize;
    }
  `;
  const Progress = styled.div<ProgressProps>`
    background: conic-gradient(
      transparent ${(props) => 100 - props.percentage}%,
      #28de83 0
    );
    width: 150px;
    height: 150px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: white solid 3px;
    box-shadow: 0 0 20px 3px black;
    position: relative;
    & > div {
      background: #171c22;
      width: 75%;
      height: 75%;
      border: white solid 3px;
      box-shadow: inset 0 0 20px 3px black;

      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 24px;
      font-weight: bold;
    }
  `;

  return (
    <Skill>
      <Progress percentage={percentage}>
        <div>{percentage}%</div>
      </Progress>
      <span>{title}</span>
    </Skill>
  );
};
export default SkillCard;
