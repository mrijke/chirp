import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

import "./index.css";
import { Auth0ApolloProvider } from "./providers/Auth0ApolloProvider";
import { Auth0ProviderWithHistory } from "./providers/Auth0ProviderWithHistory";

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
