import Container from "react-bootstrap/Container";

import aboutus_banner from "../images/aboutus_banner_1.png"

import "../styles/aboutus.scss";

export default function AboutUs() {
  return (
    <section id="aboutus">
      <Container fluid className="col-12 d-flex mx-auto bg-white">
      <div className="col-12">
          <img className="col-12 about-img" src={aboutus_banner}></img>
        </div>
      </Container>
    </section>
  );
}
