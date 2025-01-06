# Simple Portfolio Tracker

A Spring Boot application that provides REST APIs to manage and track stock portfolio investments. This application allows users to create, read, update, and delete stock entries in their portfolio.

## Technologies Used

- Java 17
- Spring Boot 3.4.1
- MySQL Database
- Maven
- Docker
- Lombok
- ModelMapper
- JPA / Hibernate

## Features

- CRUD operations for managing stocks in portfolio
- Input validation with helpful error messages
- Cross-origin resource sharing (CORS) enabled
- Exception handling with appropriate HTTP status codes
- Docker support for containerization

## Prerequisites

- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.x
- Docker (optional)

## Setup and Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd simple-portfolio-tracker
   ```

2. **Configure MySQL database**

   - Create a MySQL database named `simple_portfolio_tracker`
   - Update `application.properties` if needed:
     ```properties
     spring.datasource.username=your_username
     spring.datasource.password=your_password
     ```

3. **Build the application**

   ```bash
   mvn clean package
   ```

4. **Run the application**

   Using Maven:

   ```bash
   mvn spring-boot:run
   ```

   Using Java:

   ```bash
   java -jar target/simple-portfolio-tracker-0.0.1-SNAPSHOT.jar
   ```

   Using Docker:

   ```bash
   docker build -t simple-portfolio-tracker .
   docker run -p 8080:8080 simple-portfolio-tracker
   ```

## API Endpoints

### Stocks API (`/api/stocks`)

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| GET    | /api/stocks           | Get all stocks in portfolio |
| POST   | /api/stocks           | Add a new stock             |
| PUT    | /api/stocks/{stockId} | Update an existing stock    |
| DELETE | /api/stocks/{stockId} | Delete a stock              |

### Request/Response Format

**Stock DTO Structure:**

```json
{
  "id": "long",
  "name": "string",
  "ticker": "string",
  "quantity": "integer",
  "buyPrice": "double"
}
```

## Validation Rules

- Stock name cannot be empty
- Ticker symbol cannot be empty
- Quantity must be at least 1
- Buy price must be greater than or equal to 0

## Project Structure

```
src/main/java/com/fiza/simple_portfolio_tracker/
├── SimplePortfolioTrackerApplication.java
├── controller/
│   └── StockController.java
├── service/
│   ├── StockService.java
│   └── implementation/
│       └── StockServiceImpl.java
├── entity/
│   └── Stock.java
├── Repository/
│   └── StockRepo.java
├── payload/
│   └── StockDTO.java
└── exception/
    ├── GlobalExceptionHandler.java
    └── ResourceNotFoundException.java
```

## Environment Variables

The application supports the following environment variables:

- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 3306)
- `DB_NAME` - Database name (default: simple_portfolio_tracker)
- `DB_USER` - Database username (default: root)
- `DB_PASSWORD` - Database password (default: password)
