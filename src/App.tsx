import React from "react";
import "./App.css";
import WheatherApp from "./pages/WheatherApp";
import Counter from "./pages/Counter";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/wheather" element={<WheatherApp />} />
          <Route
            path="/"
            element={
              <div>
                HOME
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <Link to="/wheather">Wheather App</Link>
                  </li>
                  <li>
                    <Link to="/counter">Counter</Link>
                  </li>
                </ul>
              </div>
            }
          />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<div>404 ERROR</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
