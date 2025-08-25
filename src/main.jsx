import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./App.css";
import { CartProvider } from "./stores/context/CartContext.jsx";
import { SearchProvider } from "./stores/context/SearchContext.jsx"; // ✅ import SearchProvider

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/REACT-TRENDIO">
      <CartProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
