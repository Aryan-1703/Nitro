import jsonServer from "json-server";
import bodyParser from "body-parser";

import { generateToken } from "./utility/jwtUtils.js";
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();

server.use(bodyParser.json());
server.use(middlewares);

server.post("/login", (req, res) => {
	const { email, password } = req.body;
	const db = router.db; // Get the database instance
	const user = db.get("users").find({ email, password }).value(); // Find user by email and password

	if (user) {
		const token = generateToken(user);
		return res.json({ token, user });
	} else {
		return res.status(400).json({ error: "Invalid email or password" });
	}
});

import authenticateToken from "./auth/authMiddleware.js";

// Example usage in an Express route
server.get("/protected-route", authenticateToken, (req, res) => {
	res.json({ message: "You have access!", user: req.user });
});

// Use json-server router for other CRUD operations
server.use(router);

// Start the server
server.listen(5000, () => {
	console.log("JSON Server is running on http://localhost:5000");
});
