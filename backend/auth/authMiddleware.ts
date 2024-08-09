const { verifyToken } = require("./jwtUtils");

const authenticateToken = (req, res, next) => {
	const token = req.headers["authorization"]?.split(" ")[1]; 

	if (!token) return res.status(401).json({ error: "No token provided" });

	const user = verifyToken(token);

	if (!user) return res.status(403).json({ error: "Invalid token" });

	req.user = user;
	next();
};

module.exports = authenticateToken;
