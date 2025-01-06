import "../styles/Register.css";

const Register = () => {
  return (
    <div className="register">
      <div className="form">
        <h1>Want to join Us</h1>
        <form>
          <label>Full name: </label>
          <input type="text" />
          <label>Email: </label>
          <input type="text" />
          <label>Message: </label>
          <input type="text" />
          <button className="registerBtn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
