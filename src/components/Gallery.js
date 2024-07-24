import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import './css/Gallery.css';
const Gallery = () => {
  return (
    <Container>
      <h1 className="my-4">Gallery</h1>
      <Row>
        <Col md={4}>
          <Image
            src="https://www.sanskriti.edu.in/images/sports1.jpg"
            fluid
            className="gallery-image"
          />
          <p>Students participating in various sports events.</p>
        </Col>
        <Col md={4}>
          <Image
            src="https://i.ytimg.com/vi/vLajjlokmeQ/maxresdefault.jpg"
            fluid
            className="gallery-image"
          />
          <p>Students presenting their science projects.</p>
        </Col>
        <Col md={4}>
          <Image
            src="https://media.licdn.com/dms/image/C5612AQHyHqK3pLpZuA/article-cover_image-shrink_600_2000/0/1520113442123?e=2147483647&v=beta&t=pU-n2nzAW03bo96RZQ3YASQn31Uo6aWBow8yQsw6cts"
            fluid
            className="gallery-image"
          />
          <p>Students performing in the cultural fest.</p>
        </Col>
        <Col md={4}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhH9yDii_FgurtCqx48rw34W5RCbGQV3QPng&s"
            fluid
            className="gallery-image"
          />
          <p>A glimpse of our interactive classrooms.</p>
        </Col>
        <Col md={4}>
          <Image
            src="https://png.pngtree.com/background/20230425/original/pngtree-children-reading-on-library-desks-in-a-library-picture-image_2479225.jpg"
            fluid
            className="gallery-image"
          />
          <p>Students reading and studying in the school library.</p>
        </Col>
      </Row>
      <h2 className="video-section">Videos</h2>
      <div className="video-section">
        <video controls>
          <source src="path/to/school_tour.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Virtual tour of Springdale Public School.</p>
        <video controls>
          <source src="path/to/annual_function.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p>Highlights from the Annual Function 2023.</p>
      </div>
    </Container>
  );
};

export default Gallery;