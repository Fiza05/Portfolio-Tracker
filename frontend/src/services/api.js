import axios from "axios";
import { API_BASE_URL, API_KEY } from "../utils/constants";

export const fetchStockDetails = async (symbol) => {
  try {
    console.log("API", API_KEY);
    const response = await axios.get(API_BASE_URL, {
      params: {
        function: "GLOBAL_QUOTE",
        symbol,
        apikey: API_KEY,
      },
    });
    console.log("response", response);
    return response.data;
  } catch (error) {
    console.error("Error fetching stock details:", error);
    throw error;
  }
};
