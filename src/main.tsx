import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ScrollToHash from "./components/ScrollToHash";
import App from "@/App";
import "@/index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/Landing-React-App">
      <ScrollToHash />
      <App/>
    </BrowserRouter>
  </StrictMode>
)


