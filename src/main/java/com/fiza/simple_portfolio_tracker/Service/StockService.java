package com.fiza.simple_portfolio_tracker.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.fiza.simple_portfolio_tracker.Repository.StockRepo;
import com.fiza.simple_portfolio_tracker.entity.Stock;
import com.fiza.simple_portfolio_tracker.payload.StockDTO;

public interface StockService {

     List<StockDTO> getAllStocks();

    StockDTO addStock(StockDTO stock);

    StockDTO updateStock(Long id, StockDTO updatedStock);

     void deleteStock(Long id);
}
