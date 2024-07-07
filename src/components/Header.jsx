import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Navbar, Nav, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../resources/images/Logo.png";

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={Logo}
              height="60"
              className="d-inline-block align-top"
              alt="MusicFest"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link as={Link} to="/" className="mx-2">
                Acerca de
              </Nav.Link>
              <Nav.Link as={Link} to="/concerts-list" className="mx-2">
                Conciertos
              </Nav.Link>
            </Nav>
            <Form className="d-flex mx-auto" onSubmit={handleSearch}>
              {/*Búsqueda de Conciertos*/}
              <Form.Control
                type="search"
                placeholder="Buscar conciertos"
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button variant="dark" type="submit">
                <i className="bi bi-search"></i>
              </Button>
            </Form>
            <Nav>
              <Nav.Link as={Link} to="/login">
                <i
                  className="bi bi-person-circle"
                  style={{ fontSize: "1.5rem" }}
                ></i>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
