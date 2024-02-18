import { useTheme } from "../../contexts/ThemeProvider";

function Overlay({ onClose }) {
  const { isDarkMode } = useTheme();
  return (
    <div
      onClick={() => onClose("hide")}
      className={`layout position-fixed l-0 w-100 h-100 ${
        isDarkMode ? "white-layout" : "dark-layout"
      }`}
    ></div>
  );
}

export default Overlay;
