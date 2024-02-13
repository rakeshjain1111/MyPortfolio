import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Blog() {
  return (
    <Container fluid className="about-section">
    <Container>
      <Row style={{ justifyContent: "center", padding: "0px" }}>
       <img src='./coming-soon.jpg' className='img-fluid'></img>
      </Row>
    </Container>
  </Container>
  )
}

export default Blog