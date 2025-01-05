import React, { useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import useStockManager from "./hooks/useStockManager";
import StockManager from "./components/StockManager";
import Dashboard from "./components/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import ErrorDisplay from "./components/ErrorDisplay";

const App = () => {
  const { stocks, loading, error, addStock, editStock, removeStock } =
    useStockManager();

  const symbols = useMemo(() => stocks.map((stock) => stock.ticker), [stocks]);

  return (
    <>
      <CssBaseline />
      <Container>
        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <ErrorDisplay message={error.message} />
        ) : (
          <>
            <StockManager
              stocks={stocks}
              addStock={addStock}
              editStock={editStock}
              removeStock={removeStock}
            />
            <Dashboard stocks={stocks} symbols={symbols} />
          </>
        )}
      </Container>
    </>
  );
};

export default App;
