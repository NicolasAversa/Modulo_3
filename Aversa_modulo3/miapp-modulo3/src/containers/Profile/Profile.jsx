import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "reactfire";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserData from "../../components/UserData/UserData.jsx";

const Profile = () => {
  const history = useHistory();
  const auth = useAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
    } else {
      history.push("/");
    }
  });

  return (
    <Container>
      <Row>
        <UserData />
      </Row>
    </Container>
  );
};

export default Profile;
