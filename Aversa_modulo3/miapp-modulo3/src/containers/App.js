import React from "react";
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import firebaseConfig from "../config/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "../components/Navigation/Navigation.jsx";
import Home from "./Home/Home.jsx";
import Login from "./Login/Login.jsx";

const App = () => {
	return (
		<>
			<Navigation />
			<FirebaseAppProvider firebaseConfig={firebaseConfig}>
				<SuspenseWithPerf fallback={<p>loading burrito status...</p>}>
					<Login />
				</SuspenseWithPerf>
			</FirebaseAppProvider>
		</>
	);
};

export default App;
