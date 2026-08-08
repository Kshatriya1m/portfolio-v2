import Header from "./components/Header";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

const name = "Mayank Chauhan";
const email = "chauhanmayank.009.m@gmail.com";
const imgurl = "new-profile-image-generated.png";
const tel = "+917465942719";

function App() {
  const [mode, setMode] = useState("light");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#003049";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#e5e5e5";
    }
  };

  return (
    <>
      {/* Header + Navbar Stay Same on All Pages */}
      <Header email={email} tel={tel} mode={mode} togglemode={togglemode} />
      <Navbar title={name} email={email} mode={mode} />

      {/* Router Pages */}
      <Routes>
        <Route
          path="/"
          element={
            <Home imgurl={imgurl} name={name} email={email} mode={mode} />
          }
        />

        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/projects" element={<Projects mode={mode} />} />
        <Route path="/experience" element={<Experience mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
