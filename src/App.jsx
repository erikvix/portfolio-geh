import React from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/Section/Section";
import SobreMim from "./components/SobreMim";
import Processo from "./components/Processo";
import Feedback from "./components/Feedback";
import Projetos from "./components/Projetos"

function App() {
  return (
    <div className="">
      <Header />
      <Section />
      <SobreMim />
      <Processo />
      <Feedback />
      <Projetos/>
    </div>
  );
}

export default App;
