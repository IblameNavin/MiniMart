import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

export const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signup" replace />;
  }
  else{
  return   children
  }
};
