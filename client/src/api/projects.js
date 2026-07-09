import api from "./axios.js";

export const fetchProjects = async () => {
  const { data } = await api.get("/projects");
  return data.data;
};
