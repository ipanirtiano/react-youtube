import axios from "axios";

const API_KEY = "AIzaSyCqBdwtlntkLM_Mxgk5xKU8qN8yqb1cKoU";

const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

const request = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

export default request;
