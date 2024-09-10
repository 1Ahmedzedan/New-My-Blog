import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/admin">
      <Routes>
        <Route path="/" element={<div>Home</div>}/>
        <Route path="/login" element={<div>login</div>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
