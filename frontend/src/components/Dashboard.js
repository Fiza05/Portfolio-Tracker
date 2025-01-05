import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import useFetchStocks from "../hooks/useFetchStocks";

const Dashboard = ({ stocks, symbols }) => {
  const { stockData, loading, error } = useFetchStocks(symbols);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Investment Dashboard
      </Typography>
      {loading && <CircularProgress />}
      {error && (
        <Typography color="error">
          Error fetching stock data: {error.message}
        </Typography>
      )}
      <Grid container spacing={2}>
        {stocks.map((stock, index) => {
          const { id, name, ticker, quantity, buyPrice } = stock;
          const currentPrice = stockData[ticker]?.["05. price"] || "N/A";
          const profitLoss =
            currentPrice !== "N/A"
              ? ((currentPrice - buyPrice) * quantity).toFixed(2)
              : "N/A";

          // Generate a guaranteed unique key using multiple identifiers
          const uniqueKey = id || `${ticker}-${index}`;

          return (
            <Grid item xs={12} sm={6} md={4} key={uniqueKey}>
              <Card>
                <CardContent>
                  <Typography variant="h6">{name}</Typography>
                  <Typography variant="body2">Ticker: {ticker}</Typography>
                  <Typography variant="body2">Quantity: {quantity}</Typography>
                  <Typography variant="body2">
                    Buy Price: ${buyPrice}
                  </Typography>
                  <Typography variant="body2">
                    Current Price:{" "}
                    {currentPrice !== "N/A" ? `$${currentPrice}` : "Loading..."}
                  </Typography>
                  <Typography
                    variant="body2"
                    color={profitLoss >= 0 ? "green" : "red"}
                  >
                    Profit/Loss:{" "}
                    {profitLoss !== "N/A" ? `$${profitLoss}` : "Calculating..."}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Dashboard;
