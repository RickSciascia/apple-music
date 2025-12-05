import { Card, Col, Container, Row } from "react-bootstrap";

const Explore = function () {
  return (
    <Container fluid>
      <Row className="g-3">
        <h4 className="text-white">Altro da esplorare</h4>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Esplora per genere
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Worldwide
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Video musicali
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Decenni
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Classifiche
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Nuovi artisti
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Attività e stati d'animo
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Audio spaziale
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <Card className="d-flex flex-row align-content-center justify-content-center custom-gray py-3">
            <Card.Text className="flex-grow-1 text-danger mb-0 ps-2 fw-semibold">
              Hit del passato
            </Card.Text>
            <Card.Text className="text-danger mb-0 pe-2 fw-semibold">
              &gt;
            </Card.Text>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default Explore;
