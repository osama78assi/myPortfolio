import { useTheme } from "../../contexts/ThemeProvider";

function Landing() {
  const { theme } = useTheme();
  return (
    <div className="px-3">
      <h1 className="mb-3 main-transition">
        Hello, My Name Is{" "}
        <span className={`font-bold fs-2 text-${theme} main-transition`}>
          Osama Assi
        </span>
      </h1>
      <h2 className="mb-3 main-transition">
        I&apos;m a{" "}
        <span className={`font-bold text-${theme} main-transition`}>
          Web Frontend Developer
        </span>
      </h2>
      <p className="main-transition">
        I&apos;m a web frontend developer with experience about creating a
        responsive single page application and problem solving skills and many
        more...
      </p>
    </div>
  );
}

export default Landing;
