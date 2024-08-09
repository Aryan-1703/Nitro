import React, { createContext, useContext } from "react";

interface AuthContextType {
	getToken: () => string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const getToken = (): string | null => {
		return localStorage.getItem("token") || sessionStorage.getItem("token");
	};

	return <AuthContext.Provider value={{ getToken }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within an AuthProvider");
	}
	return context;
};
