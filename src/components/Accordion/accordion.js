import Accordion from 'react-bootstrap/Accordion';
// import 'bootstrap/dist/css/bootstrap.min.css'; // COMMENT THIS LINE OUT TO RETURN TO ORIGINAL FORMATTING ; HOWEVER ACCORDION FILES REGRESS

function AllCollapseExample() {
  return (
    <div className="accordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>About Me</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>I'm Damari, a recent web developer graduate seeking my first opportunity in the field!</li>
                    <li>I earned my AAS from Columbus State Community College.</li>
                    <li>Long-term goal is to become a software engineer, and maybe put myself into a position where I can help fellow beginners such as myself.</li>
                  </ul>
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Fun Facts!</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>I have a Husky named Casper! He keeps my head on a swivel and he keeps me active.</li>
                    <li>I previously attended The Ohio State University where I earned my BS in Sport Industry (Business Minor) - GO BUCKS</li>
                    <li>I have been very fortunate to travel to the Bahamas and the Cayman Islands!</li>
                  </ul>
                </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Projects</Accordion.Header>
                <Accordion.Body>
                    <li><a href="http://vinylfinder.click/">Vinyl Finder</a><br /></li>
                    <li><a href="">Bye-Bye Basketball!</a><br /></li>
                    <li><a href="">Records</a><br /></li>
                </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
  );
}

export default AllCollapseExample;