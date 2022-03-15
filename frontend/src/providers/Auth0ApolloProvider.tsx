import {
  createHttpLink,
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

const cache = new InMemoryCache();

export const Auth0ApolloProvider: React.FC = ({ children }) => {
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
    cache,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
