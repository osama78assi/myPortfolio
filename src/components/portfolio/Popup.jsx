import { Badge, Button, ListGroup, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";
import getRandId from "../../helper/getRandId";
import Overlay from "./Overlay";

function Popup({ project, onHide, onClose }) {
  const { theme, isDarkMode } = useTheme();

  return (
    <>
      <Overlay onClose={onClose} />
      <div
        className={`position-fixed main-transition p-2 custom rounded-2 ${
          isDarkMode ? "my-dark-3" : "my-light-3"
        }`}
      >
        <Button className="my-btn mb-2" onClick={() => onHide("hide")}>
          ✖
        </Button>
        <Stack className="px-1" gap={2}>
          <h2 className={`text-${theme} text-capitalize text-center`}>
            {project.title}
          </h2>

          <p className="ps-4 mb-0">
            {project.briefIntro}. You can see the{" "}
            <a
              href={project.projectSrc}
              target="_blank"
              rel="noreferrer"
              className={`${isDarkMode ? "text-light" : "text-dark"}`}
            >
              App
            </a>
            . or the{" "}
            <a
              href={project.projectSrc}
              target="_blank"
              rel="noreferrer"
              className={`${isDarkMode ? "text-light" : "text-dark"}`}
            >
              Code
            </a>
          </p>
          <h5 className={`py-2 text-center text-${theme}`}>
            Some App Features
          </h5>

          <ListGroup as={"ol"} numbered>
            {project.details.map((item) => (
              <ListGroup.Item
                as={"li"}
                className={`${
                  isDarkMode ? "my-dark-2" : "my-light-2"
                } border-none`}
                key={getRandId()}
              >
                {item}
              </ListGroup.Item>
            ))}
          </ListGroup>

          {project.warnings.length ? (
            <>
              <h5 className={`text-${theme} text-center py-2`}>Warning</h5>
              <ListGroup>
                {project.warnings.map((item) => (
                  <ListGroup.Item
                    className={`${
                      isDarkMode ? "my-dark-2" : "my-light-2"
                    } border-none`}
                    key={getRandId()}
                  >
                    {item}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </>
          ) : null}

          <h5 className={`text-center text-${theme} py-2`}>Built With</h5>
          <Stack direction="horizontal" gap={2} className="ps-3 py-2 flex-wrap">
            {project.tools.map((item) => (
              <Badge
                bg={`${isDarkMode ? "dark" : "light"}`}
                text={`${isDarkMode ? "light" : "dark"}`}
                key={getRandId()}
              >
                {item}
              </Badge>
            ))}
          </Stack>
        </Stack>
      </div>
    </>
  );
}

export default Popup;
