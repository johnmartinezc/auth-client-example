import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GlobalLayout from "./Layouts/GlobalLayout";
import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import RegistrationPage from "./Pages/RegistrationPage";

import './App.css';

function App() {
	const [userMessage, setUserMessage] = useState("")

	//login and registration page

	const router = createBrowserRouter([
		{
			path: "/",
			element: <GlobalLayout />,
			children: [
				{
					index: true,
					element: <HomePage />,
				},
				{
					path: "login",
					element: <LoginPage />
				},
				{
					path: "registration",
					element: <RegistrationPage />
				}
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
