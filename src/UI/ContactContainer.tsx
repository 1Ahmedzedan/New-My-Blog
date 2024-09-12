import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const ContactContainer: React.FC<Props> = ({ children }) => {
  const Container = styled.div`
    width: 75%;
    height: fit-content;

    display: flex;
    flex-direction: column;
    gap: 100px;
  `;
  return <Container>{children}</Container>;
};
export default ContactContainer;
