import axios from "axios";

const signup = payload => axios.post("/api/users", payload);

const login = payload => axios.post("/api/users/login", payload);

const logout = () => axios.delete("/api/users/logout");

const authApi = {
  signup,
  login,
  logout,
};

export default authApi;
