import { Button, Col, Container, Row, Form } from "react-bootstrap";
import StaticRadioCard from "./StaticRadioCard";

const HeroSection = function () {
  return (
    <Container fluid>
      <Row className="d-sm-none d-md-block">
        <Col xs={12} className="my-3">
          <Row className="d-flex justify-content-center align-content-center">
            <Col xs={4} className="justify-content-center align-content-center">
              <div className="text-center">
                <a className="text-white text-decoration-none">
                  <i className="bi bi-shuffle p-3"></i>
                </a>
                <a className="text-white text-decoration-none">
                  <i className="bi bi-skip-backward-fill p-3"></i>
                </a>
                <a className="text-white text-decoration-none">
                  <i className="bi bi-play-fill p-3"></i>
                </a>
                <a className="text-white text-decoration-none">
                  <i className="bi bi-skip-forward-fill p-3"></i>
                </a>
                <a className="text-white text-decoration-none">
                  <i className="bi bi-repeat p-3"></i>
                </a>
              </div>
            </Col>
            <Col xs={4} className="justify-content-center align-content-center">
              <div className="text-center">
                <img src="../../public/apple.svg"></img>
              </div>
            </Col>
            <Col xs={4} className="justify-content-center align-content-center">
              <div className="d-flex align-items-center">
                <i className="bi bi-volume-up-fill pe-2 text-white"></i>
                <Form.Range className="w-50 flex-grow-1" />
                <Button variant="danger ms-1">
                  <i className="bi bi-person-fill pe-2"></i>
                  Accedi
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <h2 className="mt-3 fw-bold text-white">Novità</h2>
      <hr className="text-white" />
      <Row className="flex-nowrap overflow-x-auto pb-3">
        <Col xs={12} sm={6} md={4} className="d-flex">
          <StaticRadioCard
            text="Rilassati, al resto pensiamo a noi. Ascolta Apple Music Chill"
            img="../../public/1a.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="d-flex">
          <StaticRadioCard
            text="Ecco la nuova casa della musica latina"
            img="../../public/1b.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="d-flex">
          <StaticRadioCard
            text="Benvenuto nel club! Ascolta Apple Music Club"
            img="../../public/1c.png"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
