import React from "react";
import { About } from "./sections/about";
import { Projects } from "./sections/projects";
import "./App.css";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ul className="nav">
          <li>Home</li>
          <li>Projects</li>
          <li>About Anne</li>
        </ul>
      </header>
      <Projects></Projects>
      <About></About>
    </div>
  );
}
// End of function

export default App;
