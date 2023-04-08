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
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Routes>
      </div>
    </>
  );
}

export default App;
