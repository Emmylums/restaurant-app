import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Your backend base URL
  headers: {
    "Content-Type": "application/json"
    // You can add Authorization here if needed
  }
});

export default api;
