import axios from "axios";
const isProduction = process.env.NODE_ENV === "production";
const baseURL = isProduction
  ? "https://basic-to-do-app.herokuapp.com"
  : "http://localhost:3001";

class taskService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    });
  }
  allTasks(data) {
    return this.service.get("/api/tasks", data);
  }
  createTasks(data) {
    return this.service.post("/api/tasks/create", data);
  }
  editTasks(id, data) {
    return this.service.post(`/api/tasks/edit/${id}`, data);
  }
  deleteTasks(id) {
    return this.service.post(`/api/tasks/delete/${id}`);
  }
}

export default taskService;
