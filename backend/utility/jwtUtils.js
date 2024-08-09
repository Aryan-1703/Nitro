import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const generateToken = user => {
	const payload = {
		id: user.id,
		email: user.email,
	};

	return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = token => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (err) {
		return null;
	}
};
