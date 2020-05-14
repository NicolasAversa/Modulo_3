import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "reactfire";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const auth = useAuth();

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <Navbar className={styles.bgColor + " mb-5 d-flex justify-content-around"}>
      <Nav>
        <NavLink className="nav-link d-flex align-items-center" to="/home">
          <span className="material-icons">home</span>
        </NavLink>
      </Nav>
      <Form inline className={styles.form}>
        <Form.Control
          type="text"
          placeholder="Search"
          className={styles.input + " h-100 border-0"}
        />
        <Button
          className={
            styles.button +
            " py-0 px-2 h-100 border-0 d-flex align-items-center justify-content-center"
          }
        >
          <span className="material-icons">search</span>
        </Button>
      </Form>
      <Nav>
        <NavLink className="nav-link d-flex align-items-center" to="/profile">
          <span className="material-icons">account_circle</span>
        </NavLink>
      </Nav>
      <Button onClick={handleSignOut} variant="outline-danger">
        Log Out
      </Button>
    </Navbar>
  );
};

export default Navigation;
