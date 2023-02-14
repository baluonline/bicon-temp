import Container from "react-bootstrap/Container";

import aboutus_banner from "../images/aboutus_banner_1.png";
import about_tech from "../images/about_tech.png";
import about_help from "../images/about_help.png";

import "../styles/aboutus.scss";

export default function AboutUs() {
  return (
    <section id="aboutus">
      <Container fluid className="col-12 bg-white">
        <div className="row">
          <img className="col-11 about-img" src={aboutus_banner}></img>
        </div>

        <div className="row mt-5">
          <img className="col-5 about-img" src={about_tech} />
          <div className="col-5 mx-auto">
            <h2 className="row">About Bicon Systems</h2>
            <p className="row">
              Bicon Systems always strives and maintains to face all challenges
              and make a mark of its own in today's competitive world to stay
              ahead of the latest trends and competitive developments while
              building a responsive and agile IT network with capability to
              support growth. Technology alone does not offer a competitive
              advantage, the real advantage depends on how you apply technology
              more specifically, on the people who lead, support and optimize
              your IT initiatives.
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-5 mx-auto">
            <h2 className="row">How can we help you.</h2>
            <p className="row">
              We offer customers core business benefits by optimizing their
              business processes and efficiently implementing their technology
              investment. We’ve established ourselves by creating perfect system
              structures supported by the best equipment. Our goal is to
              facilitate seamless IT processes that enable our customers to
              simply focus on their business without interruption.
            </p>
          </div>
          <img className="col-5 about-img" src={about_help} />
        </div>
      </Container>
    </section>
  );
}
