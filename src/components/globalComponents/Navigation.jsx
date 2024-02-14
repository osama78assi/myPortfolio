import { Stack } from "react-bootstrap";

// eslint-disable-next-line
function Navigation({ children }) {
  return <Stack gap={3}>{children}</Stack>;
}

export default Navigation;
