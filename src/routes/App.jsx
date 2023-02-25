import React from "react";
import Layout from "@containers/Layout";
import NewPassword from "@pages/NewPassword";
import RecoveryPassword from "@pages/RecoreryPassword";
import Login from "@pages/Login";
import CreateMyAccount from "@pages/CreateMyAccount";
import MyAccount from "@pages/MyAccount";
import Orders from "@pages/Orders";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "@pages/Home";
import NotFound from "@pages/NotFound";
import "@style/global.css";
import AppContext from "@context/AppContext";
import useInitialState from "@hooks/useInitialState";
const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <HashRouter>
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
            <Route
              exact
              path="/CreateMyAccount"
              element={<CreateMyAccount />}
            />
            <Route exact path="/MyAccount" element={<MyAccount />} />
            <Route exact path="/Orders" element={<Orders />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </AppContext.Provider>
  );
};
export default App;
