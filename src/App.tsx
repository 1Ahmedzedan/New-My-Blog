import Intro from "./components/Intro";
import NavBar from "./components/NavBar";
import AppLayout from "./UI/AppLayout";
import ContactContainer from "./UI/ContactContainer";

function App() {
  return (
    <AppLayout>
      <NavBar />
      <ContactContainer>
        <Intro />
      </ContactContainer>
    </AppLayout>
  );
}

export default App;
