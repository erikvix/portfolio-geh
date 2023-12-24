import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section/Section";
import SobreMim from "./components/SobreMim";
import Processo from "./components/Processo";
function App() {
  return (
    <div className="">
      <Header />
      <Section />
      <SobreMim />
      <Processo />
    </div>
  );
}

export default App;
