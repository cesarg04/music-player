import { BrowserRouter } from "react-router-dom";
import MainRouter from "./router/index.router";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  )
}

export default App;
