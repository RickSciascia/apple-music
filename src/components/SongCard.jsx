import Card from "react-bootstrap/Card";
const SongCard = function (prop) {
  return (
    <Card bg="dark" data-bs-theme="dark" className="border-0">
      <Card.Img variant="top" src={prop.img} className="rounded-2" />
      <Card.Body className="px-0 py-2">
        <Card.Subtitle>{prop.title}</Card.Subtitle>
        <Card.Text>
          <small>{prop?.artist}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SongCard;
