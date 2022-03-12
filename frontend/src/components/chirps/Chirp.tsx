import { HeartIcon } from "@heroicons/react/solid";

import { useChirpFetchQuery } from "../../__generated__/graphql";

export const Chirp: React.FC<{ chirpId: string }> = ({ chirpId }) => {
  const { data } = useChirpFetchQuery({ variables: { id: chirpId } });

  return (
    <div className="bg-white rounded-md border-2 border-gray-300">
      <div className="flex p-5">
        <div className="flex flex-col mr-5">
          <span className="font-semibold">{data?.chirp?.title}</span>
          <span className="text-sm italic font-light">
            {data?.chirp?.createdAt}
          </span>
        </div>
        <div className="flex flex-col">
          <div>{data?.chirp?.content}</div>
          <div className="flex flex-col">
            <div className="flex items-center text-sm font-light text-gray-500">
              <HeartIcon className="mr-1 w-3 h-3" />0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
