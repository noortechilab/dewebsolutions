import React, { useState, useEffect } from "react";

import HomePage from "./components/HomePage";
import Header from "../src/Header.js";
import Footer from "../src/Footer.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogPage from "./components/pages/BlogPage";
const App = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/blog" element={<BlogPage />} exact />
        </Routes>

        <Footer />
      </Router>
    </>
  );
};

export default App;
