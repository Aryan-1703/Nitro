import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/Login.css";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { LocationState } from "../../types/LocationState";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);
	const [error, setError] = useState("");
	const navigate = useNavigate();
	const location = useLocation();

	// Cast location.state to the defined type
	const state = location.state as LocationState;
	const from = state?.from || "/home"; // Use the type-casted state

	const handleLogin = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			const response = await fetch("http://localhost:5000/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			if (!response.ok) {
				// const errorData = await response.json();
				throw new Error("Login failed");
			}

			const data = await response.json();
			localStorage.setItem("token", data.token);
			localStorage.setItem("user", JSON.stringify(data.user));

			navigate(from); // Redirect to the saved location or default to /home
		} catch (error) {
			console.error("Login error:", error);
			setError("Invalid email or password.");
		}
	};

	return (
		<div className="login-page">
			<div className="login-form-container">
				<div className="logo-container">
					<img src="/src/assets/App.png" alt="Your Logo" className="logo" />
				</div>
				<form className="login-form" onSubmit={handleLogin}>
					<h2>Login</h2>
					{error && <p className="error-message">{error}</p>}
					<div className="input-container">
						<FaUser className="icon" />
						<input
							type="text"
							placeholder="Email"
							value={email}
							onChange={e => setEmail(e.target.value)}
							required
						/>
					</div>
					<div className="input-container">
						<input
							type={showPassword ? "text" : "password"}
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
							required
						/>
						{showPassword ? (
							<FaEyeSlash className="eye-icon" onClick={() => setShowPassword(false)} />
						) : (
							<FaEye className="eye-icon" onClick={() => setShowPassword(true)} />
						)}
					</div>
					<div className="options-container">
						<label>
							<input type="checkbox" />
							Remember me
						</label>
						<a href="/forgot-password" className="forgot-password">
							Forgot password?
						</a>
					</div>
					<button type="submit" className="login-button">
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
