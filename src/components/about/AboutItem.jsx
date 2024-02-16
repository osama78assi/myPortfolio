import { useTheme } from "../../contexts/ThemeProvider";

function AboutItem({ title, details, isHr = true }) {
  const { isDarkMode, theme } = useTheme();
  return (
    <div>
      <span className={`fw-bold text-${theme} main-transition`}>{title}: </span>
      <span
        className={`${isDarkMode ? "text-light" : "text-dark"} main-transition`}
      >
        {details}
      </span>
      {isHr && (
        <hr className="text-secondary border-2 border-secondary opacity-25"></hr>
      )}
    </div>
  );
}

export default AboutItem;
