import Container from "react-bootstrap/Container";

import consulting from "..//images/consulting.png";
import tech_wrking_2 from "..//images/tech_wrking_2.png";

import "../styles/technology.scss";

export default function Technology() {
  return (
    <section id="techonology">
      <Container fluid className="col-12 d-flex mx-auto bg-white">
        <div className="col-6 fade-in-left">
          <div className="mx-auto">
            <h3 className="col-8 mx-auto text-primary">Consulting</h3>
            <p className="col-8 tech-description">
              Bicon Systems is a full-service consulting firm specializing in IT
              and software development. We offer a broad range of services in
              select industries, such as healthcare, education, and government.
              Our experience spans such areas as programming and systems design,
              cloud computing deployment, hardware installation and repair, and
              network administration.
            </p>
          </div>
        </div>
        <div className="col-6 d-flex fade-in-right">
          <img className="col-3 office-img" src={consulting}></img>
        </div>
      </Container>
    </section>
  );
}
