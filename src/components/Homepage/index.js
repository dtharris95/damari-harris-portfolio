import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-solid-svg-icons";
import {
  faBootstrap,
  faCss3,
  faGit,
  faHtml5,
  faJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import "./index.scss";
import "animate.css";
import officiant from "../../assets/images/officiant.png";
import vacation from "../../assets/images/vacation.png";
import graduate from "../../assets/images/graduate.png";
import DamariHarrisResume2024 from "../../assets/resume/DamariHarrisResume2024.pdf";
import Accordion from "../Accordion/accordion";
import Cards from "../Cards/cards";

const Homepage = () => {
  return (
    <div className="flex-container">
      <div className="container-home">
        <h1 className="main-header">Damari Harris Portfolio</h1>

        {/* <Accordion /> */}
        <div className="about-section">
          <h2 className="about-me">About Me</h2>

          <div className="image-container">
            <div className="personalimg-container">
              <img
                aria-label="Officiant of a wedding"
                className="officiant-img"
                src={officiant}
              ></img>
            </div>
            <div>
              <img
                aria-label="On vacation"
                className="vacation-img"
                // height="450px"
                // width="450px"
                src={vacation}
              ></img>
            </div>
            <div>
              <img
                aria-label="Graduate"
                className="graduate-img"
                src={graduate}
              ></img>
            </div>
          </div>

          <p className="info-text">
            Welcome! I'm Damari, and I'm seeking my first opportunity as a Web
            Developer.
          </p>
          <p className="info-text">
            In 2023 I earned my Associate of Applied Sciences in Computer
            Science from Columbus State Community College, specializing in Web
            Development.
          </p>
          <p className="info-text">
            I have enjoyed my 5 years in my current role with Amazon. Now, I
            look forward to my next opportunity in the field of Web and Software
            Development!
          </p>
          <p className="info-text">
            <a className="resume-link" href={DamariHarrisResume2024}>
              Check out my resume!
            </a>
          </p>
        </div>

        <div className="skills-section">
          <h2 className="skills-heading">Skills</h2>
          <div className="skill-list">
            <li className="skills-text">JAVASCRIPT</li>
            <li className="skills-text">HTML</li>
            <li className="skills-text">C#</li>
            <li className="skills-text">GIT</li>
            <li className="skills-text">REACT</li>
            <li className="skills-text">CSS</li>
            <li className="skills-text">.NET</li>
            <li className="skills-text">BOOTSTRAP</li>
          </div>
        </div>

        <div className="facts-section">
          <h2 className="facts-heading">Fun Facts!</h2>
          <p className="info-text">
            I am a proud 2018 graduate of The Ohio State University - earned my
            Bachelor of Science in Education, majored in Sport Industry. Go
            Bucks!
          </p>
          <p className="info-text">
            I have officiated a wedding! My best friend got married in Hawaii in
            May 2024, and bestowed the honor upon me of asking to be his
            officiant!
          </p>
          <p className="info-text">
            I have been very fortunate to travel abroad - I have been to the
            Bahamas and the Cayman Islands! I look forward to seeing where my
            future travels will take me.
          </p>
        </div>

        <div className="project-section">
          <h2 className="project-heading">Projects</h2>
          <Cards />
        </div>

        {/* <h2 className="project-heading">Projects</h2>
        <div>
          <Cards />
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
