import { Col } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";
import { useRef } from "react";
import { useEffect } from "react";

// eslint-disable-next-line
function Main({ children, fun }) {
  const { isDarkMode } = useTheme();
  const refEle = useRef(null);

  useEffect(() => {
    const ele = refEle.current;
    ele.addEventListener("click", fun);
    return () => ele.removeEventListener("click", fun);
  }, [fun, refEle]);

  return (
    <Col
      ref={refEle}
      className={`main-transition h-100 position-relative ${
        isDarkMode ? "my-dark-1" : "my-light-1"
      }`}
    >
      {children}
    </Col>
  );
}

export default Main;
