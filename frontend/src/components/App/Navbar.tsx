import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaPhone, FaInfoCircle, FaEnvelope } from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import "../styles/NavBar.css";
import logo from "../assets/App.png";

const Sidebar: React.FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	return (
		<>
			<div className="mobile-menu-icon">
				{!mobileMenuOpen && <IoIosMenu size={30} onClick={handleMobileMenuToggle} />}
			</div>

			<div
				className={`sidebar ${collapsed ? "" : "expanded"} ${
					mobileMenuOpen ? "open" : ""
				}`}
				onMouseEnter={() => !mobileMenuOpen && setCollapsed(false)}
				onMouseLeave={() => !mobileMenuOpen && setCollapsed(true)}
			>
				<div className="sidebar-icon">
					<img
						src={logo}
						alt="App Icon"
						style={{
							width: collapsed ? "40px" : "30px",
							transition: "width 0.1s ease-in-out",
						}}
					/>
					{!collapsed && <span className="sidebar-title">NITRO</span>}
				</div>

				<div className="menu-container">
					<Link to="/home" className="sidebar-link">
						<FaHome size={20} />
						{!collapsed && <span className="link-text">Home</span>}
					</Link>
					<Link to="/contact" className="sidebar-link">
						<FaPhone size={20} />
						{!collapsed && <span className="link-text">Contact</span>}
					</Link>
					<Link to="/about" className="sidebar-link">
						<FaInfoCircle size={20} />
						{!collapsed && <span className="link-text">About</span>}
					</Link>
					<Link to="/reach-us" className="sidebar-link">
						<FaEnvelope size={20} />
						{!collapsed && <span className="link-text">Reach Us</span>}
					</Link>
				</div>

				{mobileMenuOpen && (
					<IoIosClose size={30} className="close-icon" onClick={handleMobileMenuToggle} />
				)}
			</div>
		</>
	);
};

export default Sidebar;
