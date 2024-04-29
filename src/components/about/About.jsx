import { memo } from "react";
import { Col, Row, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";
import PageTitle from "../global/PageTitle";
import Details from "./Details";
import Ranges from "./Ranges";

// eslint-disable-next-line
const About = memo(function About({ className }) {
  const { isDarkMode } = useTheme();
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;
  return (
    <Stack className={theClassName}>
      <PageTitle title={"About Me"} />
      <p className="px-4 mb-4">
        I&apos;m Osama Assi. Web frontend developer and ITE student. I have
        experience of creating a user friendly interface and single page
        application with React & React Router. Well knowledge of state
        management whether it&apos;s local or remote one. I take care of
        performance and good code style with clean coding. I have good
        understanding of the backend developement and how it works with
        database, API architectures and well knowledge of problem solving and
        self learning skills
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
});

export default About;
