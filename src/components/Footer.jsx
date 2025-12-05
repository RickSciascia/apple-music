import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = function () {
  return (
    <Container className="text-white mx-1">
      <Row>
        <Col xs={12} className="py-3 my-3">
          <Nav.Link className="d-inline me-1 pe-3 border-end border-1 border-secondary fw-semibold">
            Italia
          </Nav.Link>
          <Nav.Link className="d-inline ps-3">English (UK)</Nav.Link>
          <p className="mt-1">
            Copyright © 2025{" "}
            <Nav.Link
              className="d-inline fw-semibold"
              href="https://www.apple.com"
            >
              Apple Inc.
            </Nav.Link>{" "}
            Tutti i diritti riservati.
          </p>
          <Nav.Link className="d-inline pe-3 border-end border-1 border-secondary fw-semibold">
            Condizioni dei servizi internet
          </Nav.Link>
          <Nav.Link className="d-inline px-3 border-end border-1 border-secondary fw-semibold">
            Apple Music e privacy
          </Nav.Link>
          <Nav.Link className="d-inline px-3 border-end border-1 border-secondary fw-semibold">
            Avviso sui cookie
          </Nav.Link>
          <Nav.Link className="d-inline px-3 border-end border-1 border-secondary fw-semibold">
            Supporto
          </Nav.Link>
          <Nav.Link className="d-inline px-3  fw-semibold">Feedback</Nav.Link>
        </Col>
      </Row>
    </Container>
  );
};
export default Footer;
