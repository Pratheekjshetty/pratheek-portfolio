import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RecentWork from "./pages/RecentWork";
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
