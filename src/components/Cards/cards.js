import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.scss";
import comingSoon from "../../assets/images/comingSoon.png";

function BasicExample() {
  return (
    <div className="card-container">
      {/* <Card style={{ width: "100%" }}> */}
      <Card.Img variant="top" src={comingSoon} />
      <Card.Body>
        <Card.Title>Harris Kitchen Table</Card.Title>
        <Card.Text>
          Template website serving as proof-of-concept for potential freelance
          restaurant clients.
        </Card.Text>
        <Button variant="primary">Visit Site</Button>
      </Card.Body>

      <Card.Img variant="top" src={comingSoon} />
      <Card.Body>
        <Card.Title>Budget Builder</Card.Title>
        <Card.Text>
          {" "}
          Template website serving as proof-of-concept for potential freelance
          restaurant clients.
        </Card.Text>
        <Button variant="primary">Visit Site</Button>
      </Card.Body>

      <Card.Img variant="top" src={comingSoon} />
      <Card.Body>
        <Card.Title>Veterinarian Site</Card.Title>
        <Card.Text>
          {" "}
          Template website serving as proof-of-concept for potential freelance
          restaurant clients.
        </Card.Text>
        <Button variant="primary">Visit Site</Button>
      </Card.Body>

      <Card.Img variant="top" src={comingSoon} />
      <Card.Body>
        <Card.Title>Wedding / Registry Site</Card.Title>
        <Card.Text>
          {" "}
          Template website serving as proof-of-concept for potential freelance
          restaurant clients.
        </Card.Text>
        <Button variant="primary">Visit Site</Button>
      </Card.Body>
      {/* </Card> */}
    </div>
  );
}

export default BasicExample;
