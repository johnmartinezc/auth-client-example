import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/Login";
import RegistrationPage from "./Pages/Registration";

import './App.css';

function App() {

	//login and registration page

	const router = createBrowserRouter([
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					index: true,
					element: <HomePage />
				},
        
				{
					path: "Login",
					element: <LoginPage />
				},
				{
					path: "Registration",
					element: <RegistrationPage />
				},
        
			],
		},
	]);

  return (
    <div className="App-header">
			<RouterProvider router={router} />
    </div>
  );
}

export default App;