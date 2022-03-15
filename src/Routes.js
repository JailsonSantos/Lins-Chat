import * as React from "react";
import { Routes, Route } from "react-router-dom";

import { Login } from './pages/Login';
import { AccountForm } from './pages/AccountForm';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/accountform" element={<AccountForm />} />
    </Routes>
  );
}