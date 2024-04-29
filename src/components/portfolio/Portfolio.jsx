import { Container, Row, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";
import Project from "./Project";
import PageTitle from "../global/PageTitle";
import ProjectTitle from "./ProjectTitle";
import LazyLoad from "./LazyLoad";
import { memo, useReducer } from "react";
import Popup from "./Popup";
import {
  reactProjects,
  javaScriptProjects,
  cssProjects,
} from "../../helper/projectDetails";

// The Intial State For The Reducer
const initialState = {
  popup: "hidden",
  title: "",
  briefIntro: "",
  projectSrc: "",
  codeSrc: "",
  details: [],
  warnings: [],
  tools: [],
};

// Reducer For Updating The Complex State
function reducer(state, action) {
  switch (action.type) {
    case "popup/show":
      return {
        popup: "shown",
        title: action.payload.title,
        briefIntro: action.payload.briefIntro,
        projectSrc: action.payload.projectSrc,
        codeSrc: action.payload.codeSrc,
        details: action.payload.details,
        warnings: action.payload.warnings,
        tools: action.payload.tools,
      };
    case "popup/hide":
      return { ...initialState };
    default:
      throw new Error("Unknown Action Type");
  }
}

const Portfolio = memo(function Portfolio({ className }) {
  const { isDarkMode } = useTheme();
  const [projectState, dispatch] = useReducer(reducer, initialState);
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;

  // Action Creator For The Reducer
  function actionsCreator(type, payload) {
    if (type === "show") dispatch({ type: "popup/show", payload: payload });
    else if (type === "hide") dispatch({ type: "popup/hide" });
    else throw new Error("Unknown Action");
  }

  return (
    <>
      <Stack className={theClassName} style={{ perspective: "100px" }}>
        <PageTitle title={"Portfolio"} />
        <Container fluid className="py-2">
          <ProjectTitle title={"React JS"} className={"ps-4"} />
          <Row className="row-gap-2 content">
            {Object.keys(reactProjects).map((project) => (
              <Project
                key={project}
                project={reactProjects[project]}
                actionsCreator={actionsCreator}
              />
            ))}
          </Row>
          <ProjectTitle title={"Vanilla JS"} className={"my-5 ps-4"} />
          <LazyLoad>
            {Object.keys(javaScriptProjects).map((project) => (
              <Project
                key={project}
                project={javaScriptProjects[project]}
                actionsCreator={actionsCreator}
              />
            ))}
          </LazyLoad>
          <ProjectTitle title={"CSS & Bootstrap"} className={"my-5 ps-4"} />
          <LazyLoad>
            {Object.keys(cssProjects).map((project) => (
              <Project
                key={project}
                project={cssProjects[project]}
                actionsCreator={actionsCreator}
              />
            ))}
          </LazyLoad>
        </Container>
      </Stack>
      {projectState.popup === "shown" && (
        <Popup project={projectState} onHide={actionsCreator} onClose={actionsCreator} />
      )}
    </>
  );
});

export default Portfolio;
