import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.scss";
import comingSoon from "../../assets/images/comingSoon.png";
import HKTIcon from "../../assets/images/HKTIcon.png";

function BasicExample() {
  return (
    <>
      <div className="flex-container">
        <div className="card-container">
          {/* <Card style={{ width: "100%" }}> */}
          <a href="https://harriskitchentable.com">
            <Card.Img variant="top" className="project-images" src={HKTIcon} />
          </a>
          <Card.Body>
            <Card.Title className="card-title">Harris Kitchen Table</Card.Title>
            <Card.Text className="card-text">
              Template website serving as proof-of-concept for potential
              freelance restaurant clients.
            </Card.Text>
            <Card.Text>React | JavaScript | HTML | CSS | PocketBase</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Budget Builder</Card.Title>
            <Card.Text>
              {" "}
              A user-friendly web application where users can budget and track
              monthly income, expenses, and disrectionary spending.
            </Card.Text>
            <Card.Text>C# | .NET</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Wedding / Registry Site</Card.Title>
            <Card.Text>
              {" "}
              A website where guests can find information, RSVP, and view the
              registry for my wedding!
            </Card.Text>
            <Card.Text>WordPress | PHP | MySQL</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Veterinarian Site</Card.Title>
            <Card.Text>
              {" "}
              Template website serving as proof-of-concept for potential
              freelance veterinarian clients.
            </Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>
          {/* </Card> */}
        </div>
      </div>
    </>
  );
}

export default BasicExample;
