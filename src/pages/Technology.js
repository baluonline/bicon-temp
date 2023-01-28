import Container from "react-bootstrap/Container";

import off_tech from "..//images/off_tech.png";
import tech_wrking_2 from "..//images/tech_wrking_2.png";

import "../styles/technology.scss";

export default function Technology() {
  return (
    <section id="techonology">
      <Container fluid className="col-12 d-flex mx-auto bg-white">
        <div className="col-6 fade-in-left">
          <div className="mx-auto">
            <h3 className="col-8 mx-auto text-primary">Technology</h3>
            <p className="col-8 tech-description">
              We work on cutting edge technologies to build solutions which
              match industry standards. We provide the best of the services in a
              short span of time. We strive hard to deliver the best quality and
              our dedicated team works round the clock to meet the deadlines and
              match industry standards.
            </p>
          </div>
        </div>
        <div className="col-6 d-flex fade-in-right">
          <img className="col-3 office-img" src={off_tech}></img>
          <img className="col-3 work-space" src={tech_wrking_2}></img>
        </div>
      </Container>
    </section>
  );
}
