import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// eslint-disable-next-line
function SidebarToggler({ onToggle }) {
  return (
    <span
      className="sidebar-toggler bg-secondary p-1 opacity-25 opacity-h-100 rounded-2 position-absolute main-transition "
      onClick={() => onToggle((toggle) => !toggle)}
    >
      <FontAwesomeIcon icon={faBars} />
    </span>
  );
}

export default SidebarToggler;
