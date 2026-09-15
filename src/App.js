import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import RecentWork from "./pages/RecentWork";
import Certification from "./pages/Certification";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={
            <Layout>
            <Home />
            <About />
            <RecentWork />
            <Experience />
            <Education />
            <Certification />
          </Layout>
          }/>
          <Route path="/contact" element={
              <Layout>
                <Contact />
              </Layout>
            }/>
          <Route/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
