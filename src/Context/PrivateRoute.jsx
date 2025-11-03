import { useContext } from "react";
import { Navigate, useLocation } from "react-router";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  // 🔄 AuthContext এখনো Firebase থেকে ইউজার লোড করছে
  if (loading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  // ❌ ইউজার লগইন না থাকলে Login পেজে পাঠাও
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // ✅ ইউজার লগইন থাকলে পেজ দেখাও
  return children;
};

export default PrivateRoute;
