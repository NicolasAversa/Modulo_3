import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { FirebaseAppProvider, SuspenseWithPerf, AuthCheck } from "reactfire";
import firebaseConfig from "../config/firebaseConfig";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navigation from "../components/Navigation/Navigation.jsx";
import Loader from "../components/Loader/Loader.jsx";
import Home from "./Home/Home.jsx";
import Profile from "./Profile/Profile.jsx";
import Login from "./Login/Login.jsx";
import Register from "./Register/Register.jsx";

const App = () => {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <SuspenseWithPerf fallback={<Loader />}>
        <BrowserRouter>
          <AuthCheck fallback={null}>
            <Navigation />
          </AuthCheck>
          <Route path="/" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/home" exact component={Home} />
          <Route path="/profile" exact component={Profile} />
        </BrowserRouter>
      </SuspenseWithPerf>
    </FirebaseAppProvider>
  );
};

export default App;
