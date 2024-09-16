import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <h1 className="nav-title">Damari Harris</h1>
      <ul>
        <li className="nav-links">
          LinkedIn
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/damari-harris/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="black" />
          </a>
        </li>
        <li className="nav-links">
          GitHub
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dtharris95"
          >
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </li>
        <li className="nav-links">
          dharris.webdev@gmail.com
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:dharris.webdev@gmail.com"
          >
            <FontAwesomeIcon icon={faEnvelope} color="black" />
          </a>
        </li>
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
