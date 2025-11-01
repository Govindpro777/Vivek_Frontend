import axios from "axios";

const API_URL = process.env.BASE_URL;

const api = axios.create({
  baseURL: API_URL,
});

// Add token to requests
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const authAPI = {
  signup: (data) => api.post("/auth/signup", data),
  verify: (data) => api.post("/auth/verify", data),
  login: (data) => api.post("/auth/login", data),
};

export const challengeAPI = {
  getAll: () => api.get("/challenges"),
  getById: (id) => api.get(`/challenges/${id}`),
};

export const purchaseAPI = {
  create: (challengeId) => api.post("/purchase/create", { challengeId }),
  getDashboard: (purchaseId) => api.get(`/purchase/dashboard/${purchaseId}`),
};

export const adminAPI = {
  getPurchases: () => api.get("/admin/purchases"),
  sendChallenge: (purchaseId) =>
    api.post(`/admin/send-challenge/${purchaseId}`),
};

export default api;
