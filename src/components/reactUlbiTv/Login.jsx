import React from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/auth";

const Login = () => {
  const [user, setUser] = useState("");
  const auth = useAuth();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <div> Context
        <form action="">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input type="submit" onClick={handleLogin} />
        </form>
      </div>
      {/* <div>
        Redux
        <form action="">
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <input type="submit" onClick={handleLogin} />
        </form>

      </div> */}
    </div>
  );
};

export default Login;
