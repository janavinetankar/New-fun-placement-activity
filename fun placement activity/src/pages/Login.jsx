
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Fun Placement Activity</h1>

      <input
        type="email"
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;











