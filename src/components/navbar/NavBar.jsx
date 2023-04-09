import { useState, useEffect } from "react";
import logo from "../../assets/images/navBarLogo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home">
            <img className="navbar-brand logoNavBar" src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  activeLink === "home" ? "active nav-link" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("home")}
              >
                {"Home"}
              </Nav.Link>
              <Nav.Link
                className={
                  activeLink === "aboutMe" ? "active nav-link" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("aboutMe")}
                href="#aboutMe"
              >
                {"About me"}
              </Nav.Link>
              <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#portfolio">
                  {"Choose your figther"}
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">{"Vue"}</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  {"React"}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  {"Flutter"}
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link
                className={
                  activeLink === "contactMe" ? "active nav-link" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("contactMe")}
                href="#contactMe"
              >
                {"Contact me"}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    /* <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <img className="navbar-brand logoNavBar" src={logo} alt="" />

        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className={activeLink === "home" ? "active nav-link" : "nav-link"}
                onClick={() => onUpdateActiveLink("home")}
                aria-current="page"
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "portfolio" ? "active nav-link" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("portfolio")}
                href="#portfolio"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className={
                  activeLink === "contactMe" ? "active nav-link" : "nav-link"
                }
                onClick={() => onUpdateActiveLink("contactMe")}
                href="#contactMe"
              >
                Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
  );
};

export default NavBar;
