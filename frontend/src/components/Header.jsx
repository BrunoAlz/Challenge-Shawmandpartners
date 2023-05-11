import { Container, Navbar } from "react-bootstrap";


const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container fluid>
            <Navbar.Brand>
              <i className="fas fa-basket-shopping"></i> GITHUB USERS
            </Navbar.Brand>          
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
