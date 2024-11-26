import styled from "styled-components";
// import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AppLayout from "./UI/AppLayout";
import ContactContainer from "./UI/ContactContainer";
import Contact from "./components/Contact";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;
  return (
    <Container>
      <AppLayout>
        <NavBar />

        <ContactContainer>
          <Intro />
          <Skills />
          <Projects />
          <Contact />
        </ContactContainer>
      </AppLayout>
      {/* <Footer /> */}
      <ToastContainer />
    </Container>
  );
}

export default App;
