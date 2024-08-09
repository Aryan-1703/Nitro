// src/components/App/Layout.tsx
import React from "react";
import useAutoLogout from "../../hooks/useAutoLogout";
import Sidebar from "./Navbar";
import { IoIosMenu } from "react-icons/io";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	useAutoLogout();

	return (
		<div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
			<div className="mobile-menu-icon">
				<IoIosMenu />
			</div>
			<div style={{ display: "flex", flex: 1 }}>
				<Sidebar />
				<div style={{ flex: 1, padding: "20px" }}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
