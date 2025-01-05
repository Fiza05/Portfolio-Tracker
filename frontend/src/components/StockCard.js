import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  CardActions,
  Divider,
  Skeleton,
} from "@mui/material";

const StockCard = ({ stock, stockData, onEdit, onDelete }) => {
  const { name, ticker, quantity, buyPrice } = stock;
  const currentPrice = stockData[ticker]?.["05. price"];
  const profitLoss =
    currentPrice !== undefined
      ? ((currentPrice - buyPrice) * quantity).toFixed(2)
      : null;
  const isProfit = profitLoss >= 0;

  return (
    <Box
      sx={{
        padding: { xs: 2, sm: 3 },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          width: "100%",
          maxWidth: 400,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: isProfit ? "#e8f5e9" : "#ffebee",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            sx={{ textAlign: "center" }}
          >
            {name}
          </Typography>
          <Divider sx={{ marginBottom: 2 }} />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body2">Ticker</Typography>
            <Typography variant="body2">{ticker}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body2">Quantity</Typography>
            <Typography variant="body2">{quantity}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body2">Buy Price</Typography>
            <Typography variant="body2">${buyPrice}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body2">Current Price</Typography>
            <Typography variant="body2">
              {currentPrice !== undefined ? (
                `$${currentPrice}`
              ) : (
                <Skeleton variant="text" width={50} />
              )}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 1,
            }}
          >
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Profit/Loss
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: isProfit ? "green" : "red" }}
            >
              {profitLoss !== null ? (
                `$${profitLoss}`
              ) : (
                <Skeleton variant="text" width={50} />
              )}
            </Typography>
          </Box>
        </CardContent>
        <CardActions
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="contained"
            size="small"
            color="primary"
            onClick={() => onEdit(stock)}
            sx={{ fontWeight: "bold" }}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            size="small"
            color="error"
            onClick={() => onDelete(stock)}
            sx={{ fontWeight: "bold" }}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default StockCard;
