import { useAuth0 } from "@auth0/auth0-react";
import * as React from "react";
import { NavBarButton } from "./NavBarButton";

const LogoutButton: React.FC = () => {
  const { logout } = useAuth0();
  const handleClick = React.useCallback(() => {
    logout({ returnTo: window.location.origin });
  }, [logout]);

  return <NavBarButton label="Log out" onClick={handleClick} />;
};

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();
  const handleClick = React.useCallback(() => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return <NavBarButton label="Log in" onClick={handleClick} />;
};

export const AuthenticationButton: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};
