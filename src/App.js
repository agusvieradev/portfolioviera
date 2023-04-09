import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import NavBar from "./components/navbar/NavBar.jsx";
import Home from "./components/home/Home.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import ContactMe from "./components/form/ContactMe.jsx";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="Boxes">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>

    </div>
  );
};

export default App;
