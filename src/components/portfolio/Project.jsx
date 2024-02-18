import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";

function Project({ project, actionsCreator }) {
  const [height, setHeight] = useState(0);
  const { isDarkMode } = useTheme();
  const elementRef = useRef(null);

  // Calc Height Of The Image Depending On The Width Of It
  useEffect(() => {
    function handleHeight() {
      setHeight(elementRef.current.clientWidth / 2);
    }
    handleHeight();
    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  return (
    <>
      <div
        className="position-relative col-12 col-sm-9 col-lg-6 overflow-hidden rounded-2"
        ref={elementRef}
        style={height != 0 ? { height: height } : {}}
      >
        <div
          className={`main-transition cursor-pointer p-2 ${
            isDarkMode ? "my-dark-2" : "my-light-2"
          } rounded-2 h-100`}
          onClick={() =>
            actionsCreator("show", {
              title: project.title,
              briefIntro: project.briefIntro,
              projectSrc: project.projectUrl,
              codeSrc: project.codeUrl,
              details: project.details,
              warnings: project.warnings,
              tools: project.tools,
            })
          }
        >
          <img
            src={project.imgSrc}
            alt={project.imgAlt}
            className="w-100 h-100 rounded-2"
          />
        </div>
      </div>
    </>
  );
}

export default Project;
