import { useTheme } from "../../contexts/ThemeProvider";

function PageTitle({ title }) {
  const { theme } = useTheme();
  return (
    <div className="my-5 ms-3">
      <h1 className="m-0 header-p-top">{title}</h1>
      <span
        className={`bg-${theme} span-50 rounded-4 mb-1 main-transition`}
      ></span>
      <span className={`bg-${theme} span-25 rounded-4 main-transition`}></span>
    </div>
  );
}

export default PageTitle;
