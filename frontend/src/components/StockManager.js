import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const StockManager = ({ stocks, addStock, editStock, removeStock }) => {
  const [newStock, setNewStock] = useState({
    name: "",
    ticker: "",
    quantity: 1,
    buyPrice: 0,
  });
  const [editMode, setEditMode] = useState(null);
  const [editStockData, setEditStockData] = useState({
    name: "",
    ticker: "",
    quantity: 1,
    buyPrice: 0,
  });

  const handleAdd = () => {
    addStock(newStock);
    setNewStock({ name: "", ticker: "" });
  };

  const handleEdit = (id) => {
    editStock(id, editStockData);
    setEditMode(null);
  };

  return (
    <Box>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Stock Name"
          variant="outlined"
          value={newStock.name}
          onChange={(e) => setNewStock({ ...newStock, name: e.target.value })}
        />
        <TextField
          label="Ticker"
          variant="outlined"
          value={newStock.ticker}
          onChange={(e) => setNewStock({ ...newStock, ticker: e.target.value })}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          value={newStock.quantity}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          onChange={(e) =>
            setNewStock({ ...newStock, quantity: e.target.value })
          }
        />
        <TextField
          label="Buy Price"
          variant="outlined"
          type="number"
          value={newStock.buyPrice}
          slotProps={{
            inputLabel: {
              shrink: true,
            },
          }}
          onChange={(e) =>
            setNewStock({ ...newStock, buyPrice: e.target.value })
          }
        />
        <Button variant="contained" color="primary" onClick={handleAdd}>
          Add Stock
        </Button>
      </Box>

      <List>
        {stocks.map((stock) => (
          <ListItem
            key={stock.id}
            secondaryAction={
              <>
                <IconButton
                  edge="end"
                  color="primary"
                  onClick={() => {
                    setEditMode(stock.id);
                    setEditStockData({
                      name: stock.name,
                      ticker: stock.ticker,
                      quantity: stock.quantity,
                      buyPrice: stock.buyPrice,
                    });
                  }}
                >
                  <Edit />
                </IconButton>
                <IconButton
                  edge="end"
                  color="secondary"
                  onClick={() => removeStock(stock.id)}
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            {editMode === stock.id ? (
              <>
                <TextField
                  label="Name"
                  variant="outlined"
                  value={editStockData.name}
                  onChange={(e) =>
                    setEditStockData({ ...editStockData, name: e.target.value })
                  }
                  size="small"
                  sx={{ mr: 2 }}
                />
                <TextField
                  label="Ticker"
                  variant="outlined"
                  value={editStockData.ticker}
                  onChange={(e) =>
                    setEditStockData({
                      ...editStockData,
                      ticker: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ mr: 2 }}
                />
                <TextField
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  value={editStockData.quantity}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  onChange={(e) =>
                    setEditStockData({
                      ...editStockData,
                      quantity: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ mr: 2 }}
                />
                <TextField
                  label="Buy Price"
                  variant="outlined"
                  type="number"
                  value={editStockData.buyPrice}
                  slotProps={{
                    inputLabel: {
                      shrink: true,
                    },
                  }}
                  onChange={(e) =>
                    setEditStockData({
                      ...editStockData,
                      buyPrice: e.target.value,
                    })
                  }
                  size="small"
                  sx={{ mr: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleEdit(stock.id)}
                >
                  Save
                </Button>
              </>
            ) : (
              <ListItemText
                primary={`${stock.name} (${stock.ticker}) ${stock.quantity} ${stock.buyPrice}`}
                primaryTypographyProps={{ fontWeight: "bold" }}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StockManager;
