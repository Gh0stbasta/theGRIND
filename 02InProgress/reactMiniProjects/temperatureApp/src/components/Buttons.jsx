/* eslint-disable react/prop-types */
const Buttons = ({ temp, settemp }) => {
  return (
    <>
      <button onClick={() => settemp(temp - 1)}>-</button>
      <button onClick={() => settemp(temp + 1)}>+</button>
    </>
  );
};

export default Buttons;
