import { HeartIcon } from "@heroicons/react/solid";

import { ChirpListItemFragment } from "../../__generated__/graphql";

interface IChirpCardProps {
  chirp: ChirpListItemFragment;
  className?: string;
}

export const ChirpCard: React.FC<IChirpCardProps> = ({ chirp, className }) => {
  return (
    <div
      className={`bg-white rounded-md border-2 border-gray-300 ${className}`}
    >
      <div className="flex p-5">
        <div className="flex flex-col mr-5">
          <span className="font-semibold">{chirp.title}</span>
          <span className="text-sm italic font-light">{chirp.createdAt}</span>
        </div>
        <div className="flex flex-col">
          <div>{chirp.content}</div>
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
