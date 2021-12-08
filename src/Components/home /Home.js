import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  // Navigate function to login page
  let toLogInPage = () => {
    navigate("/login");
  };
  return (
    <div className="home">
      <nav>
        <Link to="/login" onClick={toLogInPage}>
          login
        </Link>
      </nav>
    </div>
  );
};

export default Home;
