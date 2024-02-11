import { Col, Container, Row } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import Header from "./contactComponents/Header";
import PageTitle from "./globalComponents/PageTitle";
import ContactItem from "./contactComponents/ContactItem";
import { faMessage, faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact({ className }) {
  const { isDarkMode } = useTheme();
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;
  return (
    <Container fluid className={theClassName}>
      <PageTitle title={"Contact"} />
      <Header />
      <Row>
        <Col>
          <ContactItem
            icon={faPhone}
            title={"Call Me"}
            details={"+963 9 67 282 214"}
          />
        </Col>
        <Col>
          <ContactItem
            icon={faMessage}
            title={"Email"}
            details={"osama78assi@gmail.com"}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
