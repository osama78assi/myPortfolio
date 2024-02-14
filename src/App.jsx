import { Container, Row } from "react-bootstrap";
import Main from "./components/globalComponents/Main";
import Sidebar from "./components/globalComponents/Sidebar";
import { useEffect, useLayoutEffect, useState } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import SidebarToggler from "./components/globalComponents/SidebarToggler";
import Toolbar from "./components/globalComponents/Toolbar";
import Navigation from "./components/globalComponents/Navigation";
import NavigationItem from "./components/globalComponents/NavigationItem";
import {
  faBriefcase,
  faComments,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
let initialRender = 1;

function App() {
  const [toggleSide, setToggleSide] = useState(true);
  const [showBtn, setShowBtn] = useState(false);
  // Keep Track Of The Element
  const [curEle, setCurEle] = useState("Home");
  // Keep Track Of The Rendered (Previous One) Element
  const [prevEle, setPrevEle] = useState(null);
  // In The Start Set The Previous Class To The Right Place
  const [prevClass, setPrevClass] = useState("l-0 z-1");
  const [curClass, setCurClass] = useState("l-100 z-4");

  useEffect(() => {
    function handelMedia() {
      initialRender = 0;
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

  // As UseLayoutEffect Gets Run Before React
  // Paint The Component In The Screen
  useLayoutEffect(() => {
    let classTimer = null;
    // Timer For Return The Element To Original Position
    classTimer = setTimeout(() => {
      setCurClass("l-0 z-4");
    }, 100);
    // That Runs After Each Re-render (Return The Class To The Left)
    return () => {
      setCurClass("l-100 z-3");
      classTimer !== null ? clearTimeout(classTimer) : null;
    };
  }, [curEle]);

  // Timer For Previuos Slide
  useLayoutEffect(() => {
    let classTimer = null;
    // Set The Previous On The Screen For A While
    setPrevClass("l-0 z-1");
    classTimer = setTimeout(() => {
      // Take The ELement To The Right
      setPrevClass("l-100 z-1 d-none");
    }, 1000);
    // That Runs After Each Re-render (Return The Element To Original Place)
    return () => {
      setPrevClass("l-0 z-1");
      classTimer !== null ? clearTimeout(classTimer) : null;
    };
  }, [prevEle]);

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
          act={curEle}
          setAct={setCurEle}
          className={toggleSide ? "l-n100" : ""}
        >
          <Navigation>
            <NavigationItem
              title={"Home"}
              icon={faHome}
              isActive={curEle == "Home"}
              setActive={setCurEle}
              active={curEle}
              setPrevAct={setPrevEle}
            />
            <NavigationItem
              title={"About"}
              icon={faUser}
              isActive={curEle == "About"}
              setActive={setCurEle}
              active={curEle}
              setPrevAct={setPrevEle}
            />
            <NavigationItem
              title={"Portfolio"}
              icon={faBriefcase}
              isActive={curEle == "Portfolio"}
              setActive={setCurEle}
              active={curEle}
              setPrevAct={setPrevEle}
            />
            <NavigationItem
              title={"Contact"}
              icon={faComments}
              isActive={curEle == "Contact"}
              setActive={setCurEle}
              active={curEle}
              setPrevAct={setPrevEle}
            />
          </Navigation>
        </Sidebar>

        <Main fun={handelCloseNav}>
          {showBtn && <SidebarToggler onToggle={setToggleSide} />}

          <Home
            className={
              initialRender
                ? "l-0 z-4"
                : curEle === "Home"
                ? curClass
                : prevEle === "Home"
                ? prevClass
                : ""
            }
          />

          <About
            className={`${
              initialRender
                ? "l-100 z-1"
                : curEle === "About"
                ? curClass
                : prevEle === "About"
                ? prevClass
                : ""
            }`}
          />

          <Portfolio
            className={`${
              initialRender
                ? "l-100 z-1"
                : curEle === "Portfolio"
                ? curClass
                : prevEle === "Portfolio"
                ? prevClass
                : ""
            }`}
          />

          <Contact
            className={`${
              initialRender
                ? "l-100 z-1"
                : curEle === "Contact"
                ? curClass
                : prevEle === "Contact"
                ? prevClass
                : ""
            }`}
          />
        </Main>
      </Row>
    </Container>
  );
}

export default App;
