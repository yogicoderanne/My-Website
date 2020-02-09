import React from "react";
import "./about.css";

// Function gets defined in this module, pushed (hoisted) to the top and exported

export function About() {
  return (
    <div className="about">
      <h2>About</h2>
      <p>WRITE STUFF HERE</p>
    </div>
  );
}

// default (bad practice) or const = constant, variable that can't be changed once defined
