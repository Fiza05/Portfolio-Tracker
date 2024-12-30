package com.fiza.simple_portfolio_tracker.service.implementation;

import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fiza.simple_portfolio_tracker.Repository.StockRepo;
import com.fiza.simple_portfolio_tracker.entity.Stock;
import com.fiza.simple_portfolio_tracker.exception.ResourceNotFoundException;
import com.fiza.simple_portfolio_tracker.payload.StockDTO;
import com.fiza.simple_portfolio_tracker.service.StockService;

@Service
public class StockServiceImpl implements StockService {

	@Autowired
	private StockRepo stockrepo;
	@Autowired
	private ModelMapper modelMapper;

	@Override
	public List<StockDTO> getAllStocks() {
		List<Stock> allstocks = this.stockrepo.findAll();
		List<StockDTO> stockDtos = allstocks.stream().map(stock -> this.stockToDto(stock)).collect(Collectors.toList());
		return stockDtos;

	}

	@Override
	public StockDTO addStock(StockDTO stockdto) {
		Stock stock = this.DTOtoStock(stockdto);
		Stock addedstocks = this.stockrepo.save(stock);
		return this.stockToDto(addedstocks);

	}

	@Override
	public StockDTO updateStock(Long id, StockDTO updatedStock) {
		Stock stock = this.stockrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stock", "stockid", id));
		stock.setName(updatedStock.getName());
		stock.setBuyPrice(updatedStock.getBuyPrice());
		stock.setQuantity(updatedStock.getQuantity());
		stock.setTicker(updatedStock.getTicker());
		Stock newlyupdatdStock = this.stockrepo.save(stock);
		StockDTO newlyupdatedstock1 = this.stockToDto(newlyupdatdStock);
		return newlyupdatedstock1;
	}

	@Override
	public void deleteStock(Long id) {
		Stock stock = this.stockrepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Stock", "stockid", id));
		this.stockrepo.delete(stock);

	}

	private StockDTO stockToDto(Stock stock) {
		StockDTO stockDTO = this.modelMapper.map(stock, StockDTO.class);
		return stockDTO;
	}

	private Stock DTOtoStock(StockDTO stockdto) {
		Stock stock = this.modelMapper.map(stockdto, Stock.class);
		return stock;

	}

}
