import {} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import "animate.css";
import vacation from "../../assets/images/vacation.png";
import DamariHarrisDevResume2025 from "../../assets/resume/DamariHarrisDevResume2025.pdf";
import Cards from "../Cards/cards";
// import Stripe from "../Stripe/stripe";

const Homepage = () => {
  return (
    <div className="flex-container">
      <div className="container-home">
        <div className="header-container">
          <h1 className="main-header" tabIndex={0}>
            Hey, I'm Damari!
          </h1>
        </div>

        <div className="image-container">
          <img
            aria-label="On vacation"
            className="vacation-img"
            src={vacation}
          ></img>
        </div>

        <div className="container-one">
          <div className="about-section">
            <h2 className="about-me">
              <u>About Me</u>
            </h2>
            <div className="info-container">
              <p className="info-text">
                I'm Damari, and I am eager to begin my career as a Web Developer. I specialize in frontend web development, but am continuosly expanding my skillset.
              </p>
              <hr></hr>
              <p className="info-text" tabIndex={0}>
                Originally from Columbus, OH, in 2023 I earned my Associate of
                Applied Sciences in Computer Science from Columbus State
                Community College, majoring in Web Development.
              </p>
              <hr></hr>
              <p className="info-text">
                I have spent the last six years thriving in my role at Amazon
                and am now excited to embark on my next chapter in Web
                Development.
              </p>
              <p className="info-text">
                <a className="resume-link" target="_blank" href={DamariHarrisDevResume2025}>
                  Check Out My Resume!
                </a>
              </p>
            </div>
          </div>

          <div className="facts-section">
            <h2 className="facts-heading">
              <u>Fun Facts!</u>
            </h2>
            <div className="facts-container">
              <p className="info-text">
                I am also a proud 2018 graduate of The Ohio State University -
                earned my Bachelor of Science in Education, majored in Sport
                Industry. Go Bucks!
              </p>
              <hr></hr>
              <p className="info-text" tabIndex={0}>
                I have officiated a wedding! My best friend got married in
                Hawaii in May 2024, and bestowed the honor upon me of asking to
                be his officiant!
              </p>
              <hr></hr>
              <p className="info-text">
                I have been very fortunate to travel abroad - I have been to the{" "}
                Bahamas and the Cayman Islands! I look forward to seeing where
                my future travels will take me.
              </p>
            </div>
          </div>
        </div>

        <div className="container-two">
          <div className="skills-section">
            <h2 className="skills-heading">
              <u>Skills</u>
            </h2>
            <div className="skill-list">
              <li className="skills-text">JavaScript</li>
              <li className="skills-text">React</li>
              <li className="skills-text">HTML</li>
              <li className="skills-text" tabIndex={0}>
                CSS
              </li>
              <li className="skills-text">Git</li>
              <li className="skills-text">Bootstrap</li>
              <li className="skills-text">WordPress</li>
              <li className="skills-text">jQuery</li>
              <li className="skills-text">Visual Studio Code</li>
              <li className="skills-text">Office Suite</li>
            </div>
          </div>

          <div className="service-section">
            <h2 className="service-heading">
              <u>What I Do</u>
            </h2>
            <div className="service-container">
              <h3 className="service-subheading">Website Developer</h3>
              <p className="info-text">
                With a passion for crafting intiutive, user-friendly websites, I
                specialize in creating responsive web solutions leveraging
                modern technologies. Whether you need a brand new website or a
                revamp of your current one, I'm happy to help bring your vision
                to life!
              </p>
              <h3 className="service-subheading" tabIndex={0}>
                Website Hosting
              </h3>
              <p className="info-text">
                Through providing reliable web hosting services that fit the
                needs of your business, I ensure your website stays online and
                performs at its best for positive client and user experiences.
              </p>
              <hr></hr>
              <p className="info-text">
                For any <b>freelance</b> inquiries, feel free to reach out{" "}
                <a
                  className="email-link"
                  href="mailto:dharris.webdev@gmail.com"
                >
                  <b>here!</b>
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="project-section">
          <Cards />
        </div>
        {/* <div>
          <Stripe />
        </div> */}
      </div>
    </div>
  );
};

export default Homepage;
