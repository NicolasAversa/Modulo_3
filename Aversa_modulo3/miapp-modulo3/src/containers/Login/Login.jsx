import React, { useState } from "react";
import { useAuth } from "reactfire";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styles from "./Login.module.css";

const Login = () => {
	const [inputs, setInputs] = useState({});
	const auth = useAuth();

	const inputChangeHandler = (event) => {
		setInputs({
			...inputs,
			[event.target.name]: event.target.value,
		});
		console.log(inputs);
	};

	const submitHandler = (event) => {
		auth
			.createUserWithEmailAndPassword(inputs.email, inputs.password)
			.then((data) => {
				console.log("Usuario generado");
			});
		event.preventDefault();
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

export default Login;
