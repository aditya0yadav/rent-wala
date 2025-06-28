import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePageDesktop } from "./screens/HomePageDesktop";
import { PropertiesPage } from "./screens/PropertiesPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/properties" element={<PropertiesPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);