import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
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
