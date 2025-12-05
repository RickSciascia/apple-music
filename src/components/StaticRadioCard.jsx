import Card from "react-bootstrap/Card";

const StaticRadioCard = function (prop) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Nuova Stazione Radio</Card.Title>
        <Card.Text>{prop.text}</Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={prop.img} />
    </Card>
  );
};

export default StaticRadioCard;
