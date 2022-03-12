import { ExclamationIcon } from "@heroicons/react/solid";
import { FieldError } from "react-hook-form";
import { errorMessages } from "./utils";

export const FormFieldError: React.FC<{ error?: FieldError }> = ({ error }) => (
  <span className="ml-2 font-bold text-red-500">
    {error ? (
      <div className="flex items-center align-middle">
        <ExclamationIcon className="mr-1 w-5 h-5" />
        {error.type in errorMessages
          ? errorMessages[error.type as keyof typeof errorMessages]
          : error.type}
      </div>
    ) : null}
  </span>
);
