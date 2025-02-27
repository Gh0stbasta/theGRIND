/* eslint-disable react/prop-types */
const Datarow = ({ name, lastname }) => {
  return (
    <>
      <div className="row">{name} {lastname}</div>
    </>
  );
};

export default Datarow;
