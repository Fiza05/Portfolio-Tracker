import React, { useMemo } from "react";
import { Container } from "@mui/material";
import useStockManager from "./hooks/useStockManager";
import StockManager from "./components/StockManager";
import Dashboard from "./components/Dashboard";

const App = () => {
  const { stocks, loading, error, addStock, editStock, removeStock } =
    useStockManager();

  const symbols = useMemo(() => stocks.map((stock) => stock.ticker), [stocks]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Container>
      <StockManager
        stocks={stocks}
        addStock={addStock}
        editStock={editStock}
        removeStock={removeStock}
      />
      <Dashboard stocks={stocks} symbols={symbols} />
    </Container>
  );
};

export default App;
