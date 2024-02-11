import { useEffect } from "react";
import { useTheme } from "../../contexts/ThemeProvider";
import { useState } from "react";

function Frame() {
  const { theme } = useTheme();
  const [imgUrl, setImgUrl] = useState("/eazy-myself.JPG");
  const [blur, setBlur] = useState("blur");
  const [width, setWidth] = useState("300px");

  useEffect(() => {
    const element = document.createElement("img");
    element.src = "/myself.JPG";
    element.addEventListener("load", function () {
      setImgUrl(element.src);
      setBlur("");
      setWidth("");
    });
  }, []);

  return (
    <div className="img position-relative">
      <span
        className={`corner-50 corner-top-right-2 main-transition border-${theme} position-absolute img-border-top`}
      ></span>
      <img
        src={imgUrl}
        alt="mySelf"
        className={`${blur} filter-transition`}
        style={width != "" ?{ width: width } : {}}
      />
      <span
        className={`corner-50 corner-bottom-left-2 main-transition border-${theme} position-absolute img-border-bottom`}
      ></span>
    </div>
  );
}

export default Frame;
