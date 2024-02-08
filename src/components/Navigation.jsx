import { Button, Stack, ThemeProvider } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUser,
  faBriefcase,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

function Navigation({ act, setAct }) {
  const { theme } = useTheme();
  return (
    <Stack gap={3}>
      <ThemeProvider prefixes={{ btn: "side-btn" }}>
        <Button
          className={`w-item mx-auto main-transition d-flex justify-content-between ${
            act == 1 ? `border-${theme}` : ""
          } ${act == 1 ? `text-${theme}` : "text-inherit"}`}
          variant=""
          onClick={() => (act == 1 ? null : setAct(1))}
        >
          <FontAwesomeIcon className="text-inherit" icon={faHouse} />
          Home
        </Button>
        <Button
          className={`w-item mx-auto main-transition d-flex justify-content-between ${
            act == 2 ? `border-${theme}` : ""
          } ${act == 2 ? `text-${theme}` : "text-inherit"}`}
          variant=""
          onClick={() => (act == 2 ? null : setAct(2))}
        >
          <FontAwesomeIcon className="text-inherit" icon={faUser} />
          About
        </Button>
        <Button
          className={`w-item mx-auto main-transition d-flex justify-content-between ${
            act == 3 ? `border-${theme}` : ""
          } ${act == 3 ? `text-${theme}` : "text-inherit"}`}
          variant=""
          onClick={() => (act == 3 ? null : setAct(3))}
        >
          <FontAwesomeIcon className="text-inherit" icon={faBriefcase} />
          Portfolio
        </Button>
        <Button
          className={`w-item mx-auto main-transition d-flex justify-content-between ${
            act == 4 ? `border-${theme}` : ""
          } ${act == 4 ? `text-${theme}` : "text-inherit"}`}
          variant=""
          onClick={() => (act == 4 ? null : setAct(4))}
        >
          <FontAwesomeIcon className="text-inherit" icon={faComments} />
          Contact
        </Button>
      </ThemeProvider>
    </Stack>
  );
}

export default Navigation;
