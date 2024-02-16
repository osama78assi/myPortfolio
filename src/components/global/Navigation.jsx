import { Stack } from "react-bootstrap";

// eslint-disable-next-line
function Navigation({ children, onToggle }) {
  function handelToggle(e) {
    if (e.target.dataset["page"]) {
      if (window.matchMedia("(max-width: 830px)").matches) {
        onToggle(true);
      }
    }
  }

  return (
    <Stack gap={3} onClick={handelToggle}>
      {children}
    </Stack>
  );
}

export default Navigation;
