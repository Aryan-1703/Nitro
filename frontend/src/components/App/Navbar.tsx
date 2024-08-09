import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaSignOutAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import claims from "../../assets/claims.png";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { MdAccountBalance } from "react-icons/md";
import "../../styles/NavBar.css";
import logo from "../../assets/App.png";

const Sidebar: React.FC = () => {
	const [collapsed, setCollapsed] = useState(true);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const toggleDropdown = (dropdown: string) => {
		setOpenDropdown(openDropdown === dropdown ? null : dropdown);
	};

	const navigate = useNavigate();

	const handleLogout = () => {
		localStorage.removeItem("token");
		localStorage.removeItem("user");
		sessionStorage.removeItem("token");
		sessionStorage.removeItem("user");
		navigate("/login");
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
					<div
						className="sidebar-link"
						onClick={() => toggleDropdown("claims")}
						style={{ cursor: "pointer" }}
					>
						<img
							src={claims}
							alt="App Icon"
							style={{
								width: collapsed ? "30px" : "40px",
								transition: "width 0.1s ease-in-out",
							}}
						/>
						{!collapsed && (
							<>
								<span className="link-text">Claims</span>
								{openDropdown === "claims" ? <FaChevronUp /> : <FaChevronDown />}
							</>
						)}
					</div>
					{openDropdown === "claims" && (
						<div className="dropdown-content">
							<Link to="/totalloss" className="sidebar-link">
								{!collapsed && <span className="link-text">Total Loss</span>}
							</Link>
							<Link to="/repairs" className="sidebar-link">
								{!collapsed && <span className="link-text">Repairs</span>}
							</Link>
						</div>
					)}
					<Link to="/reach-us" className="sidebar-link">
						<MdAccountBalance size={20} />
						{!collapsed && <span className="link-text">Accounts</span>}
					</Link>
					<Link
						to="#"
						onClick={e => {
							e.preventDefault();
							handleLogout();
						}}
						className="sidebar-link"
					>
						<FaSignOutAlt size={20} />
						{!collapsed && <span className="link-text">Log Out</span>}
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
