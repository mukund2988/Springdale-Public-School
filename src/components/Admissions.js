import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './css/Admissions.css'; // Import the CSS file

const Admissions = () => {
  return (
    <Container>
      {/* Process Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="admissions-card">
            <Card.Body>
              <h2 className="section-heading">Admission Process</h2>
              <p className="section-text">
                Admission forms are available for download. Submit the completed form along with required documents at the school office.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Criteria Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="admissions-card">
            <Card.Body>
              <h2 className="section-heading">Admission Criteria</h2>
              <p className="section-text">
                Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Important Dates Section */}
      <Row className="my-5">
        <Col md={12}>
          <Card className="admissions-card">
            <Card.Body>
              <h2 className="section-heading">Important Dates</h2>
              <ListGroup variant="flush" className="dates-list">
                <ListGroup.Item>
                  <strong>Admission Form Availability:</strong> March 1st
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Last Date for Submission:</strong> March 31st
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Entrance Test:</strong> April 15th
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Announcement of Results:</strong> April 30th
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Admissions;
