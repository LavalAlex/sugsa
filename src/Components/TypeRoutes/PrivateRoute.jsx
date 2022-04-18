import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { logoutAdmin } from "../../Redux/Actions/Auth";
import { isExpires } from "../../Utils/session";

function PrivateRoute({ expires }) {
  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();

  return admin?.name ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
