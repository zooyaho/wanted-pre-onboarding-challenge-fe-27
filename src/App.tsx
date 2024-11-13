import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ROUTES } from "./constants/routes";
import Providers from "./providers";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <Providers>
      <AppRoutes />
    </Providers>
  );
}

export default App;
