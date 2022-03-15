import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";

import { Spinner } from "./Spinner";

export const ProtectedRoute: React.FC = ({ children }) => {
  const location = useLocation();
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated) {
    loginWithRedirect({ appState: { from: location } });
    return <Spinner label="Redirecting..." />;
  }

  return <>{children}</>;
};
