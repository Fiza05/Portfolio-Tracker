import React, { useReducer, useState } from "react";
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

const initialStockState = {
  name: "",
  ticker: "",
  quantity: 1,
  buyPrice: 0,
};

const stockReducer = (state, action) => {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialStockState;
    default:
      return state;
  }
};

const StockManager = ({ stocks, addStock, editStock, removeStock }) => {
  const [newStock, dispatch] = useReducer(stockReducer, initialStockState);
  const [editMode, setEditMode] = useState(null);
  const [editStockData, setEditStockData] = useState(initialStockState);

  const handleAdd = () => {
    if (newStock.name && newStock.ticker) {
      addStock(newStock);
      dispatch({ type: "RESET" });
    }
  };

  const handleEdit = (id) => {
    if (editStockData.name && editStockData.ticker) {
      editStock(id, editStockData);
      setEditMode(null);
    }
  };

  return (
    <Box mt={4}>
      <Box display="flex" gap={2} mb={2}>
        <TextField
          label="Stock Name"
          variant="outlined"
          value={newStock.name}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "name",
              value: e.target.value,
            })
          }
        />
        <TextField
          label="Ticker"
          variant="outlined"
          value={newStock.ticker}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "ticker",
              value: e.target.value,
            })
          }
        />
        <TextField
          label="Quantity"
          variant="outlined"
          type="number"
          value={newStock.quantity}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "quantity",
              value: Number(e.target.value),
            })
          }
        />
        <TextField
          label="Buy Price"
          variant="outlined"
          type="number"
          value={newStock.buyPrice}
          onChange={(e) =>
            dispatch({
              type: "SET_FIELD",
              field: "buyPrice",
              value: Number(e.target.value),
            })
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
                    setEditStockData(stock);
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
                  onChange={(e) =>
                    setEditStockData({
                      ...editStockData,
                      quantity: Number(e.target.value),
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
                  onChange={(e) =>
                    setEditStockData({
                      ...editStockData,
                      buyPrice: Number(e.target.value),
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
                primary={`${stock.name} (${stock.ticker}) - Quantity: ${stock.quantity}, Buy Price: ${stock.buyPrice}`}
              />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default StockManager;
