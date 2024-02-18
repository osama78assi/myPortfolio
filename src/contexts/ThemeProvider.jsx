import { createContext, useContext } from "react";
import { useLocalStorage } from "../customHooks/useLocalStorage";

const context = createContext();
const WEBSITE_COLORS = ["orange", "blue", "turquoise", "red", "purple"];

// eslint-disable-next-line
function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorage("darkMode", true);
  const [theme, setTheme] = useLocalStorage("theme", WEBSITE_COLORS[0]);

  return (
    <context.Provider value={{ isDarkMode, setIsDarkMode, theme, setTheme }}>
      {children}
    </context.Provider>
  );
}

function useTheme() {
  const contextValue = useContext(context);
  if (contextValue === undefined)
    throw new Error("Can't Use useTheme Outside Its Provider");
  return contextValue;
}

export default ThemeProvider;
export { useTheme };
