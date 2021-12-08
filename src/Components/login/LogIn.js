import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logIn } from "../reducers/login";

const Login = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [logUser, setLogUser] = useState({
    email: "",
    password: "",
  });
  let toTaskPage = () => {
    navigate("/task");
  };
  const login = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/login`,
        logUser
      );

      const data = {
        token: result.data.token,
        user: result.data.result.user._id,
      };
      console.log(data);
      dispatch(logIn(data));
      toTaskPage();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input
        type="email"
        name="email"
        id=""
        placeholder="email"
        onChange={(ev) => setLogUser({ ...logUser, email: ev.target.value })}
      />
      <input
        type="password"
        name="pass"
        id=""
        placeholder="password"
        onChange={(ev) => setLogUser({ ...logUser, password: ev.target.value })}
      />
      <button onClick={login}>LogIn</button>
    </div>
  );
};

export default Login;
