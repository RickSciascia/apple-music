import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Brand href="#home">AppleMusic</Navbar.Brand>
        <Nav.Link className="text-danger fw-semibold" href="/">
          Accedi
        </Nav.Link>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto d-md-none">
            {/* d-md-none serve per non far comparire in alto poi i link che dovranno andare nel aside */}
            <Form className="mt-3">
              <Form.Control type="searchbox" placeholder="Cerca" />
            </Form>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/">Novità</Nav.Link>
            <Nav.Link href="/">Radio</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
