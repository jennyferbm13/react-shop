import React from "react";
import Layout from "../containers/Layout";
import NewPassword from "../pages/NewPassword";
import RecoveryPassword from "../pages/RecoreryPassword";
import Login from "../pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../style/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/NewPassword" element={<NewPassword />} />
          <Route
            exact
            path="/RecoveryPassword"
            element={<RecoveryPassword />}
          />
          <Route exact path="/Login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default App;
