import { useEffect, useRef, useState } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { Button, Col, Stack } from "react-bootstrap";

function Project({ imgSrc, imgAlt, projectUrl, codeUrl, details }) {
  const [showPopup, setShowPopup] = useState(false);
  const [height, setHeight] = useState(0);
  const { isDarkMode } = useTheme();
  const elementRef = useRef(null);

  // Calc Height Of The Img When Resize
  useEffect(() => {
    function handleHeight() {
      setHeight(elementRef.current.clientWidth / 2);
    }
    handleHeight();
    window.addEventListener("resize", handleHeight);

    return () => window.removeEventListener("resize", handleHeight);
  }, []);

  return (
    <div
      className="position-relative col-12 col-sm-9 col-lg-6 overflow-hidden rounded-2"
      ref={elementRef}
      style={height != 0 ? { height: height } : {}}
    >
      <div
        className={`main-transition cursor-pointer p-2 ${
          isDarkMode ? "my-dark-2" : "my-light-2"
        } rounded-2`}
        onClick={() => setShowPopup(true)}
      >
        <img src={imgSrc} alt={imgAlt} className="w-100 h-100 rounded-2" />
      </div>

      <div
        className={`position-absolute z-4 main-transition p-2 ${
          showPopup ? "down" : "top"
        } custom rounded-2 bg-dark-5`}
      >
        <Button className="my-btn mb-2" onClick={() => setShowPopup(false)}>
          ❌
        </Button>
        <Stack className="ps-3" gap={2}>
          <a
            className="link-opacity-100 text-light"
            target="_blank"
            href={projectUrl}
          >
            See The App
          </a>
          <a
            className="link-opacity-100 text-light"
            target="_blank"
            href={codeUrl}
          >
            See The Code
          </a>
          {details && <p className="text-light">{details}</p>}
        </Stack>
      </div>
    </div>
  );
}

export default Project;
