import { useState, useEffect } from "react";
import { toast } from "react-toastify";

import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
} from "../services/stockService";

const useStockManager = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleErrors = (error) => {
    for (let key in error.response.data) {
      toast.error(error.response.data[key] || "An unexpected error occurred!");
    }
  };

  const fetchStocks = async () => {
    try {
      const data = await getStocks();
      setStocks(data);
    } catch (err) {
      handleErrors(err);
    } finally {
      setLoading(false);
    }
  };

  const addStock = async (stock) => {
    try {
      setLoading(true);
      const newStock = await createStock(stock);
      setStocks((prev) => [...prev, newStock]);
      toast.success("Stock added successfully!");
    } catch (err) {
      handleErrors(err);
    } finally {
      setLoading(false);
    }
  };

  const editStock = async (id, updatedStock) => {
    try {
      setLoading(true);
      const updated = await updateStock(id, updatedStock);
      setStocks((prev) =>
        prev.map((stock) => (stock.id === id ? updated : stock))
      );
      toast.success("Stock updated successfully!");
    } catch (err) {
      handleErrors(err);
    } finally {
      setLoading(false);
    }
  };

  const removeStock = async (id) => {
    try {
      setLoading(true);
      await deleteStock(id);
      setStocks((prev) => prev.filter((stock) => stock.id !== id));
      toast.success("Stock deleted successfully!");
    } catch (err) {
      handleErrors(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return { stocks, loading, addStock, editStock, removeStock };
};

export default useStockManager;
