import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/App/Login";
import Home from "./pages/Home";
import Layout from "./components/App/Layout";
import PrivateRoute from "./components/App/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import TotalLoss from "./pages/Claims/TotalLoss";
import Accounts from "./pages/Accounts";
import Rates from "./pages/Admin/Rates";

const AppRoutes: React.FC = () => {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/login" element={<Login />} />
					<Route element={<PrivateRoute />}>
						<Route
							path="/home"
							element={
								<Layout>
									<Home />
								</Layout>
							}
						/>
						<Route
							path="/TotalLoss"
							element={
								<Layout>
									<TotalLoss />
								</Layout>
							}
						/>
						<Route
							path="/accounts"
							element={
								<Layout>
									<Accounts />
								</Layout>
							}
						/>
						<Route
							path="/Rates"
							element={
								<Layout>
									<Rates />
								</Layout>
							}
						/>
					</Route>
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default AppRoutes;
