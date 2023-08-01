import axios from "axios";

const API_KEY = "AIzaSyBTlnQ7MDPUXPKXclK5ej1YkIPyBoIOgqM";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const request = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default request;
