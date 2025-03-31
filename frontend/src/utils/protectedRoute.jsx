import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../store/userStore";

const ProtectedRoute = ({ allowedRoles, children }) => {
    const navigate = useNavigate();
  const { role, user,getCurrentUser } = userStore();
  useEffect(() => {
    getCurrentUser();
  }
    ,[])

    console.log("from protectedRoute",user);

  if (user == null) {
    return navigate("/loginemail");
  }

  // If the user's role is not in the allowedRoles, redirect to the home page
  if (!allowedRoles.includes(role)) {
    return navigate("/heroone");
  }

  // If the user is authorized, render the requested page
  return children;
};

export default ProtectedRoute;