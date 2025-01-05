import React, { useState } from "react";
import { Box, Typography, CircularProgress, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import StockCard from "./StockCard";
import ErrorDisplay from "./ErrorDisplay";
import useFetchStocks from "../hooks/useFetchStocks";
import ResponsivePopupForm from "./ResponsivePopupForm";

const Dashboard = ({ stocks, addStock, editStock, removeStock, symbols }) => {
  const { stockData, loading, error } = useFetchStocks(symbols);

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
            xs={12} // Full width on extra small screens
            sm={6} // Half width on small screens
            md={4} // Third width on medium screens
            lg={3} // Quarter width on large screens
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
      </Grid>
      <Button variant="outlined" sx={{ marginTop: 3 }} onClick={handleOpen}>
        Add New Stock
      </Button>
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
