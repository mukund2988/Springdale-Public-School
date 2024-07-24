import React from "react";
import { Container, Carousel, Row, Col, Image } from "react-bootstrap";
import "./css/Home.css";

const Home = () => {
  return (
    <Container>
      {/* School Logo and Introduction */}
      <Row className="my-4">
        <Col md={12} className="intro-container">
          {" "}
          {/* Apply container class */}
          <Image
            src="https://spskidz.com/assets/img/showcase/6.jpeg"
            alt="Springdale Public School"
            className="school-pic" // Apply picture class
          />
          <h1 className="intro-heading">Welcome to Springdale Public School</h1>{" "}
          {/* Apply heading class */}
          <p className="intro-text">
            Where we nurture young minds for a brighter future.
          </p>{" "}
          {/* Apply text class */}
        </Col>
      </Row>

      {/* Carousel/Banner Highlights */}
      <Row className="my-4">
        <Col md={12}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.ytimg.com/vi/wbrt67miV58/maxresdefault.jpg"
                alt="Annual Sports Day"
              />
              <Carousel.Caption>
                <h3>Annual Sports Day - Celebrating Excellence in Sports</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mitvgschools.edu.in/wp-content/uploads/2023/07/Science-Exhibition-MIT-VGS-Kothrud-scaled.webp"
                alt="Science Exhibition"
              />
              <Carousel.Caption>
                <h3>Science Exhibition - Showcasing Student Innovations</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://dikshant.org/school/wp-content/uploads/60974662_2430368560531938_7556910084463263744_n-2.jpg"
                alt="Cultural Fest"
              />
              <Carousel.Caption>
                <h3>Cultural Fest - Embracing Diversity and Creativity</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
