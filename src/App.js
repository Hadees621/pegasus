import "./App.css";
import React from "react";
import Home from "./pages/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/search-results/SearchResults";
import Fiction from "./pages/books/Fiction";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/about" element={<About />} />
          <Route path="/authors" element={<Authors />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;