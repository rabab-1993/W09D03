import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Register = () => {
  const [register, setRegister] = useState({
    email: "",
    password: "",
    role: "61a82ae32b8f8814ee629665",
  });

  const creatUser = async () => {
    try {
      const result = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/user/register`,
        register
      );
      console.log(result.data);
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
        onChange={(ev) => setRegister({ ...register, email: ev.target.value })}
      />
      <input
        type="password"
        name="pass"
        id=""
        placeholder="password"
        onChange={(ev) =>
          setRegister({ ...register, password: ev.target.value })
        }
      />
      <button onClick={creatUser}>Register</button>
    </div>
  );
};

export default Register;
