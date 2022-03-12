interface INavBarButtonProps {
  label: React.ReactNode;
  onClick?: () => void;
}

export const NavBarButton: React.FC<INavBarButtonProps> = ({
  label,
  onClick,
}) => (
  <span className="inline-flex text-sm font-medium text-gray-300">
    <span className="py-2 px-3 hover:text-white hover:bg-gray-700 rounded-md hover:cursor-pointer">
      <button type="button" onClick={onClick}>
        {label}
      </button>
    </span>
  </span>
);
