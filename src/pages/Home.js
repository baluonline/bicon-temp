import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

export default function Home() {
  return (
    <Container fluid className="col-6 mx-auto float-lg-left bg-white">
      <Stack gap="3">
        <h1 className="text-primary">Meet Our Technology Experts</h1>
        <p className="">We work on cutting edge technologies to build solutions. We provide trainings on world class technologies to deliver business driven solutions to our customers. Providing high caliber IT professionals and the quality services and work on cutting edge technologies to build solutions cater to clients having specific needs, requiring customized solutions.
        </p>
        <button className="bg-primary text-white col-3">Get in Touch</button>
      </Stack>
    </Container>
  );
}
