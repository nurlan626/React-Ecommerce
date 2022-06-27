import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { login } from "../../redux/user";
import { useAuth } from "../context/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  const handleLogin = () => {
    // auth.login(user);
    dispatch(login({name: user}))
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <div>
        Redux
        <form action="">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input type="submit" onClick={handleLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
