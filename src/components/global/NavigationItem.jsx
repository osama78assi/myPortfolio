import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

/*eslint-disable*/
function NavigationItem({
  title,
  icon,
  active,
  isActive,
  setActive,
  setPrevAct,
}) {
  const { theme } = useTheme();
  return (
    <Button
      data-page={title}
      className={`side-btn w-item mx-auto main-transition d-flex justify-content-between ${
        isActive ? `border-${theme}` : ""
      } ${isActive ? `text-${theme}` : "text-inherit"}`}
      variant=""
      onClick={() => {
        if (!isActive) {
          setPrevAct(active);
          setActive(title);
        }
      }}
    >
      <FontAwesomeIcon className="text-inherit" icon={icon} />
      {title}
    </Button>
  );
}

export default NavigationItem;
