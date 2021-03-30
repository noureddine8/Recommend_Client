import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:5000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const signIn = (formData) => API.post("/users/signin", formData);
export const signUp = (formData) => API.post("/users/signup", formData);
export const loadUser = () => API.get("/users/user");
export const getUserById = (id) => API.get(`users/${id}`);

export const getAllMovies = () => API.get("/recommendations/type/movie");
export const getAllSeries = () => API.get("/recommendations/type/series");

export const postRecommendation = (data) => API.post("/recommendations", data);
export const deleteRecommendation = (id) => API.delete(`recommendations/${id}`);
export const getRecByGenre = (genre) =>
  API.get(`recommendations/genre/${genre}`);
