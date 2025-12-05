import { Col, Container, Row } from "react-bootstrap";
import StaticRadioCard from "./StaticRadioCard";

const HeroSection = function () {
  return (
    <Container fluid>
      <h2 className="mt-3 fw-bold text-white">Novità</h2>
      <hr className="text-white" />
      <Row className="flex-nowrap overflow-x-auto pb-3">
        <Col xs={12} sm={6} md={4} className="min-h-100">
          <StaticRadioCard
            text="Rilassati, al resto pensiamo a noi. Ascolta Apple Music Chill"
            img="../../public/1a.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="min-h-100">
          <StaticRadioCard
            text="Ecco la nuova casa della musica latina"
            img="../../public/1b.png"
          />
        </Col>
        <Col xs={12} sm={6} md={4} className="min-h-100">
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
