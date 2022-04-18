import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import MainRoute from "./MainRoute";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <BrowserRouter>
          <MainRoute />
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  );
}

export default App;
