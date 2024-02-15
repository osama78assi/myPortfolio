import { Button, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

function ToolbarColors() {
  const { isDarkMode, setTheme } = useTheme();

  return (
    <Stack
      className={`main-transition ${
        isDarkMode ? "my-dark-2" : "my-light-2"
      } rounded-2 p-2`}
      gap={1}
    >
      <p className="fw-bold fs-custom">Theme Color</p>
      <Stack direction={"horizontal"} gap={1}>
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
