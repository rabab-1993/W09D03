import { Routes, Route } from "react-router-dom";
import Home from "./Components/home/Home";
import Login from "./Components/login/Login";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
