import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function MyNavbar() {
  return (
    <Navbar expand="md" bg="dark" data-bs-theme="dark">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbar-nav">
          <span
            className="d-flex flex-column justify-content-around"
            style={{ width: "30px", height: "25px" }}
          >
            <span
              style={{
                backgroundColor: "#FA586A",
                height: "2px",
                width: "100%",
              }}
            ></span>
            <span
              style={{
                backgroundColor: "#FA586A",
                height: "2px",
                width: "100%",
              }}
            ></span>
          </span>
        </Navbar.Toggle>
        <Navbar.Brand href="/">
          <img src="../../public/music.svg"></img>
        </Navbar.Brand>
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
