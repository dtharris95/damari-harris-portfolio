import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.scss";
import comingSoon from "../../assets/images/comingSoon.png";
import HKTIcon from "../../assets/images/HKTIcon.png";

function BasicExample() {
  return (
    <>
      <h2 className="project-heading">Projects</h2>
      <p className="project-subheading">
        (Click on an image to see the project!)
      </p>
      <div className="flex-container">
        <div className="card-container">
          {/* Harris Kitchen Table */}
          <a href="https://harriskitchentable.com">
            <Card.Img variant="top" className="project-images" src={HKTIcon} />
          </a>
          <Card.Body>
            <Card.Title className="card-title">Harris Kitchen Table</Card.Title>
            <Card.Text className="card-text">
              Template website serving as proof-of-concept for potential
              freelance restaurant clients.
            </Card.Text>
            <Card.Text className="card-skills">
              React | JavaScript | HTML | CSS | PocketBase
            </Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          {/* Hinge To Harris - https://hingetoharris.com */}
          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Hinge To Harris</Card.Title>
            <Card.Text className="card-text">
              {" "}
              A website where guests can find information, RSVP, and view the
              registry for my wedding!
            </Card.Text>
            <Card.Text className="card-skills">WordPress</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          {/* Budget Builder */}
          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Budget Builder</Card.Title>
            <Card.Text className="card-text">
              {" "}
              A user-friendly web application where users can budget and track
              monthly income, expenses, and disrectionary spending.
            </Card.Text>
            <Card.Text className="card-skills">C# | .NET</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>

          {/* Veterinarian Site */}
          <a href="">
            <Card.Img
              variant="top"
              className="project-images"
              src={comingSoon}
            />
          </a>
          <Card.Body>
            <Card.Title>Veterinarian Site</Card.Title>
            <Card.Text className="card-text">
              {" "}
              Template website serving as proof-of-concept for potential
              freelance veterinarian clients.
            </Card.Text>
            <Card.Text className="card-skills">TBD</Card.Text>
            {/* <Button variant="primary">Visit Site</Button> */}
          </Card.Body>
          {/* </Card> */}
        </div>
      </div>
    </>
  );
}

export default BasicExample;
