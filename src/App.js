import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggedinState } from "./recoil/atom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Configuration from "./pages/Configuration/Configuration";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Sidebar from "./components/Sidebar/Sidebar";
import Administration from "./pages/Administration/Administration";
import Education from "./pages/Education/Education";
import Financial from "./pages/Financial/Financial";
import MobileSideBar from "./components/MobileSideBar/MobileSideBar";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Inbox from "./pages/Messages/Inbox/Inbox";
import Outbox from "./pages/Messages/Outbox/Outbox";
import Deleted from "./pages/Messages/Deleted/Deleted";
import Favorite from "./pages/Messages/Favorite/Favorite";
import Students from "./pages/Students/Students";
import Teachers from "./pages/Teachers/Teachers";
import Parents from "./pages/Parents/Parents";
import Circles from "./pages/Circles/Circles";
import Login from "./pages/Login/Login";
import ElectronicReader from "./pages/ElectronicReader/ElectronicReader";
import StudentsReports from "./pages/StudentsReports/StudentsReports";
import StudentsDetailedReport from "./pages/StudentsDetailedReport/StudentsDetailedReport";
import StudentsGlobalCheckReport from "./pages/StudentsGlobalCheckReport/StudentsGlobalCheckReport";
import StudentStatistics from "./pages/StudentStatistics/StudentStatistics";
function App() {
  const [loggedin] = useRecoilState(loggedinState);
  if (!loggedin) {
    return (
      <div className="main">
        <MobileHeader />
        <Login />
      </div>
    );
  }
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
              <Route path="login" element={<Login />} />
              <Route path="home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/education" element={<Education />} />
              <Route path="/financial" element={<Financial />} />
              <Route path="/about" element={<About />} />
              <Route path="/configuration" element={<Configuration />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/messages/inbox" element={<Inbox />} />
              <Route path="/messages/outbox" element={<Outbox />} />
              <Route path="/messages/deleted" element={<Deleted />} />
              <Route path="/messages/favorite" element={<Favorite />} />
              <Route path="/students" element={<Students />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/parents" element={<Parents />} />
              <Route path="/circles" element={<Circles />} />
              <Route path="/electronicreader" element={<ElectronicReader />} />
              <Route path="studentsreports" element={<StudentsReports />} />
              <Route
                path="studentsreports/studentsdetailedreport"
                element={<StudentsDetailedReport />}
              />
              <Route
                path="studentsreports/studentsglobalcheckreport"
                element={<StudentsGlobalCheckReport />}
              />
              <Route
                path="/studentsstatistics"
                element={<StudentStatistics />}
              />

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
