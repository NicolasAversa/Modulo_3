import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useAuth } from "reactfire";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Login.module.css";

const Login = () => {
  const [inputs, setInputs] = useState({});
  const history = useHistory();
  const auth = useAuth();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        history.push("/home");
      }
    });
  });

  const inputChangeHandler = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value,
    });
    console.log(inputs);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(inputs.email, inputs.password).then(() => {
      console.log("Usuario Logueado");
      history.push("/home");
    });
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
            Ingresar
          </Button>
        </Form.Row>
      </Form>
      <Col xs={12} className="px-0 py-3">
        <p>
          ¿Todavía no tiene cuenta?
          <NavLink to="/register">regístrate aquí</NavLink>
        </p>
      </Col>
    </Container>
  );
};

export default Login;
