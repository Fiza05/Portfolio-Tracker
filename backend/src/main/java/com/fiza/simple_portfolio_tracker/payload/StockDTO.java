package com.fiza.simple_portfolio_tracker.payload;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StockDTO {
	 private Long id;

	    @NotEmpty(message = "Name cannot be empty.")
	    private String name;

	    @NotEmpty(message = "Ticker cannot be empty.")
	    private String ticker;

	    @NotNull(message = "Quantity cannot be null.")
	    @Min(value = 1, message = "Quantity must be at least 1.")
	    private Integer quantity;

	    @NotNull(message = "Buy price cannot be null.")
	    @Min(value = 0, message = "Buy price must be greater than or equal to 0.")
	    private Double buyPrice;

}
