import { Col, Row } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import Frame from "./homeComponents/Frame";
import Landing from "./homeComponents/Landing";

// eslint-disable-next-line
function Home({ className }) {
  const { isDarkMode } = useTheme();
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;
  return (
    <Row className={theClassName}>
      <Col
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center mt-5 pe-0 ps-4"
      >
        <Landing />
      </Col>
      <Col
        xs={12}
        md={6}
        className="d-flex align-items-center justify-content-center my-3 my-sm-0 p-sm-0 p-md-1"
      >
        <Frame />
      </Col>
    </Row>
  );
}

export default Home;
