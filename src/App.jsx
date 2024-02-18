import { Container, Row } from "react-bootstrap";
import Main from "./components/global/Main";
import Sidebar from "./components/global/Sidebar";
import { useEffect, useLayoutEffect, useState } from "react";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import SidebarToggler from "./components/global/SidebarToggler";
import Toolbar from "./components/global/Toolbar";
import Navigation from "./components/global/Navigation";
import NavigationItem from "./components/global/NavigationItem";
import {
  faBriefcase,
  faComments,
  faHome,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
let initialRender = 1;

function App() {
  // Sidebar
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
    initialRender = 0;
    function handelMedia() {
      if (window.matchMedia("(max-width: 830px)").matches) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    }
    window.addEventListener("resize", handelMedia);
    handelMedia();
    setCurClass("l-0 z-4");
    return () => window.removeEventListener("resize", handelMedia);
  }, []);

  // As UseLayoutEffect Gets Run Before React
  // Paint The Component In The Screen
  useLayoutEffect(() => {
    let classTimer = null;
    if (!initialRender) {
      // Timer For Return The Element To Original Position
      classTimer = setTimeout(() => {
        setCurClass("l-0 z-4");
      }, 100);
    }
    // That Runs After Each Re-render (Return The Class To The Left)
    return () => {
      setCurClass("l-100 z-3");
      classTimer !== null ? clearTimeout(classTimer) : null;
    };
  }, [curEle]);

  // Timer For Previuos Slide
  useLayoutEffect(() => {
    let classTimer = null;
    if (!initialRender) {
      // Set The Previous On The Screen For A While
      setPrevClass("l-0 z-1");
      classTimer = setTimeout(() => {
        // Take The ELement To The Right
        setPrevClass("l-100 z-1 d-none");
      }, 500);
    }
    // That Runs After Each Re-render (Return The Element To Original Place)
    return () => {
      setPrevClass("l-0 z-1");
      classTimer !== null ? clearTimeout(classTimer) : null;
    };
  }, [prevEle]);

  function handelCloseBars(e) {
    if (e.target.closest(".sidebar-toggler")) {
      return;
    }
    if (e.target.closest(".tool")) {
      return;
    }
    if (toggleSide == false) {
      setToggleSide(true);
    }
  }

  return (
    <Container fluid className={"overflow-hidden position-relative"}>
      <Row className="vh-100">
        <Sidebar
          act={curEle}
          setAct={setCurEle}
          className={`${toggleSide ? "l-n100" : "h-100"}`}
        >
          <Navigation onToggle={setToggleSide}>
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

        <Main fun={handelCloseBars}>
          <Toolbar />
          {showBtn && <SidebarToggler onToggle={setToggleSide} />}

          <Home
            className={
              initialRender
                ? "l-0 z-4"
                : curEle == "Home"
                ? curClass
                : prevEle === "Home"
                ? prevClass
                : "d-none"
            }
          />

          <About
            className={`${
              initialRender
                ? "d-none"
                : curEle === "About"
                ? curClass
                : prevEle === "About"
                ? prevClass
                : "d-none"
            }`}
          />

          <Portfolio
            className={`${
              initialRender
                ? "d-none"
                : curEle === "Portfolio"
                ? curClass
                : prevEle === "Portfolio"
                ? prevClass
                : "d-none"
            }`}
          />

          <Contact
            className={`${
              initialRender
                ? "d-none"
                : curEle === "Contact"
                ? curClass
                : prevEle === "Contact"
                ? prevClass
                : "d-none"
            }`}
          />
        </Main>
      </Row>
    </Container>
  );
}

export default App;
