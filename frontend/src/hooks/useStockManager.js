import { useState, useEffect } from "react";
import {
  getStocks,
  createStock,
  updateStock,
  deleteStock,
} from "../services/stockService";

const useStockManager = () => {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStocks = async () => {
    try {
      const data = await getStocks();
      setStocks(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const addStock = async (stock) => {
    try {
      const newStock = await createStock(stock);
      setStocks((prev) => [...prev, newStock]);
    } catch (err) {
      setError(err);
    }
  };

  const editStock = async (id, updatedStock) => {
    try {
      const updated = await updateStock(id, updatedStock);
      setStocks((prev) =>
        prev.map((stock) => (stock.id === id ? updated : stock))
      );
    } catch (err) {
      setError(err);
    }
  };

  const removeStock = async (id) => {
    try {
      await deleteStock(id);
      setStocks((prev) => prev.filter((stock) => stock.id !== id));
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    fetchStocks();
  }, []);

  return { stocks, loading, error, addStock, editStock, removeStock };
};

export default useStockManager;
