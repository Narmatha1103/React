import "./App.css";
import Header from "./Header";
import Footer from "./Components/Footer";
import Home from "./Components/Homepage";
import "bootstrap/dist/css/bootstrap.min.css";
import Loginpage from "./Components/Loginpage";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
      <h2 className="App">
        <div className="outer">
          <div className="inner">
            <Loginpage />
          </div>
        </div>
      </h2>
    </div>
  );
}

export default App;
