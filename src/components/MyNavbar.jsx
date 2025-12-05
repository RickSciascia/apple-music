import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { InputGroup } from "react-bootstrap";

function MyNavbar() {
  return (
    <>
      <Navbar expand="md" bg="dark" data-bs-theme="dark" className="d-md-none">
        {/* d-md-none serve per non far comparire in alto poi i link che dovranno andare nel aside */}
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar-nav" className="border-0">
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
            <img src="../../public/music.svg" />
          </Navbar.Brand>
          <Nav.Link className="text-danger fw-semibold" href="/">
            Accedi
          </Nav.Link>
          <Navbar.Collapse id="navbar-nav">
            <Nav className="me-auto d-md-none">
              <InputGroup className="mb-3 p-3 text-white">
                <InputGroup.Text
                  id="basic-addon1"
                  className="bg-dark border-end-0"
                >
                  <i className="bi bi-search text-danger"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Ricerca"
                  aria-describedby="basic-addon1"
                  className="bg-dark text-white border-start-0 p-0"
                />
              </InputGroup>
              <Nav.Link href="/">
                <i className="bi bi-house-door pe-3"></i>Home
              </Nav.Link>
              <Nav.Link href="/">
                <i className="bi bi-grid pe-3"></i>Novità
              </Nav.Link>
              <Nav.Link href="/">
                <i className="bi bi-broadcast pe-3"></i>Radio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* SIDEBAR */}
      <Nav className="col-md-2 d-none d-md-flex flex-column bg-dark mt-3 vh-100 w-100">
        <div className="ps-3">
          <Navbar.Brand href="/" className="text-center">
            <img src="../../public/music.svg" />
          </Navbar.Brand>
        </div>
        <InputGroup className="mb-3 p-3 text-white">
          <InputGroup.Text id="basic-addon1" className="bg-dark border-end-0">
            <i className="bi bi-search text-danger"></i>
          </InputGroup.Text>
          <Form.Control
            placeholder="Ricerca"
            aria-describedby="basic-addon1"
            className="bg-dark text-white border-start-0 p-0"
          />
        </InputGroup>
        <Nav.Link className="text-white" href="/">
          <i className="bi bi-house-door pe-3"></i>
          Home
        </Nav.Link>
        <Nav.Link active className="text-white" href="/">
          <i className="bi bi-grid pe-3"></i>
          Novità
        </Nav.Link>
        <Nav.Link className="text-white" href="/">
          <i className="bi bi-broadcast pe-3"></i>
          Radio
        </Nav.Link>
      </Nav>
    </>
  );
}

export default MyNavbar;
