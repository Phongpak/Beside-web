import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Layout from '../layouts/Layout';
import VerifyPage from '../pages/VerifyPage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import RegisterPage from '../pages/RegisterPage';
import BooknowPage from '../pages/BooknowPage';
import PendingConfirmation from '../pages/PendingConfirmation';
import CompletedPage from '../pages/CompletedPage';
import UpcomingPage from '../pages/UpcomingPage';
import WalletHistoryPage from '../pages/WalletHistoryPage';

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
        <Route path="/pending" element={<PendingConfirmation />} />
        <Route path="/completed" element={<CompletedPage />} />
        <Route path="upcoming" element={<UpcomingPage />} />
        <Route path="wallethistory" element={<WalletHistoryPage />} />
      </Route>
    </Routes>
  );
}

export default Routers;
