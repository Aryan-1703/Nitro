import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const INACTIVITY_TIMEOUT =  5 * 1000; // 30 minutes

const useAutoLogout = () => {
	const navigate = useNavigate();

	useEffect(() => {
		let inactivityTimer: ReturnType<typeof setTimeout>;

		const resetTimer = () => {
			clearTimeout(inactivityTimer);
			inactivityTimer = setTimeout(() => {
				handleLogout();
			}, INACTIVITY_TIMEOUT);
		};

		const handleLogout = () => {
			localStorage.removeItem("token");
			localStorage.removeItem("user");
			navigate("/login", { state: { from: window.location.pathname } });
		};

		const events = ["mousemove", "keydown", "click"];

		events.forEach(event => window.addEventListener(event, resetTimer));

		// Set the timer initially
		resetTimer();

		return () => {
			clearTimeout(inactivityTimer);
			events.forEach(event => window.removeEventListener(event, resetTimer));
		};
	}, [navigate]);
};

export default useAutoLogout;
