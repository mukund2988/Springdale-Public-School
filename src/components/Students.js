import React from 'react';
import { Container } from 'react-bootstrap';

const Students = () => {
  return (
    <Container>
      <h1 className="my-4">Students</h1>
      <h2>Life at Springdale</h2>
      <h3>Extracurricular Activities</h3>
      <ul>
        <li>Music</li>
        <li>Dance</li>
        <li>Drama</li>
        <li>Art</li>
        <li>Sports</li>
        <li>Robotics</li>
        <li>Debate Club</li>
        <li>Science Club</li>
      </ul>
      <h3>Clubs and Societies</h3>
      <ul>
        <li>Literary Society</li>
        <li>Environmental Club</li>
        <li>Astronomy Club</li>
        <li>Coding Club</li>
      </ul>
      <h3>Achievements</h3>
      <ul>
        <li><strong>John Smith</strong> - National Level Math Olympiad Winner</li>
        <li><strong>Sarah Lee</strong> - Gold Medalist in State Swimming Championship</li>
        <li><strong>Tech Innovators Club</strong> - Winners of Inter-School Robotics Competition</li>
      </ul>
      <h3>Student Council</h3>
      <ul>
        <li><strong>President:</strong> Amy Parker, Grade 12</li>
        <li><strong>Vice President:</strong> Rajiv Mehta, Grade 11</li>
        <li><strong>Secretary:</strong> Lisa Wong, Grade 10</li>
      </ul>
    </Container>
  );
};

export default Students;
