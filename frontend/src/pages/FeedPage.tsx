import { useAuth0 } from "@auth0/auth0-react";
import { ChirpList } from "../components/chirps";

export const FeedPage: React.FC = () => {
  const { user } = useAuth0();

  return (
    <div className="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      {user?.email}
      <ChirpList />
    </div>
  );
};
