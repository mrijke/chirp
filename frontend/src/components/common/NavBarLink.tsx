import { Link, useMatch, useResolvedPath } from "react-router-dom";

import { Badge } from "./Badge";

interface INavBarLinkProps {
  label: string;
  to: string;
  badge?: boolean;
}

export const NavBarLink: React.FC<INavBarLinkProps> = ({
  label,
  badge,
  to,
}) => {
  const resolved = useResolvedPath(to);
  const active = useMatch({ path: resolved.pathname, end: true });

  const labelClasses = active
    ? "bg-gray-900 hover:cursor-default"
    : "hover:text-white hover:bg-gray-700 hover:cursor-pointer";

  return (
    <span className="inline-flex text-sm font-medium text-gray-300">
      <span className={`py-2 px-3 rounded-md ${labelClasses}`}>
        <Link to={to}>{label}</Link>
      </span>
      <span className="flex relative top-2 right-2 -mt-1 -mr-1 w-3 h-3">
        {badge && <Badge />}
      </span>
    </span>
  );
};
