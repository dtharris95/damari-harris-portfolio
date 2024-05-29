import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  //   faPhp,
  //   faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import "animate.css";
import Accordion from "../Accordion/accordion";
import Cards from "../Cards/cards";
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Homepage = () => {
  return (
    <div className="flex-container">
      <div className="container-home">
        <h1 className="main-header">Damari Harris Portfolio</h1>
        <div className="grid-container">
          <p>
            <FontAwesomeIcon icon={faJs} />
            <figcaption className="logo-caption">JavaScript</figcaption>
          </p>
          {/* <p>
          <FontAwesomeIcon icon={faPhp} />
        </p>
        <p>
          <FontAwesomeIcon icon={faPython} />
        </p> */}
          <p>
            <FontAwesomeIcon icon={faReact} />
            <figcaption className="logo-caption">React</figcaption>
          </p>
          <p>
            <FontAwesomeIcon icon={faBootstrap} />
            <figcaption className="logo-caption">Bootstrap</figcaption>
          </p>
          <p>
            <FontAwesomeIcon icon={faGit} />
            <figcaption className="logo-caption">Git</figcaption>
          </p>
          <p>
            <FontAwesomeIcon icon={faHtml5} />
            <figcaption className="logo-caption">HTML</figcaption>
          </p>
          <p>
            <FontAwesomeIcon icon={faCss3} />
            <figcaption className="logo-caption">CSS</figcaption>
          </p>
        </div>

        {/* <Accordion /> */}

        <h2 className="about-me">About Me</h2>
        <p className="info-text">
          I'm Damari, a web developer graduate seeking my first opportunity in
          the field!
        </p>
        <p className="info-text">
          I earned my AAS from Columbus State Community College.
        </p>
        <p className="info-text">
          Long-term goal is to continuously grow in my career , financial
          stability, and
        </p>
        <br></br>

        <h2 className="">Fun Facts!</h2>
        <p className="info-text">
          I have a Husky named Casper! He keeps my head on a swivel and he keeps
          me active.
        </p>
        <p className="info-text">
          I previously attended The Ohio State University where I earned my BS
          in Sport Industry (Business Minor) - GO BUCKS!
        </p>
        <p className="info-text">
          I have been very fortunate to travel to the Bahamas and the Cayman
          Islands!
        </p>
        <br></br>

        <h2>Projects</h2>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
