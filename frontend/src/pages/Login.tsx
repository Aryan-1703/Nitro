// src/pages/Login.tsx
import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// const history = useHistory();

	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault();
		// history.push("/dashboard"); 
	};

	return (
		<Container className="mt-5">
			<h2 className="text-center mb-4">Login</h2>
			<Form onSubmit={handleLogin}>
				<Form.Group controlId="formEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type="email"
						placeholder="Enter email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</Form.Group>

				<Form.Group controlId="formPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						placeholder="Password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>
				</Form.Group>

				<Button variant="primary" type="submit" >
					Login
				</Button>
			</Form>
		</Container>
	);
};

export default Login;
