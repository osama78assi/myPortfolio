import { Col, Row, Stack } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import PageTitle from "./PageTitle";
import Details from "./aboutComponents/Details";
import Ranges from "./aboutComponents/Ranges";

function About({ className }) {
  const { isDarkMode } = useTheme();
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;
  return (
    <Stack className={theClassName}>
      <PageTitle title={"About Me"} />
      <p className="px-4 mb-4">
        I'm Osama Assi, web frontend developer and ITE student, I have
        experience of creating a user friendly interface and single page
        application with React & React Router, I have basic knowledge about the
        backend and how it works with database, API architectures and well
        knowledge of problem solving
      </p>
      <Row className="ps-3 w-100">
        <Col sm={5}>
          <Details />
        </Col>
        <Col className="my-3 mt-sm-0">
          <Ranges />
        </Col>
      </Row>
      
    </Stack>
  );
}

export default About;
