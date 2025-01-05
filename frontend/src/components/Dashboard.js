import React from "react";
import { Box, Typography, CircularProgress, Grid } from "@mui/material";
import StockCard from "./StockCard";
import ErrorDisplay from "./ErrorDisplay";
import useFetchStocks from "../hooks/useFetchStocks";

const Dashboard = ({ stocks, symbols }) => {
  const { stockData, loading, error } = useFetchStocks(symbols);

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Investment Dashboard
      </Typography>
      {loading && <CircularProgress />}
      {error && (
        <ErrorDisplay message={`Error fetching stock data: ${error.message}`} />
      )}
      <Grid container spacing={3}>
        {stocks.map((stock, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={stock.id || `${stock.ticker}-${index}`}
          >
            <StockCard stock={stock} stockData={stockData} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
