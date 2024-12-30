package com.fiza.simple_portfolio_tracker.service;

import java.util.List;
import com.fiza.simple_portfolio_tracker.payload.StockDTO;

public interface StockService {

     List<StockDTO> getAllStocks();

     StockDTO addStock(StockDTO stock);

     StockDTO updateStock(Long id, StockDTO updatedStock);

     void deleteStock(Long id);
}
