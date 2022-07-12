import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Configuration from "./pages/Configuration/Configuration";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./pages/Messages/Messages";
function App() {
  return (
    <div className="App">
      <div className="App_container">
        <Sidebar />
        <div className="main">
          <Routes>
            <Route path="home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/configuration" element={<Configuration />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
