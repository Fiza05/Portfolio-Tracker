package com.fiza.simple_portfolio_tracker.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fiza.simple_portfolio_tracker.entity.Stock;

public interface StockRepo extends JpaRepository<Stock, Long> {	

}
