import Awards from "./components/Awards";
import Contact from "./components/Contact";
import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import AppLayout from "./UI/AppLayout";
import ContactContainer from "./UI/ContactContainer";

function App() {
  return (
    <AppLayout>
      
      <NavBar />

      <ContactContainer>
        <Intro />
        <Skills />
        <Projects />
        <Awards />
        <Contact />
      </ContactContainer>

    </AppLayout>
  );
}

export default App;
