import axios from "axios";
import { config } from "../config/config";

console.log("config.api.baseUrl", config.api.baseUrl);

export const backEndClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "x-api-key": config.api.xApiKey,
  },
});
