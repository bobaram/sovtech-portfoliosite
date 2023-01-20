import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
function App() {
  const welcome = (
    <h1
      style={{
        color: "yellowgreen",
        fontSize: "60px",
        marginTop: "300px",
        marginLeft: "650px",
      }}
    >
      WELCOME
    </h1>
  );
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={welcome} />

        <Route path="/omen/home" element={<About />} />
        <Route path="/omen/projects" element={<Projects />} />
        <Route path="/omen/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
