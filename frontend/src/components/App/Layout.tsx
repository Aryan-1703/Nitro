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
		<div>
			<div className="mobile-menu-icon">
				<IoIosMenu />
			</div>
			<div style={{ display: "flex" }}>
				<Sidebar />
				<div style={{ flex: 1, padding: "20px" }}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
