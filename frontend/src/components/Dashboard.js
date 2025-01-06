import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StockCard from "./StockCard";
import ErrorDisplay from "./ErrorDisplay";
import useFetchStocks from "../hooks/useFetchStocks";
import ResponsivePopupForm from "./ResponsivePopupForm";

const Dashboard = ({ stocks, addStock, editStock, removeStock, symbols }) => {
  const { stockData, error } = useFetchStocks(symbols);

  const [open, setOpen] = useState(false);
  const [editingStock, setEditingStock] = useState(null);

  const handleOpen = () => {
    setEditingStock(null); // Adding a new stock
    setOpen(true);
  };

  const handleEdit = (stock) => {
    setEditingStock(stock); // Editing an existing stock
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingStock(null);
  };

  const handleSubmit = (newStock) => {
    if (editingStock) {
      // Update stock
      debugger;
      editStock(newStock.id, newStock);
    } else {
      // Add new stock
      addStock(newStock);
    }
    handleClose();
  };

  const handleDelete = (stockToDelete) => {
    removeStock(stockToDelete.id);
    handleClose();
  };

  return (
    <Box mt={4}>
      <Typography variant="h3" align="center" gutterBottom>
        Portfolio Tracker
      </Typography>

      {error && (
        <ErrorDisplay message={`Error fetching stock data: ${error.message}`} />
      )}

      <Grid container spacing={3}>
        {stocks.map((stock, index) => (
          <Grid
            item
            size={{ xs: 12, sm: 6, md: 4, lg: 4 }}
            key={stock.id || `${stock.ticker}-${index}`}
          >
            <StockCard
              stock={stock}
              stockData={stockData}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </Grid>
        ))}
        <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 4 }}>
          <Button variant="outlined" sx={{ margin: 3 }} onClick={handleOpen}>
            Add New Stock
          </Button>
        </Grid>
      </Grid>
      <ResponsivePopupForm
        open={open}
        handleClose={handleClose}
        stock={editingStock}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};

export default Dashboard;
