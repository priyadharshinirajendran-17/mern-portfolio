import api from "./axios.js";

export const fetchSkills = async () => {
  const { data } = await api.get("/skills");
  return data.data;
};
