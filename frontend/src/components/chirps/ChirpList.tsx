import { useChirpsListQuery } from "../../__generated__/graphql";
import { ChirpCard } from "./ChirpCard";

export const ChirpList: React.FC = () => {
  const { data, loading } = useChirpsListQuery();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  return (
    <div>
      <div>
        {data.chirps.map((chirp) => (
          <ChirpCard className="mb-3" key={chirp.id} chirp={chirp} />
        ))}
      </div>
    </div>
  );
};
