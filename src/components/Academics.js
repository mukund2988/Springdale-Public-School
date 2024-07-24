import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './css/Academics.css'; // Import the CSS file

const Academics = () => {
  return (
    <Container>
      {/* Curriculum Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="academics-card">
            <Card.Body>
              <h2 className="section-heading">Curriculum</h2>
              <Row>
                <Col md={4}>
                  <h4 className="sub-heading">Primary (Grades 1-5)</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item>English</ListGroup.Item>
                    <ListGroup.Item>Mathematics</ListGroup.Item>
                    <ListGroup.Item>Science</ListGroup.Item>
                    <ListGroup.Item>Social Studies</ListGroup.Item>
                    <ListGroup.Item>Art</ListGroup.Item>
                    <ListGroup.Item>Physical Education</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <h4 className="sub-heading">Secondary (Grades 6-10)</h4>
                  <ListGroup variant="flush">
                    <ListGroup.Item>English</ListGroup.Item>
                    <ListGroup.Item>Mathematics</ListGroup.Item>
                    <ListGroup.Item>Science (Physics, Chemistry, Biology)</ListGroup.Item>
                    <ListGroup.Item>Social Studies</ListGroup.Item>
                    <ListGroup.Item>Computer Science</ListGroup.Item>
                    <ListGroup.Item>Physical Education</ListGroup.Item>
                    <ListGroup.Item>Art</ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col md={4}>
                  <h4 className="sub-heading">Senior Secondary (Grades 11-12)</h4>
                  <ListGroup variant="flush">
                    <h5 className="stream-heading">Science Stream</h5>
                    <ListGroup.Item>Physics</ListGroup.Item>
                    <ListGroup.Item>Chemistry</ListGroup.Item>
                    <ListGroup.Item>Biology</ListGroup.Item>
                    <ListGroup.Item>Mathematics</ListGroup.Item>
                    <ListGroup.Item>Computer Science</ListGroup.Item>
                    <ListGroup.Item>English</ListGroup.Item>
                    <h5 className="stream-heading">Commerce Stream</h5>
                    <ListGroup.Item>Accountancy</ListGroup.Item>
                    <ListGroup.Item>Business Studies</ListGroup.Item>
                    <ListGroup.Item>Economics</ListGroup.Item>
                    <ListGroup.Item>Mathematics</ListGroup.Item>
                    <ListGroup.Item>English</ListGroup.Item>
                  </ListGroup>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Teaching Methodologies Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="academics-card">
            <Card.Body>
              <h2 className="section-heading">Teaching Methodologies</h2>
              <p className="section-text">
                We use a blend of traditional and modern teaching techniques to cater to different learning styles.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Educational Resources Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="academics-card">
            <Card.Body>
              <h2 className="section-heading">Educational Resources</h2>
              <p className="section-text">
                Digital classrooms, interactive learning modules, and access to online educational platforms.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Academics;
