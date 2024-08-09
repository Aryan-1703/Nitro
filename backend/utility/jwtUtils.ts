import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

interface User {
	id: string;
	email: string;
}

export const generateToken = (user: User): string => {
	const payload = {
		id: user.id,
		email: user.email,
	};

	return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "1h" });
};

export const verifyToken = (token: string): User | null => {
	try {
		return jwt.verify(token, process.env.JWT_SECRET as string) as User;
	} catch (err) {
		return null;
	}
};
