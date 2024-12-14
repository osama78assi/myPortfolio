import { ProgressBar, Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

function Ranges() {
  const { theme, isDarkMode } = useTheme();
  return (
    <Stack gap={3} className="p-5">
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>HTML</span>
          <span>80%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={80}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>CSS</span>
          <span>85%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={85}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>SCSS</span>
          <span>75%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={75}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>JavaScript</span>
          <span>85%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={85}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>TypeScript</span>
          <span>80%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={80}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>React</span>
          <span>85%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={85}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
      <div>
        <div className="d-flex justify-content-between main-transition mb-2">
          <span>Python - Django</span>
          <span>65%</span>
        </div>
        <ProgressBar
          variant={theme}
          now={65}
          className={`h-10 main-transition ${
            isDarkMode ? "my-dark-2" : "bg-secondary"
          }`}
        />
      </div>
    </Stack>
  );
}

export default Ranges;
