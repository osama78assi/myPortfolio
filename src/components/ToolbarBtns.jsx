import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Stack } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import { faGear, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function ToolbarBtns({ onToggle }) {
  const { isDarkMode, setIsDarkMode } = useTheme();

  return (
    <Stack gap={3}>
      <Button
        className={`rounded-circle w-fit main-transition fs-5 ${
          isDarkMode ? "my-dark-2" : "my-light-2"
        }`}
        onClick={() => onToggle((value) => !value)}
      >
        <FontAwesomeIcon icon={faGear} className="rot color-inherit" />
      </Button>
      <Button
        className={`rounded-circle w-fit main-transition fs-5 ${
          isDarkMode ? "my-dark-2" : "my-light-2"
        }`}
        onClick={() => setIsDarkMode((mode) => !mode)}
      >
        {isDarkMode ? (
          <FontAwesomeIcon icon={faMoon} className="color-inherit" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="color-inherit" />
        )}
      </Button>
    </Stack>
  );
}

export default ToolbarBtns;
