import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "reactfire";
import ProductList from "../../components/ProductList/ProductList.jsx";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const Home = () => {
  const history = useHistory();
  const auth = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
      } else {
        history.push("/");
      }
    });
  });

  return (
    <Container>
      <Row>
        <ProductList />
      </Row>
    </Container>
  );
};

export default Home;
