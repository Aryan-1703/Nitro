// src/pages/Login.tsx
import React, { useState } from "react";
import { Form, Button, Container, Card } from "react-bootstrap";
import "../styles/Login.css"; 

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault();
	};

	return (
		<div className="login-container">
			<Container className="d-flex justify-content-center align-items-center vh-100">
				<Card className="login-card shadow-lg">
					<Card.Body>
						<h2 className="text-center mb-4">Login</h2>
						<Form onSubmit={handleLogin}>
							<Form.Group controlId="formEmail" className="mb-3">
								<Form.Label>Email address</Form.Label>
								<Form.Control
									type="email"
									placeholder="Enter email"
									value={email}
									onChange={e => setEmail(e.target.value)}
									className="input-field"
								/>
							</Form.Group>

							<Form.Group controlId="formPassword" className="mb-3">
								<Form.Label>Password</Form.Label>
								<Form.Control
									type="password"
									placeholder="Password"
									value={password}
									onChange={e => setPassword(e.target.value)}
									className="input-field"
								/>
							</Form.Group>

							<Button variant="primary" type="submit" className="w-100">
								Login
							</Button>
						</Form>
						<p className="text-center mt-3">
							<a href="/forgot-password" className="text-decoration-none">
								Forgot password?
							</a>
						</p>
					</Card.Body>
				</Card>
			</Container>
		</div>
	);
};

export default Login;
