import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import Sidebar from "./Navbar";

type LayoutProps = {
	children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);

	const toggleSidebar = () => {
		setIsSidebarOpen(prevState => !prevState);
	};

	return (
		<div>
			<div className="mobile-menu-icon" onClick={toggleSidebar}>
				<IoIosMenu />
			</div>
			<div style={{ display: "flex" }}>
				{isSidebarOpen && <Sidebar />} {/* Conditionally render Sidebar */}
				<div style={{ flex: 1, padding: "20px" }}>{children}</div>
			</div>
		</div>
	);
};

export default Layout;
