import { Container, Row, Stack } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeProvider";
import Project from "./portfolioComponents/Project";
import PageTitle from "./globalComponents/PageTitle";
import ProjectTitle from "./portfolioComponents/ProjectTitle";

// eslint-disable-next-line
function Portfolio({ className }) {
  const { isDarkMode } = useTheme();
  const theClassName = `position-absolute main-transition w-100 h-100 overflow-auto ${className} ${
    isDarkMode ? "my-dark-1" : "my-light-1"
  }`;
  return (
    <Stack className={theClassName} style={{ perspective: "100px" }}>
      <PageTitle title={"Portfolio"} />
      <Container fluid className="py-2">
        <ProjectTitle title={"React JS"} className={"ps-4"} />
        <Row className="row-gap-2 content">
          <Project
            imgSrc={"/public/fastPizza.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/fastPizza/"}
            codeUrl={"https://github.com/osama78assi/fastPizza"}
          />
          <Project
            imgSrc={"/worldWise.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/worldWise/"}
            codeUrl={"https://github.com/osama78assi/worldWise"}
            details={
              "This App Use Fake Users Accounts, Just Use The Prefilled Data On The Form To Try"
            }
          />
          <Project
            imgSrc={"/toDoApp.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/todoApp/"}
            codeUrl={"https://github.com/osama78assi/todoApp"}
          />
          <Project
            imgSrc={"/movies.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/moviesApp/"}
            codeUrl={"https://github.com/osama78assi/moviesApp"}
          />
          <Project
            imgSrc={"/quiz.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/quiz/"}
            codeUrl={"https://github.com/osama78assi/quiz"}
          />
        </Row>
        <ProjectTitle title={"Vanilla JS"} className={"my-5 ps-4"} />
        <Row className="row-gap-2 content">
          <Project
            imgSrc={"/forkify.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/forkifyApp/"}
            codeUrl={"https://github.com/osama78assi/forkifyApp"}
          />
          <Project
            imgSrc={"/kasper.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/kasper/"}
            codeUrl={"https://github.com/osama78assi/kasper"}
          />
          <Project
            imgSrc={"/bankistDOM.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/bankistAdvanceDOM/"}
            codeUrl={"https://github.com/osama78assi/bankistAdvanceDOM"}
          />
          <Project
            imgSrc={"/mapty.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/mapty/"}
            codeUrl={"https://github.com/osama78assi/mapty"}
          />
          <Project
            imgSrc={"/bankistDashboard.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/bankistDashboard/"}
            codeUrl={"https://github.com/osama78assi/bankistDashboard"}
            details={
              "Use This Data: {js, 1111} Or {jd, 2222} Or {st, 3333} Or {ss, 4444}"
            }
          />
        </Row>
        <ProjectTitle title={"CSS & Bootstrap"} className={"my-5 ps-4"} />
        <Row className="row-gap-2 content">
          <Project
            imgSrc={"/coders.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/Coders-Arena/"}
            codeUrl={"https://github.com/osama78assi/Coders-Arena"}
          />
          <Project
            imgSrc={"/bondi.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/Bondi/"}
            codeUrl={"https://github.com/osama78assi/Bondi"}
          />
          <Project
            imgSrc={"/music.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/music/"}
            codeUrl={"https://github.com/osama78assi/music"}
          />
          <Project
            imgSrc={"/leon.png"}
            imgAlt={"project"}
            projectUrl={"https://osama78assi.github.io/leon/"}
            codeUrl={"https://github.com/osama78assi/leon"}
          />
        </Row>
      </Container>
    </Stack>
  );
}

export default Portfolio;
