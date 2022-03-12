import { useChirpsListQuery } from "../../__generated__/graphql";
import { Chirp } from "./Chirp";

export const ChirpList: React.FC = () => {
  const { data, loading } = useChirpsListQuery();
  const numChirps = data?.chirps.length ?? 0;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No data...</div>;
  }

  return (
    <div>
      <div>
        We've got {numChirps} chirp{numChirps > 1 && "(s)"}!
      </div>
      <div>
        {data.chirps.map((chirp) => (
          <Chirp key={chirp.id} chirpId={chirp.id} />
        ))}
      </div>
    </div>
  );
};
