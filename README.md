# Portfolio Tracker

A full-stack application for tracking your stock portfolio investments with real-time price updates. Monitor your investments, track profit/loss, and manage your stock holdings through an intuitive user interface backed by a robust Spring Boot backend.

## 🌐 Live Demo

[Live Demo](https://fiza-portfolio-tracker.netlify.app)

_Note: Please be aware of API rate limits when testing the live demo (25 API calls per day per IP)._

## ✨ Features

- Real-time stock price tracking using Alpha Vantage API
- Complete CRUD operations for portfolio management
- Calculate profit/loss for each position
- Color-coded cards showing profit/loss status
- Responsive design that works on desktop and mobile
- Input validation with helpful error messages
- Toast notifications for user actions
- Pre-populated list of popular stocks
- Cross-origin resource sharing (CORS) enabled
- Exception handling with appropriate HTTP status codes
- Docker support for easy deployment

## 🛠️ Tech Stack

### Frontend

- React.js
- Material-UI (MUI)
- Axios
- React-Toastify

### Backend

- Java 17
- Spring Boot 3.4.1
- MySQL Database
- Maven
- Docker
- Lombok
- ModelMapper
- JPA / Hibernate

## 📋 Prerequisites

- Node.js (v14 or higher)
- Java 17 or higher
- MySQL 8.0 or higher
- Maven 3.x
- Docker (optional)

## 🚀 Installation and Setup

### Backend Setup

1. Navigate to the backend directory:

```bash
cd backend
```

2. Configure MySQL database:

   - Create a database named `simple_portfolio_tracker`
   - Update `application.properties` with your database credentials

3. Build and run the application:

```bash
mvn clean package
mvn spring-boot:run
```

Or using Docker:

```bash
docker build -t portfolio-tracker-backend .
docker run -p 8080:8080 portfolio-tracker-backend
```

### Frontend Setup

1. Navigate to the frontend directory:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file:

```env
REACT_APP_API_KEY=your_alphavantage_api_key
REACT_APP_BASE_URL=http://localhost:8080
```

4. Start the development server:

```bash
npm start
```

## 🌲 Project Structure

```
portfolio-tracker/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── services/
│   │   └── utils/
│   └── package.json
│
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/fiza/simple_portfolio_tracker/
│   │   │   │       ├── controller/
│   │   │   │       ├── service/
│   │   │   │       ├── entity/
│   │   │   │       ├── repository/
│   │   │   │       └── exception/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
│
└── README.md
```

## 🔄 API Endpoints

### Stocks API (`/api/stocks`)

| Method | Endpoint              | Description                 |
| ------ | --------------------- | --------------------------- |
| GET    | /api/stocks           | Get all stocks in portfolio |
| POST   | /api/stocks           | Add a new stock             |
| PUT    | /api/stocks/{stockId} | Update an existing stock    |
| DELETE | /api/stocks/{stockId} | Delete a stock              |

## ⚙️ Environment Variables

### Backend

- `DB_HOST` - Database host (default: localhost)
- `DB_PORT` - Database port (default: 3306)
- `DB_NAME` - Database name (default: simple_portfolio_tracker)
- `DB_USER` - Database username
- `DB_PASSWORD` - Database password

### Frontend

- `REACT_APP_API_KEY` - Alpha Vantage API key
- `REACT_APP_BASE_URL` - Backend API URL

## 🙏 Acknowledgments

- [Alpha Vantage](https://www.alphavantage.co/) for providing stock market data
- [Material-UI](https://mui.com/) for the component library
- [React-Toastify](https://fkhadra.github.io/react-toastify/) for notifications
