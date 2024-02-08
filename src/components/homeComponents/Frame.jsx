import { useTheme } from "../../contexts/ThemeProvider";

function Frame() {
  const { theme } = useTheme();

  return (
    <div className="img position-relative">
      <span
        className={`corner-50 corner-top-right-2 main-transition border-${theme} position-absolute img-border-top`}
      ></span>
      <img src="/myself.JPG" alt="mySelf" />
      <span
        className={`corner-50 corner-bottom-left-2 main-transition border-${theme} position-absolute img-border-bottom`}
      ></span>
    </div>
  );
}

export default Frame;
