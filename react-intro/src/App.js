import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Project from "./Components/Project";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contect";

function App() {
  return (
    <div className="App">
      <Nav />
      <About />
      <Project />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
