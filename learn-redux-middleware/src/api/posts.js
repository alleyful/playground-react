import axios from "axios";

//axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '/' : 'https://api.velog.io/';

export const getPosts = async () => {
  const response = await axios.get("/posts");
  return response.data;
};

export const getPostById = async id => {
  const response = await axios.get(`/posts/${id}`);
  return response.data;
};
