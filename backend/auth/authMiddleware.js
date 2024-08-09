import { verifyToken } from "../utility/jwtUtils.js";

const authenticateToken = (req, res, next) => {
	const authHeader = req.headers["authorization"];
	const token = authHeader && authHeader.split(" ")[1]; 

	if (!token) return res.status(401).json({ error: "No token provided" });

	const user = verifyToken(token);

	if (!user) return res.status(403).json({ error: "Invalid token" });

	req.user = user;
	next();
};

export default authenticateToken;
