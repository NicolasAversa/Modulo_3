import React, { useState } from "react";
import { useAuth } from "reactfire";
import { useHistory } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Register.module.css";

const Register = () => {
  const [inputs, setInputs] = useState({});
  const history = useHistory();
  const auth = useAuth();

  auth.onAuthStateChanged((user) => {
    if (user) {
      user
        .updateProfile({
          displayName: inputs.nombreApellido,
        })
        .then(() => {
          history.push("/home");
        });
    }
  });

  const inputChangeHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (inputs.nombreApellido != null) {
      auth.createUserWithEmailAndPassword(inputs.email, inputs.password);
    }
  };

  return (
    <Container className={styles.containerLogin + " p-5 shadow-sm"}>
      <Form onSubmit={submitHandler}>
        <Form.Row>
          <Col xs={12} className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              onChange={inputChangeHandler}
              className={styles.input + " p-3"}
              placeholder="Ingrese e-mail"
            />
          </Col>
          <Col xs={12} className="mb-3">
            <Form.Label>Nombre y apellido</Form.Label>
            <Form.Control
              type="text"
              name="nombreApellido"
              onChange={inputChangeHandler}
              className={styles.input + " p-3"}
              placeholder="Ingrese nombre y apellido"
            />
          </Col>
          <Col xs={12}>
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={inputChangeHandler}
              className={styles.input + " p-3"}
              placeholder="Ingrese contraseña"
            />
          </Col>
          <Button variant="primary" type="submit" className="mt-4" block>
            Registrarse
          </Button>
        </Form.Row>
      </Form>
    </Container>
  );
};

export default Register;
