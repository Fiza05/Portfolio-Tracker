import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import { STOCKS } from "../utils/constants";

const ResponsivePopupForm = ({ open, handleClose, stock, onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    ticker: "",
    quantity: "",
    buyPrice: "",
  });

  useEffect(() => {
    if (stock) {
      setFormData(stock);
    } else {
      setFormData({
        name: "",
        ticker: "",
        quantity: "",
        buyPrice: "",
      });
    }
  }, [stock]);

  const handleNameChange = (e) => {
    const selectedName = e.target.value;
    const selectedStock = STOCKS.find((s) => s.name === selectedName);

    setFormData((prev) => ({
      ...prev,
      name: selectedName,
      ticker: selectedStock?.ticker || "",
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onSubmit(formData);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>{stock ? "Edit Stock" : "Add Stock"}</DialogTitle>
      <DialogContent>
        {/* Name Dropdown for Add Mode, Locked for Edit Mode */}
        <FormControl fullWidth margin="normal">
          <InputLabel id="name-label">Name</InputLabel>
          <Select
            labelId="name-label"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleNameChange}
            disabled={!!stock} // Disable dropdown in edit mode
            label="Name"
          >
            {STOCKS.map((stockOption) => (
              <MenuItem key={stockOption.ticker} value={stockOption.name}>
                {stockOption.name} ({stockOption.ticker})
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Choose a stock name</FormHelperText>
        </FormControl>

        {/* Ticker Field */}
        <TextField
          fullWidth
          margin="normal"
          label="Ticker"
          name="ticker"
          value={formData.ticker}
          onChange={handleChange}
          disabled // Ticker is auto-selected, so it is always disabled
        />

        {/* Quantity Field */}
        <TextField
          fullWidth
          margin="normal"
          label="Quantity"
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
        />

        {/* Buy Price Field */}
        <TextField
          fullWidth
          margin="normal"
          label="Buy Price"
          type="number"
          name="buyPrice"
          value={formData.buyPrice}
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ResponsivePopupForm;
