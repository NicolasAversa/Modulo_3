import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./Navigation.module.css";

const Navigation = () => {
	return (
		<Navbar className={styles.bgColor + " mb-5"}>
			<Nav className="mr-auto">
				<Nav.Link href="#home">Inicio</Nav.Link>
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
			<div>EDIT</div>
		</Navbar>
	);
};

export default Navigation;
