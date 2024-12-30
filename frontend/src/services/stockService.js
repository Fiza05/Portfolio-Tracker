import axios from "axios";
import { API_BASE_URL } from "../utils/constants";

export const getStocks = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error);
    throw error;
  }
};

export const createStock = async (stock) => {
  try {
    const response = await axios.post(API_BASE_URL, stock);
    return response.data;
  } catch (error) {
    console.error("Error creating stock:", error);
    throw error;
  }
};

export const updateStock = async (id, updatedStock) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, updatedStock);
    return response.data;
  } catch (error) {
    console.error("Error updating stock:", error);
    throw error;
  }
};

export const deleteStock = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting stock:", error);
    throw error;
  }
};
