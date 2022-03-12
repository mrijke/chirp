import { Badge } from "./Badge";

interface IButtonProps {
  label: string;
  badge?: boolean;
}

export const Button: React.FC<IButtonProps> = ({ label, badge }) => (
  <span className="inline-flex">
    <button
      type="button"
      className="py-2 px-5 w-fit h-10 text-slate-300 hover:text-slate-500 bg-slate-500 hover:bg-slate-100 rounded-lg ring-1"
    >
      {label}
    </button>
    <span className="flex relative top-2 right-4 -mt-1 -mr-1 w-3 h-3">
      {badge && <Badge />}
    </span>
  </span>
);
