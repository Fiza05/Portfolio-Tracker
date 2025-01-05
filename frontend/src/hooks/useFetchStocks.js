import { useState, useEffect } from "react";
import { fetchStockDetails } from "../services/api";

const useFetchStocks = (symbols) => {
  const [stockData, setStockData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!symbols || symbols.length === 0) return;

    const fetchAllStockDetails = async () => {
      try {
        const dataPromises = symbols.map((symbol) => fetchStockDetails(symbol));
        const dataResponses = await Promise.all(dataPromises);

        const formattedData = symbols.reduce((acc, symbol, index) => {
          acc[symbol] = dataResponses[index];
          return acc;
        }, {});
        setStockData(formattedData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllStockDetails();
  }, [symbols]); // Runs only once if symbols don’t change.

  return { stockData, loading, error };
};

export default useFetchStocks;
