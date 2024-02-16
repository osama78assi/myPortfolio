import { Stack, ThemeProvider } from "react-bootstrap";
import ToolbarBtns from "./ToolbarBtns";
import ToolbarColors from "./ToolbarColors";
import { memo, useEffect, useState } from "react";

const Toolbar = memo(function Toolbar() {
  const [hide, setHide] = useState(true);

  useEffect(() => {
    function handelClose(e) {
      if (!e.target.closest(".tool")) {
        if (!hide) {
          setHide(true);
        }
      }
    }

    const root = document.querySelector("#root");
    root.addEventListener("click", handelClose);

    return () => root.removeEventListener("click", handelClose);
  });

  return (
    <div
      className={`tool main-transition w-200 position-fixed ${
        hide ? "hide" : ""
      }`}
    >
      <ThemeProvider prefixes={{ btn: "round-btn" }}>
        <Stack direction="horizontal" className="w-100" gap={4}>
          <ToolbarBtns onToggle={setHide} />
          <ToolbarColors />
        </Stack>
      </ThemeProvider>
    </div>
  );
});

export default Toolbar;
