import { Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

function Details() {
  const {isDarkMode} = useTheme();
  return (
    <Stack>
      <div>
        <span className={`fw-bold ${isDarkMode ? "text-light" : "text-dark"} main-transition`}>Age: </span>
        <span className="text-secondary">23</span>
        <hr className="text-secondary border-2 border-secondary opacity-25"></hr>
      </div>
      <div>
        <span className={`fw-bold ${isDarkMode ? "text-light" : "text-dark"} main-transition`}>Email: </span>
        <span className="text-secondary">osama78assi@gmail.com</span>
        <hr className="text-secondary border-2 border-secondary opacity-25"></hr>
      </div>
      <div>
        <span className={`fw-bold ${isDarkMode ? "text-light" : "text-dark"} main-transition`}>Phone: </span>
        <span className="text-secondary">+963 9 67 282 214</span>
        <hr className="text-secondary border-2 border-secondary opacity-25"></hr>
      </div>
      <div>
        <span className={`fw-bold ${isDarkMode ? "text-light" : "text-dark"} main-transition`}>Available For Job: </span>
        <span className="text-secondary">Yes</span>
        <hr className="text-secondary border-2 border-secondary opacity-25"></hr>
      </div>
    </Stack>
  );
}

export default Details;
