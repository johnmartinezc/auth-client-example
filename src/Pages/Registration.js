import { useState } from "react";
import { useAuth } from "../Hooks/Auth";
import { useNavigate } from "react-router-dom";

const RegistrationPage = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  //we are accessing the authentication context from within our 
  // component 
  const auth = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <h1>Registration Page</h1>
      <h3>{registerMessage}</h3>
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
          const registerResult = await auth.register(email, password);
          if (registerResult.success) {
						navigate("/Login");
          }
          
        }}
      >
        Signup
      </button>
    </div>
  );
};

export default RegistrationPage;