import axios from "axios";
import { config } from "../config/config";

export const backEndClient = axios.create({
  baseURL: config.api.baseUrl,
  headers: {
    "x-api-key": config.api.xApiKey,
  },
});
