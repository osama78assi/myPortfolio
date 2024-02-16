import { Button, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

function ToolbarColors() {
  const { isDarkMode, setTheme, theme } = useTheme();

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
          onClick={() => theme != "red" && setTheme("red")}
        ></Button>
        <Button
          className="color bg-blue"
          onClick={() => theme != "blue" && setTheme("blue")}
        ></Button>
        <Button
          className="color bg-orange"
          onClick={() => theme != "orange" && setTheme("orange")}
        ></Button>
        <Button
          className="color bg-turquoise"
          onClick={() => theme != "turquoise" && setTheme("turquoise")}
        ></Button>
        <Button
          className="color bg-purple"
          onClick={() => theme != "purple" && setTheme("purple")}
        ></Button>
      </Stack>
    </Stack>
  );
}

export default ToolbarColors;
