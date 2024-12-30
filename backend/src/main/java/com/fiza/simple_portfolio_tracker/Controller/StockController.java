package com.fiza.simple_portfolio_tracker.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fiza.simple_portfolio_tracker.Service.StockService;
import com.fiza.simple_portfolio_tracker.entity.Stock;
import com.fiza.simple_portfolio_tracker.payload.StockDTO;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/stocks")
public class StockController {

	@Autowired
	private StockService stockService;

	@PostMapping("/")
	public ResponseEntity<StockDTO> createStock(@Valid @RequestBody StockDTO stockDTO) {
		StockDTO createdstockStockDTO = this.stockService.addStock(stockDTO);
		return new ResponseEntity<StockDTO>(createdstockStockDTO, HttpStatus.CREATED);

	}

	@GetMapping("/")
	public ResponseEntity<List<StockDTO>> getAllStocks() {
		List<StockDTO> allStocks = this.stockService.getAllStocks();
		return new ResponseEntity<List<StockDTO>>(allStocks, HttpStatus.OK);
	}

	@PutMapping("/{stockId}")
	public ResponseEntity<StockDTO> updateStock(@Valid @RequestBody StockDTO stockDTO, @PathVariable Long stockId) {
		StockDTO upadtedStockStockDTO = this.stockService.updateStock(stockId, stockDTO);
		return new ResponseEntity<StockDTO>(upadtedStockStockDTO, HttpStatus.OK);
	}

	@DeleteMapping("/{stockId}")
	public ResponseEntity<?> deleteStock(@PathVariable Long stockId) {
		this.stockService.deleteStock(stockId);
		Map<String, String> responseMessage = new HashMap<String, String>();
		responseMessage.put("message", "Stock deleted successfully!!!");
		return new ResponseEntity<>(responseMessage, HttpStatus.OK);
	}

}
