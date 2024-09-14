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
import Damari10 from "../../assets/images/Damari10.png";
import Damarimobile from "../../assets/images/Damarimobile.png";
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

          <div className="personalimg-container">
            <img className="personalimg" src={Damari10}></img>
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
          <p className="info-text"></p>
          <p className="info-text">
            I have enjoyed my 5 years in my current role with Amazon. Now, I
            look forward to my next opportunity in the field of Web and Software
            Development!
          </p>
          <p className="info-text">
            <a className="resume-link" href={DamariHarrisResume2024}>
              Check out my resume here!
            </a>
          </p>

          <h2 className="skills-heading">Skills</h2>
          <div className="">
            <p className="skills-text">JAVASCRIPT</p>
            <p className="skills-text">REACT</p>
            <p className="skills-text">C#</p>
            <p className="skills-text">.NET</p>
            <p className="skills-text">HTML</p>
            <p className="skills-text">CSS</p>
            <p className="skills-text">BOOTSTRAP</p>
            <p className="skills-text">GIT</p>
          </div>

          <h2 className="facts-heading">Fun Facts!</h2>
          <p className="info-text">
            I am a proud 2018 graduate of The Ohio State University, earning my
            Bachelor of Science in Education, majoring in Sport Industry. Go
            Bucks!
          </p>
          <p className="info-text">
            I previously attended The Ohio State University where I earned my BS
            in Sport Industry (Business Minor) - GO BUCKS!
          </p>
          <p className="info-text">
            I have been very fortunate to travel to the Bahamas and the Cayman
            Islands!
          </p>
        </div>
        <br></br>

        <h2 className="project-heading">Projects</h2>
        <div>
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
