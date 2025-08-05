import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
  requiredRoles: string[];
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRoles }) => {
  const { user } = useAuth();

  const hasAccess = user?.roles?.some((role: string) => requiredRoles.includes(role));

  if (!user || !hasAccess) {
    // Redirect to login or unauthorized page if user is not allowed
    return <Navigate to="/auth" replace />;
  }

  // Render the child component if the user has the correct role
  return <>{children}</>;
};

export default ProtectedRoute;
