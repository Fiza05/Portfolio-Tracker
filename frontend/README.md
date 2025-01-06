# Portfolio Tracker

A modern React application for tracking your stock portfolio performance in real-time. Monitor your investments, track profit/loss, and manage your stock holdings with an intuitive user interface.

## Features

- Real-time stock price tracking using Alpha Vantage API
- Add, edit, and remove stocks from your portfolio
- Calculate profit/loss for each position
- Color-coded cards showing profit/loss status
- Responsive design that works on desktop and mobile
- Loading states and error handling
- Toast notifications for user actions
- Pre-populated list of popular stocks for easy selection

## Technologies Used

- React.js
- Material-UI (MUI) for styling and components
- Axios for API requests
- React-Toastify for notifications
- Alpha Vantage API for real-time stock data

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/portfolio-tracker.git
cd portfolio-tracker
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_API_KEY=your_alphavantage_api_key
REACT_APP_BASE_URL=your_backend_api_url
```

4. Start the development server:

```bash
npm start
# or
yarn start
```

## Environment Variables

- `REACT_APP_API_KEY`: Your Alpha Vantage API key
- `REACT_APP_BASE_URL`: Backend API URL for storing portfolio data

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Dashboard.js
│   │   ├── LoadingSpinner.js
│   │   ├── ResponsivePopupForm.js
│   │   ├── StockCard.js
│   ├── hooks/
│   │   ├── useFetchStocks.js
│   │   └── useStockManager.js
│   ├── services/
│   │   ├── api.js
│   │   └── stockService.js
│   ├── utils/
│   │   └── constants.js
│   ├── App.js         # Root component
```

## Usage

1. Launch the application
2. Click "Add New Stock" to add a stock to your portfolio
3. Select a stock from the pre-populated list
4. Enter the quantity and buy price
5. View real-time profit/loss calculations
6. Edit or delete stocks as needed

## API Rate Limits

The Alpha Vantage API has rate limits:

- 25 API calls per day

The application includes error handling for rate limit cases.

## Acknowledgments

- [Alpha Vantage](https://www.alphavantage.co/) for providing stock market data
- [Material-UI](https://mui.com/) for the component library
- [React-Toastify](https://fkhadra.github.io/react-toastify/) for notifications
