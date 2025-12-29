import axios from "axios";

export const googleGeocodingClient = axios.create({
  baseURL: "https://maps.googleapis.com/maps/api/geocode/json",
  params: {
    key: "AIzaSyBz4Eht7oU8gwwbm550B8U77JlaSF2-9lg",
  },
});

// 5978
