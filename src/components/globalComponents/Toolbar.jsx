import { Stack, ThemeProvider } from "react-bootstrap";
import ToolbarBtns from "./ToolbarBtns";
import ToolbarColors from "./ToolbarColors";
import { useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";

function Toolbar() {
  const [hide, setHide] = useState(true);
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`tool main-transition position-absolute ${
        hide ? "hide" : ""
      } ${isDarkMode ? "my-dark-1" : "my-light-1"}`}
    >
      <ThemeProvider prefixes={{ btn: "round-btn" }}>
        <Stack direction="horizontal" gap={3}>
          <ToolbarBtns onToggle={setHide} />
          <ToolbarColors />
        </Stack>
      </ThemeProvider>
    </div>
  );
}

export default Toolbar;
