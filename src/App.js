import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Journal from "./components/Journal";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Journal />
      <Footer />
    </div>
  );
}

export default App;
