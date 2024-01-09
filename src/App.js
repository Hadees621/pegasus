import "./App.css";
import React from "react";
import Home from "./pages/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/search-results/SearchResults";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          {/* <Route path="/sign-up" element={<Register />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;