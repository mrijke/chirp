import { gql } from "@apollo/client";
import { useChirpsQuery } from "../generated/graphql";

gql`
  query Chirps {
    chirps {
      id
    }
  }
`;

export const ChirpList: React.FC = () => {
  const { data } = useChirpsQuery();
  const numChirps = data?.chirps.length ?? 0;

  return (
    <div>
      We've got {numChirps} chirp{numChirps > 1 && "(s)"}!
    </div>
  );
};
