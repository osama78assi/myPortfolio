import { Stack } from "react-bootstrap";
import AboutItem from "./AboutItem";

function Details() {
  return (
    <Stack>
      <AboutItem title={"Age"} details={"23"}/>
      <AboutItem title={"Email"} details={"osama78assi@gmail.com"}/>
      <AboutItem title={"Phone"} details={"+963 9 67 282 214"}/>
      <AboutItem title={"Available For Job"} details={"Yes"}/>
    </Stack>
  );
}

export default Details;
