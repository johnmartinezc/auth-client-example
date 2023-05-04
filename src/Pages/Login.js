import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Hooks/Auth";

const LoginPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const auth = useAuth(); //access the authentication context 
	const navigate = useNavigate() // be able to navigate to home on login

  return (
    <div>
      <h1>Login Page</h1>

      <h3>{loginMessage}</h3>

      <label>Email:</label>
      <input
        type="text"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
			<br/>
			<br/>

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <br/>
      <button
        onClick={async () => {

          //login in using auth context
          const loginResult = await auth.login(email, password);
					console.log("button onclick loginResult: ", loginResult)
					if (loginResult.success) {
						navigate("/")
					}
          if (!loginResult.success) {
            setLoginMessage(loginResult.message)
          }
        }}
      >
        Login
      </button>
    </div>
  );
};

export default LoginPage;
