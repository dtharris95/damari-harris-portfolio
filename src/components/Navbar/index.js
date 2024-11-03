import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-title">Damari Harris</h1>
      <ul>
        {/* <div className="hello"> */}
        <li className="nav-links">
          {/* LinkedIn */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/damari-harris/"
          >
            LinkedIn&nbsp;
            <FontAwesomeIcon icon={faLinkedin} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* GitHub */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dtharris95"
          >
            GitHub&nbsp;
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* Employers */}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:dtharris95@gmail.com"
          >
            Employers&nbsp;
            <FontAwesomeIcon icon={faBriefcase} color="black" />
          </a>
        </li>
        <li className="nav-links">
          {/* Freelance */}
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:dharris.webdev@gmail.com"
          >
            Freelance&nbsp;
            <FontAwesomeIcon icon={faEnvelope} color="black" />
          </a>
        </li>
        {/* </div> */}
        {/* <li>
                <a target='_blank' rel='noreferrer' href="" aria-label="">
                    <FontAwesomeIcon icon={faContactBook} color="black" />
                </a>
            </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
