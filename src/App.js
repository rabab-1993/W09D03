import { Routes, Route } from "react-router-dom";
import Home from "./Components/home /Home";
import Login from "./Components/login/LogIn";
import Register from "./Components/register/Register";
import Task from "./Components/tasks/Tasks";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Home />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/task" element={<Task />} />
      </Routes>
    </div>
  );
}

export default App;
