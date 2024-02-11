import { Col, Stack } from "react-bootstrap";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useTheme } from "../../contexts/ThemeProvider";

function Sidebar({ act, setAct, className }) {
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
        <Navigation act={act} setAct={setAct} />
      </Stack>
    </Col>
  );
}

export default Sidebar;
