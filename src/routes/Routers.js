import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layouts/Layout";
import VerifyPage from "../pages/VerifyPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import BooknowPage from "../pages/BooknowPage";
function Routers() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/" element={<Layout />}>
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/booknow" element={<BooknowPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
