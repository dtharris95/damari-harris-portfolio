import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faContactBook,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <h1>Damari Harris</h1>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/damari-harris/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="black" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/dtharris95"
          >
            <FontAwesomeIcon icon={faGithub} color="black" />
          </a>
        </li>
        {/* <li>
                <a target='_blank' rel='noreferrer' href="" aria-label="">
                    <FontAwesomeIcon icon={faContactBook} color="black" />
                </a>
            </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
