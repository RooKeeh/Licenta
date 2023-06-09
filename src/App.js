import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
