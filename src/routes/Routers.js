import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../layouts/Layout";
import VerifyPage from "../pages/VerifyPage";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";
import RegisterPage from "../pages/RegisterPage";
import BooknowPage from "../pages/BooknowPage";
import ExplorePage from "../pages/ExplorePage";
import User from "../pages/admin/User";
import UserDetails from "../pages/admin/UserDetails";
import OrderItem from "../pages/admin/OrderItem";
import ProviderUser from "../pages/admin/ProviderUser";
import Transaction from "../pages/admin/Transaction";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/verify" element={<VerifyPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/booknow" element={<BooknowPage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/adminUser" element={<User />} />
        <Route path="/adminProviderUser" element={<ProviderUser />} />
        <Route path="/adminTransaction" element={<Transaction />} />
        <Route path="/adminUserDetails" element={<UserDetails />} />
        <Route path="/adminOrderItem" element={<OrderItem />} />
      </Route>
    </Routes>
  );
}

export default Routers;
