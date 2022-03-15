import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, useNavigate } from "react-router-dom";

import App from "./App";

import "./index.css";

const Auth0ApolloProvider: React.FC = ({ children }) => {
  const { getAccessTokenSilently, isAuthenticated } = useAuth0();

  const httpLink = createHttpLink({
    uri:
      process.env.REACT_APP_GRAPHQL_ENDPOINT ?? "http://localhost:5000/graphql",
  });

  const authLink = setContext(async (_, { headers }) => {
    let token = "";
    if (isAuthenticated) {
      token = await getAccessTokenSilently();
    }
    if (token) {
      return {
        headers: {
          ...headers,
          authorization: `Bearer ${token}`,
        },
      };
    }
    return headers;
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

const Auth0ProviderWithHistory: React.FC = ({ children }) => {
  const navigate = useNavigate();

  const handleRedirect = React.useCallback(
    (appState) => {
      if (appState?.from) {
        navigate(appState.from);
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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0ProviderWithHistory>
        <Auth0ApolloProvider>
          <App />
        </Auth0ApolloProvider>
      </Auth0ProviderWithHistory>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
