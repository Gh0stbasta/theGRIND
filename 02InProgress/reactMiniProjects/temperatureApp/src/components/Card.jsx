/* eslint-disable react/prop-types */
import Buttons from "./Buttons.jsx";
import Screen from "./Screen.jsx";

const Card = ({ temp, settemp }) => {
  return (
    <>
      <Screen temp={temp} />
      <Buttons temp={temp} settemp={settemp}/>
    </>
  );
};

export default Card;
