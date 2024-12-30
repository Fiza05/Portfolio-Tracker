import { useState, useEffect } from "react";
import { fetchStockDetails } from "../services/api";

const useFetchStock = (symbol) => {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!symbol) return;

    const getStockDetails = async () => {
      try {
        const data = await fetchStockDetails(symbol);
        console.log(data);
        setStockData(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getStockDetails();
  }, [symbol]);

  return { stockData, loading, error };
};

export default useFetchStock;
