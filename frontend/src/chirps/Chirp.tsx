import { useChirpFetchQuery } from "../__generated__/graphql";

export const Chirp: React.FC<{ chirpId: number }> = ({ chirpId }) => {
  const { data } = useChirpFetchQuery({ variables: { id: chirpId } });

  return (
    <div>
      Chirp id: {chirpId}
      <pre>{JSON.stringify(data?.chirp, undefined, 2)}</pre>
    </div>
  );
};
