import { useChirpsListQuery } from "../__generated__/graphql";
import { ChirpList } from "./ChirpList";

export const ChirpsPage: React.FC = () => {
  const { data, loading } = useChirpsListQuery();
  if (!loading && data) {
    return <ChirpList chirps={data.chirps} />;
  }

  return <>Loading...</>;
};
