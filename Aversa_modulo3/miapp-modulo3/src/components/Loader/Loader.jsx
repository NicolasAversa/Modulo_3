import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <Container className="h-100">
      <Row className="h-100">
        <Col
          xs={12}
          className="h-100 d-flex align-items-center justify-content-center"
        >
          <Spinner animation="border" variant="primary" />
        </Col>
      </Row>
    </Container>
  );
};

export default Loader;
