import axios from "axios";

const API_KEY = "AIzaSyBhD-sbxGKTiawRwg0Ap2tO91QuHv0w0oQ";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const request = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default request;
