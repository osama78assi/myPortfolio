import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Stack } from "react-bootstrap";
import { useTheme } from "../../contexts/ThemeProvider";

function ContactItem({ icon, title, details }) {
  const { theme } = useTheme();
  return (
    <Stack
      gap={2}
      className="main-transition text-center"
    >
      <FontAwesomeIcon icon={icon} className={`text-${theme} fs-2 main-transition`} />
      <div>
        <p className="fw-bold fs-5 main-transition">{title}</p>
        <p className="text-secondary main-transition">{details}</p>
      </div>
    </Stack>
  );
}

export default ContactItem;
