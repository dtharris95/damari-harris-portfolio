import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Damari Harris</h1>
      <ul>
        <li className="nav-links">
          {/* LinkedIn */}
          <a className="links"
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/damariharris/"
          >
            LinkedIn&nbsp;
            <FontAwesomeIcon className="nav-icons" icon={faLinkedin} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* GitHub */}
          <a className="links"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dtharris95"
          >
            GitHub&nbsp;
            <FontAwesomeIcon className="nav-icons" icon={faGithub} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* Employers */}
          <a className="links"
            target="_blank"
            rel="noreferrer"
            href="mailto:dtharris95@gmail.com"
          >
            Employers&nbsp;
            <FontAwesomeIcon className="nav-icons" icon={faBriefcase} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* Freelance */}
          <a className="links"
            target="_blank"
            rel="noreferrer"
            href="mailto:dharris.webdev@gmail.com"
          >
            Freelance&nbsp;
            <FontAwesomeIcon className="nav-icons" icon={faEnvelope} color="black" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
