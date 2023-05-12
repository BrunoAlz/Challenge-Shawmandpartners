import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <Navbar className="shadow" bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
          <Navbar.Brand className="fs-3 p-0">
            <Link className="text-decoration-none fw-bold text-dark">GITHUB USERS API</Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
