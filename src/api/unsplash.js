import axios from "axios";

export default axios.create({
	baseURL: "https://api.unsplash.com",
	headers: {
		Authorization: "Client-ID hmsbuo0Ta88LxMJYTlicjcF0oqxIbospC40G-GyxuPk",
	},
});
