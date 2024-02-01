import "./App.css";
import React from "react";
import Home from "./pages/homepage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchResults from "./pages/search-results/SearchResults";
import Fiction from "./pages/books/Fiction";
import About from "./pages/about/About";
import Authors from "./pages/authors/Authors";
import Features from "./pages/features/Features";
import Submissions from "./pages/submissions/Submissions";
import Index from "./pages/terms-and-conditions/Index";
import Login from "./modals/login/Login";
import Submit from "./pages/submit-online/Submit";
import Submitted from "./pages/submitted/Submitted";
import Process from "./pages/publishing-process/Process";
import Signup from "./pages/signup/Signup";


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
          <Route path="/features" element={<Features />} />
          <Route path="/submissions" element={<Submissions />} />
          <Route path="/terms" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/submit-online" element={<Submit />} />
          <Route path="/submitted" element={<Submitted />} />
          <Route path="/publishing" element={<Process />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;