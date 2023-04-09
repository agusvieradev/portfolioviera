import logo from "../../assets/images/avDevLogo.png";


const Home = () => {
  const fullName = "Agustin Viera";
  const career = "Front End Developer";
  return (
    <div className="containerHome">
      <div className="containerPresentation">
        <div className="ContainerTecnologies">
          <h1 className="welcomeHi">Hi! I'm Agustin Viera {"</>"}</h1>
        </div>
        <div className="containerLogoAndText">

          <img src={logo} />
        </div>
      </div>
    </div>
  );
};

export default Home;
