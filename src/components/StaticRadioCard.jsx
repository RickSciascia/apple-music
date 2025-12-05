import Card from "react-bootstrap/Card";

const StaticRadioCard = function (prop) {
  return (
    <Card bg="dark" data-bs-theme="dark" className="border-0">
      <Card.Body className="p-1">
        <Card.Title>Nuova Stazione Radio</Card.Title>
        <Card.Text>{prop.text}</Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={prop.img} className="rounded-3" />
    </Card>
  );
};

export default StaticRadioCard;
