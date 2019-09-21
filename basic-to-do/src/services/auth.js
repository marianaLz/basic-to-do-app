import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction
  ? "https://basic-to-do-app.herokuapp.com"
  : "http://localhost:3001";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    });
  }
  signup(data) {
    return this.service.post("/api/signup", data);
  }
  login(data) {
    return this.service.post("/api/login", data);
  }
  logout() {
    return this.service.post("/api/logout");
  }
  loggedin() {
    return this.service.get("/api/loggedin");
  }
}

export default AuthService;
