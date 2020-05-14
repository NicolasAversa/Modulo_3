import React from "react";
import { useUser } from "reactfire";

import Col from "react-bootstrap/Col";
import styles from "./UserData.module.css";

const UserData = () => {
  const user = useUser();

  return (
    <Col xs={12} className={styles.container + " p-4 border-bottom"}>
      <h5>Perfil de {user.displayName}</h5>
      <ul>
        <p>Productos comprados:</p>
        <li></li>
      </ul>
    </Col>
  );
};

export default UserData;
