export const getToken = (): string | null => {
	const token = localStorage.getItem("token") || sessionStorage.getItem("token");
	return token;
};
