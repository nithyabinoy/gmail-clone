import React from "react";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mail from "./components/mail/Mail";
import EmailList from "./components/mail/EmailList";
import "./App.css";
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route path="/" element={<EmailList />}></Route>
            <Route path="/mail" element={<Mail />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
