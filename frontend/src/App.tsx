import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/App/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import About from "./pages/About"; 
// import Services from "./pages/Services"; 

import Sidebar from "./components/App/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div style={{ display: "flex" }}>
			<Sidebar />
			<div style={{ flex: 1, padding: "20px" }}>{children}</div>
		</div>
	);
};

const AppRoutes: React.FC = () => {
	return (
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
				{/* <Route
					path="/about"
					element={
						<Layout>
							<About />
						</Layout>
					}
				/>
				<Route
					path="/services"
					element={
						<Layout>
							<Services />
						</Layout>
					}
				/> */}
			</Routes>
		</Router>
	);
};

export default AppRoutes;
