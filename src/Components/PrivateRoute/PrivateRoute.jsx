import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";
const PrivateRoute = ({ children }) => {
  const { user, loading } = UseAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center h-screen items-center">
        <span className="loading loading-spinner text-error"></span>;
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login" />;
};

export default PrivateRoute;
