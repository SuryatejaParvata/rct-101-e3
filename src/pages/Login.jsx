import React, { useState } from "react";
// import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [loginCreds, setLoginCreds] = useState({});
    const onChange = (e) => {
      const { name, value } = e.target;
      setLoginCreds({ ...loginCreds, [name]: value });
    };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    // }

  return (
    <div>
      <input data-cy="login-email" placeholder="" name="email" type="email" onChange={onChange} />
      <input data-cy="login-password" name="password" type="password" onChange={onChange} />
      <button data-cy="login-submit" type="submit" >Login</button>
    </div>
  );
};

export default Login;
