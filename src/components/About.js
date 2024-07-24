import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './css/About.css'; // Import the CSS file

const About = () => {
  return (
    <Container>
      {/* History Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="section-heading">History</h2>
              <p className="section-text">
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Vision Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="section-heading">Vision</h2>
              <p className="section-text">
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Mission Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="section-heading">Mission</h2>
              <p className="section-text">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Principal's Message Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="section-heading">Principal's Message</h2>
              <p className="section-text">
                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Infrastructure and Facilities Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <h2 className="section-heading">Infrastructure and Facilities</h2>
              <ul className="facilities-list">
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
