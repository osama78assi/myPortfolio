import { Button, Stack } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import { useEffect, useState } from "react";

function ToolbarColors() {
  const { isDarkMode, setTheme } = useTheme();
  const [dir, setDir] = useState("horizontal");

  useEffect(() => {
    function handelMedia() {
      if (window.matchMedia("(max-width: 300px)").matches) {
        setDir("vertical");
      } else {
        setDir("horizontal");
      }
    }
    handelMedia();
    window.addEventListener("resize", handelMedia);
    return () => window.removeEventListener("resize", handelMedia);
  });

  return (
    <Stack
      className={`main-transition ${
        isDarkMode ? "my-dark-2" : "my-light-2"
      } rounded-2 p-2`}
    >
      <p className="fw-bold fs-6">Theme Color</p>
      <Stack
        direction={dir}
        gap={dir == "horizontal" ? 1 : 3}
        className={dir == "vertical" ? "align-items-center" : ""}
      >
        <Button
          className="color bg-red"
          onClick={() => setTheme("red")}
        ></Button>
        <Button
          className="color bg-blue"
          onClick={() => setTheme("blue")}
        ></Button>
        <Button
          className="color bg-orange"
          onClick={() => setTheme("orange")}
        ></Button>
        <Button
          className="color bg-turquoise"
          onClick={() => setTheme("turquoise")}
        ></Button>
        <Button
          className="color bg-purple"
          onClick={() => setTheme("purple")}
        ></Button>
      </Stack>
    </Stack>
  );
}

export default ToolbarColors;
