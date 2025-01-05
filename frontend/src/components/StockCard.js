import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const StockCard = ({ stock, stockData }) => {
  const { name, ticker, quantity, buyPrice } = stock;
  const currentPrice = stockData[ticker]?.["05. price"] || "N/A";
  const profitLoss =
    currentPrice !== "N/A"
      ? ((currentPrice - buyPrice) * quantity).toFixed(2)
      : "N/A";

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">Ticker: {ticker}</Typography>
        <Typography variant="body2">Quantity: {quantity}</Typography>
        <Typography variant="body2">Buy Price: ${buyPrice}</Typography>
        <Typography variant="body2">
          Current Price:{" "}
          {currentPrice !== "N/A" ? `$${currentPrice}` : "Loading..."}
        </Typography>
        <Typography variant="body2" color={profitLoss >= 0 ? "green" : "red"}>
          Profit/Loss:{" "}
          {profitLoss !== "N/A" ? `$${profitLoss}` : "Calculating..."}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default StockCard;
