import React from "react";
import { Header, AboutMe, Projects, Skills, Footer } from "./components/index";
const App = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 font-sans">
      <Header />
      <Projects />
      <AboutMe />
      <Skills />
      <Footer />
    </div>
  );
};

export default App;
