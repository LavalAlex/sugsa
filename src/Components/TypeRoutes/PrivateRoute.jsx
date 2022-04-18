import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute() {
  const admin = useSelector((state) => state.admin);
  return admin?.success ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoute;
