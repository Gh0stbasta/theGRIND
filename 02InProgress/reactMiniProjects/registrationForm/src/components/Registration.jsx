/* eslint-disable react/prop-types */
const Registration = ({ registration, setRegistration, handleSubmit }) => {
  return (
    <div className="registration-card">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={registration.name}
          onChange={(event) => {
            setRegistration({ ...registration, name: event.target.value });
          }}
        />
        <input
          type="text"
          placeholder="Lastname"
          name="lastname"
          value={registration.lastname}
          onChange={(event) => {
            setRegistration({ ...registration, lastname: event.target.value });
          }}
        />
        <input
          type="text"
          placeholder="E-mail"
          name="email"
          value={registration.email}
          onChange={(event) => {
            setRegistration({ ...registration, email: event.target.value });
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Registration;
