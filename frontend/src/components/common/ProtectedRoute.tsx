import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";

import { Spinner } from "./Spinner";

export const ProtectedRoute: React.FC<{ component: React.ComponentType }> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <Spinner label="Redirecting to login..." />,
  });

  return <Component />;
};
