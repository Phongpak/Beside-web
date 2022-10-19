import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layouts/Layout";
import VerifyPage from "../pages/VerifyPage";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<VerifyPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
