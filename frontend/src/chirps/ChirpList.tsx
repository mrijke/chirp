import { ChirpsListQuery } from "../__generated__/graphql";

export const ChirpList: React.FC<{ chirps: ChirpsListQuery["chirps"] }> = ({
  chirps,
}) => {
  const numChirps = chirps.length ?? 0;

  return (
    <div>
      We've got {numChirps} chirp{numChirps > 1 && "(s)"}!
    </div>
  );
};
