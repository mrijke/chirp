import { Auth0Provider } from "@auth0/auth0-react";
import * as React from "react";
import { useNavigate } from "react-router-dom";

export const Auth0ProviderWithHistory: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const handleRedirect = React.useCallback(
    (appState) => {
      if (appState?.returnTo) {
        navigate(appState.returnTo, { state: {} });
      }
    },
    [navigate]
  );

  return (
    <Auth0Provider
      domain={process.env.REACT_APP_AUTH0_DOMAIN!}
      clientId={process.env.REACT_APP_AUTH0_CLIENT_ID!}
      redirectUri={window.location.origin}
      audience={process.env.REACT_APP_AUTH0_AUDIENCE}
      scope="read:current_user update:current_user_metadata"
      onRedirectCallback={handleRedirect}
    >
      {children}
    </Auth0Provider>
  );
};
