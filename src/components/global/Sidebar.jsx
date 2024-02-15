import { Col, Stack } from "react-bootstrap";
import Logo from "./Logo";
import { useTheme } from "../../contexts/ThemeProvider";

// eslint-disable-next-line
function Sidebar({ className, children }) {
  const { isDarkMode } = useTheme();
  return (
    <Col
      md={3}
      lg={3}
      xl={2}
      className={`sidebar main-transition py-5 d-md-block ${
        isDarkMode ? "my-dark-2" : "my-light-2"
      } ${className}`}
    >
      <Stack className="sidebar-gap">
        <Logo />
        {children}
      </Stack>
    </Col>
  );
}

export default Sidebar;
