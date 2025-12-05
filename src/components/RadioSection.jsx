import { Container, Col, Row } from "react-bootstrap";
import SongCard from "./SongCard";

const RadioSection = function () {
  return (
    <Container fluid>
      <h3 className="mt-3 fw-bold text-white">Nuovi episodi radio &gt;</h3>
      <Row className="flex-nowrap overflow-x-auto pb-3">
        <Col xs={4} md={2} className="min-h-100">
          <SongCard img="../../public/2a.png" title="Prólogo con Abuelo" />
        </Col>
        <Col xs={4} md={2} className="min-h-100">
          <SongCard img="../../public/2b.png" title="The Wanderer" />
        </Col>
        <Col xs={4} md={2} className="min-h-100">
          <SongCard
            img="../../public/2c.png"
            title="Michael Bublé & Carly Pearce"
          />
        </Col>
        <Col xs={4} md={2} className="min-h-100">
          <SongCard
            img="../../public/2d.png"
            title="Stephan Moccio: The Zane Lowe Interview"
          />
        </Col>
        <Col xs={4} md={2} className="min-h-100">
          <SongCard
            img="../../public/2e.png"
            title="Chart Spotlight: Julia Michaels"
          />
        </Col>
        <Col xs={4} md={2} className="min-h-100">
          <SongCard img="../../public/2f.png" title="Karri & Travis Mills" />
        </Col>
      </Row>
    </Container>
  );
};
export default RadioSection;
