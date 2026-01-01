import { SecureStoreUtils } from "../utils/secure-store.utils";

const apiBaseUrlProd = "";
const apiBaseUrlDev = "http://192.168.1.40:3000/api";

const secureStoreUtils = new SecureStoreUtils();

const mobileConfig = JSON.parse(
  secureStoreUtils.getItem("mobileConfig") || "{}"
) as { x_api_key: string };

export const config = {
  api: {
    baseUrl: apiBaseUrlDev,
    xApiKey: mobileConfig.x_api_key || "",
  },
};
