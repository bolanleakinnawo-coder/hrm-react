import React from "react";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Book from "./Pages/Book";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </div>
  );
};

export default App;
