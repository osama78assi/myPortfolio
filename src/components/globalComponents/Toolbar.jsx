import { Stack, ThemeProvider } from "react-bootstrap";
import ToolbarBtns from "./ToolbarBtns";
import ToolbarColors from "./ToolbarColors";
import { useState } from "react";

function Toolbar() {
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`tool main-transition position-absolute ${hide ? "hide" : ""}`}
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
