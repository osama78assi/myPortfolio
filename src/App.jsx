import { Container, Row } from "react-bootstrap";
import Main from "./components/globalComponents/Main";
import Sidebar from "./components/globalComponents/Sidebar";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import SidebarToggler from "./components/globalComponents/SidebarToggler";
import Toolbar from "./components/globalComponents/Toolbar";

function App() {
  const [activePage, setActivePage] = useState(1);
  const [toggleSide, setToggleSide] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    function handelMedia() {
      if (window.matchMedia("(max-width: 830px)").matches) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }
    window.addEventListener("resize", handelMedia);
    handelMedia();
    return () => window.removeEventListener("resize", handelMedia);
  }, []);

  function handelCloseNav(e) {
    if (e.target.closest(".sidebar-toggler")) {
      return;
    }
    if (toggleSide == false) {
      setToggleSide(true);
    }
  }

  return (
    <Container fluid className={"overflow-hidden position-relative"}>
      <Toolbar />
      <Row className="vh-100">
        <Sidebar
          act={activePage}
          setAct={setActivePage}
          className={toggleSide ? "l-n100" : ""}
        />
        <Main fun={handelCloseNav}>
          {showBtn && <SidebarToggler onToggle={setToggleSide} />}
          <Home className={activePage == 1 ? "l-0 z-4" : "l-100 z-1"}></Home>
          <About className={activePage == 2 ? "l-0 z-4" : "l-100 z-1"}></About>
          <Portfolio
            className={activePage == 3 ? "l-0 z-4" : "l-100 z-1"}
          ></Portfolio>
          <Contact
            className={activePage == 4 ? "l-0 z-4" : "l-100 z-1"}
          ></Contact>
        </Main>
      </Row>
    </Container>
  );
}

export default App;
