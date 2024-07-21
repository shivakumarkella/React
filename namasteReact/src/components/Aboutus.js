import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Aboutus = () => {
  const userName = useContext(UserContext);
  return (
    <div>
      <h1>we are on the About us component</h1>
      <h2>{userName}</h2>
    </div>
  );
};
export default Aboutus;
