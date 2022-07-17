import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Configuration from "./pages/Configuration/Configuration";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Messages from "./pages/Messages/Messages";
import Administration from "./pages/Administration/Administration";
import Education from "./pages/Education/Education";
import Financial from "./pages/Financial/Financial";
import MobileSideBar from "./components/MobileSideBar/MobileSideBar";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <>
      <div className="App">
        <div className="App_container">
          <div className="nav">
            <MobileSideBar />
          </div>
          <Sidebar />
          <div className="main">
            <MobileHeader />
            <Routes>
              <Route path="home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/education" element={<Education />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/about" element={<About />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
