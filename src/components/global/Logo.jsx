import { useTheme } from "../../contexts/ThemeProvider";

function Logo() {
  const { theme } = useTheme();
  return (
    <div className="text-center">
      <span className="position-relative fs-1-1 font p-1 font-bold">
        <span
          className={`corner-25 corner-top-right-1 main-transition border-${theme} position-absolute top-0 start-100 translate-middle`}
        ></span>
        XZ
        <span
          className={`corner-25 corner-bottom-left-1 main-transition border-${theme} position-absolute top-100 start-0 translate-middle`}
        ></span>
      </span>
    </div>
  );
}

export default Logo;
