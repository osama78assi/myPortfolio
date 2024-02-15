import { Stack, ThemeProvider } from "react-bootstrap";
import ToolbarBtns from "./ToolbarBtns";
import ToolbarColors from "./ToolbarColors";
import { memo, useState } from "react";

const Toolbar = memo(function Toolbar() {
  const [hide, setHide] = useState(true);

  return (
    <div
      className={`tool main-transition w-200 position-absolute ${
        hide ? "hide" : ""
      }`}
    >
      <ThemeProvider prefixes={{ btn: "round-btn" }}>
        <Stack direction="horizontal" className="w-100" gap={2}>
          <ToolbarBtns onToggle={setHide} />
          <ToolbarColors />
        </Stack>
      </ThemeProvider>
    </div>
  );
});

export default Toolbar;
