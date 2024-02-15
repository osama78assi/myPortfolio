import { useTheme } from "../../contexts/ThemeProvider";

function Header() {
  const { isDarkMode, theme } = useTheme();
  return (
    <div
      className={`${
        isDarkMode ? "my-dark-1" : "my-light-1"
      } text-center py-2 main-transition mb-4`}
    >
      <h1 className={`text-${theme} main-transition`}>Have Any Question ?</h1>
      <h6>I&rsquo;m At Your Service</h6>
    </div>
  );
}

export default Header;
