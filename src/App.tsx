import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePageDesktop } from "./screens/HomePageDesktop";
import { PropertiesPage } from "./screens/PropertiesPage";
import { AboutPage } from "./screens/AboutPage";
import { ServicesPage } from "./screens/ServicesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageDesktop />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  );
}

export default App;