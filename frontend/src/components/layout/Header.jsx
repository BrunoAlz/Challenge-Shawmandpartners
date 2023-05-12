import { Container, Navbar } from "react-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar className="shadow" bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Brand className="fs-3 p-0">
             GITHUB USERS API
            </Navbar.Brand>          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
