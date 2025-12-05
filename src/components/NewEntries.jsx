import { Container, Row } from "react-bootstrap";

const NewEntries = () => {
  const endpoint =
    "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
  return (
    <Container fluid>
      <h3 className="mt-3 fw-bold text-white">Nuove uscite &gt;</h3>
      <Row>{/* qui devo fare map */}</Row>
    </Container>
  );
};
export default NewEntries;
