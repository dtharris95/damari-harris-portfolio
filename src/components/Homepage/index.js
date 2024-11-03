import {} from "@fortawesome/free-solid-svg-icons";
import "./index.scss";
import "animate.css";
import vacation from "../../assets/images/vacation.png";
import DamariHarrisResume2024 from "../../assets/resume/DamariHarrisResume2024.pdf";
import Cards from "../Cards/cards";
// import Stripe from "../Stripe/stripe";

const Homepage = () => {
  return (
    <div className="flex-container">
      <div className="container-home">
        <div className="header-container">
          <h1 className="main-header">Hey, I'm Damari!</h1>
        </div>

        <div className="image-container">
          <img
            aria-label="On vacation"
            className="vacation-img"
            src={vacation}
          ></img>
        </div>

        <div className="about-section">
          <h2 className="about-me">About Me</h2>
          <div className="info-container">
            <p className="info-text">
              I'm Damari, and I'm seeking my first opportunity as a Web
              Developer.
            </p>
            <hr></hr>
            <p className="info-text">
              In 2023 I earned my Associate of Applied Sciences in Computer
              Science from Columbus State Community College, specializing in Web
              Development.
            </p>
            <hr></hr>
            <p className="info-text">
              I have enjoyed my 5 years in my current role with Amazon. Now, I
              look forward to my next opportunity in the field of Web and
              Software Development!
            </p>
            {/* <p className="info-text">
              Potential employers, please use: dtharris95@gmail.com
            </p>
            <p className="info-text">
              For freelance inquiries: dharris.webdev@gmail.com{" "}
            </p> */}
            <p className="info-text">
              <a className="resume-link" href={DamariHarrisResume2024}>
                Check Out My Resume!
              </a>
            </p>
          </div>
        </div>

        <div className="skills-section">
          <h2 className="skills-heading">Skills</h2>
          <div className="skill-list">
            <li className="skills-text">JavaScript</li>
            <li className="skills-text">React</li>
            <li className="skills-text">HTML</li>
            <li className="skills-text">CSS</li>
            {/* <li className="skills-text">C#</li> */}
            <li className="skills-text">Git</li>
            {/* <li className="skills-text">.NET</li> */}
            <li className="skills-text">Bootstrap</li>
            <li className="skills-text">WordPress</li>
            <li className="skills-text">jQuery</li>
          </div>
        </div>

        <div className="service-section">
          <h2 className="service-heading">What I Do</h2>
          <div className="service-container">
            <h3 className="service-subheading">
              <u>Website Developer</u>
            </h3>
            <p className="info-text">
              With a passion for crafting intiutive, user-friendly websites, I
              specialize in creating responsive web solutions leveraging modern
              technologies. Whether you need a brand new website or a revamp of
              your current one, I'm happy to help bring your vision to life!
            </p>
            <h3 className="service-subheading">
              <u>Website Hosting</u>
            </h3>
            <p className="info-text">
              Through providing reliable web hosting services that fit the needs
              of your business, I ensure your website stays online and performs
              at its best for positive client and user experiences.
            </p>
            {/* <hr></hr> */}
            <br></br>
            <p className="info-text">
              For any freelance inquiries, feel free to reach out{" "}
              <a className="email-link" href="mailto:dharris.webdev@gmail.com">
                <b>here!</b>
              </a>
            </p>
          </div>
        </div>

        <div className="facts-section">
          <h2 className="facts-heading">Fun Facts!</h2>
          <div className="facts-container">
            <p className="info-text">
              I am a proud 2018 graduate of <b>The Ohio State University</b> -
              earned my Bachelor of Science in Education, majored in Sport
              Industry. <b>Go Bucks!</b>
            </p>
            <hr></hr>
            <p className="info-text">
              <b>I have officiated a wedding!</b> My best friend got married in
              Hawaii in May 2024, and bestowed the honor upon me of asking to be
              his officiant!
            </p>
            <hr></hr>
            <p className="info-text">
              I have been very fortunate to travel abroad - I have been to the{" "}
              <b>Bahamas</b> and the <b>Cayman Islands!</b> I look forward to
              seeing where my future travels will take me.
            </p>
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
