import { Badge } from "./Badge";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  badge?: boolean;
}

export const Button: React.FC<IButtonProps> = ({
  label,
  badge,
  className,
  disabled,
  ...buttonProps
}) => (
  <button
    type="button"
    className={`inline-flex py-2 px-5 w-fit h-10 text-gray-300 hover:text-white bg-gray-800 hover:bg-gray-600 rounded-lg ring-gray-700 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 ${className}`}
    disabled={disabled}
    {...buttonProps}
  >
    {label}

    {badge && (
      <span className="flex relative -mt-1 -mr-3 w-3 h-3">
        <Badge />
      </span>
    )}
  </button>
);
