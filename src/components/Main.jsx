import { Col } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";

function Main({ children }) {
  const { isDarkMode } = useTheme();
  return (
    <Col
      className={`main-transition position-relative ${
        isDarkMode ? "my-dark-1" : "my-light-1"
      }`}
    >
      {children}
    </Col>
  );
}

export default Main;
