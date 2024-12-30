import { Button } from "@mui/material";
import useFetchStock from "./hooks/useFetchStock";
function App() {
  const { stockData, loading, error } = useFetchStock("IBM");
  console.log("data", stockData);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <div>{JSON.stringify(stockData)}</div>
    </div>
  );
}

export default App;
