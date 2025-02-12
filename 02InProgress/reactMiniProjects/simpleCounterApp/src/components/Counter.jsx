/* eslint-disable react/prop-types */
const Counter = ({ count, setCount }) => {
  if (count === 10) {
    setCount(1);
  }

  return (
    <>
      <button onClick={() => setCount(count + 1)}>
        You pushed me hard {count} times 😘
      </button>
    </>
  );
};

export default Counter;
