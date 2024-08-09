import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/App/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Layout from "./components/App/Layout";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

const AppRoutes: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/home"
						element={
							<Layout>
								<Home />
							</Layout>
						}
					/>
					<Route
						path="/contact"
						element={
							<Layout>
								<Contact />
							</Layout>
						}
					/>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default AppRoutes;
