import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState();
  const [isLog, setIsLog] = useState();
  const state = useSelector((state) => {
    return state;
  });

  
  useEffect(() => {
    let userid = localStorage.getItem("id");
    if (userid) {
      setIsLog(true);
      setUser(userid);
    } else {
      setIsLog(false);
    }
  }, []);

  // Navigate function to sign up page
  let toRegisterPage = () => {
    navigate("/register");
  };

  // Navigate function to login page
  let toLogInPage = () => {
    navigate("/login");
  };

  // Navigate function to remind page
  let toTaskPage = () => {
    navigate("/");
  };

  const logOut = () => {
    localStorage.clear();
    navigate("/");
    // window.location.reload(false);
  };

  return (
    <div>
      {user ? (
        <nav>
          <Link to="/login" onClick={logOut}>
            logOut
          </Link>
          <Link to="/task" onClick={toTaskPage}>
            Tasks
          </Link>
        </nav>
      ) : (
        <nav>
          <Link to="/register" onClick={toRegisterPage}>
            Register
          </Link>
          <Link to="/login" onClick={toLogInPage}>
            login
          </Link>
        </nav>
      )}
    </div>
  );
};

export default Home;
