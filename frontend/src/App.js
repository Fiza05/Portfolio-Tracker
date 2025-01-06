import React, { useMemo } from "react";
import { Container, CssBaseline } from "@mui/material";
import useStockManager from "./hooks/useStockManager";
import Dashboard from "./components/Dashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { stocks, loading, addStock, editStock, removeStock } =
    useStockManager();

  const symbols = useMemo(() => stocks.map((stock) => stock.ticker), [stocks]);

  return (
    <>
      <CssBaseline />
      <Container>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <>
            <Dashboard
              stocks={stocks}
              addStock={addStock}
              editStock={editStock}
              removeStock={removeStock}
              symbols={symbols}
            />
          </>
        )}
      </Container>
      <ToastContainer />
    </>
  );
};

export default App;
