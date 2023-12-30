import "./SignIn.css";

function SignIn() {
  return (
    <div className="sign-in">
      <form className="form">
        <div className="flex-column">
          <label>Email </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="0 0 32 32"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <input type="text" className="input" placeholder="Enter your Email" />
        </div>

        <div className="flex-column">
          <label>Password </label>
        </div>
        <div className="inputForm">
          <svg
            height="20"
            viewBox="-64 0 512 512"
            width="20"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
          <input
            type="password"
            className="input"
            placeholder="Enter your Password"
          />
          <svg
            viewBox="0 0 576 512"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
          ></svg>
        </div>

        <div className="flex-row">
          <div>
            <input type="checkbox" />
            <label>Remember me </label>
          </div>
          <span className="span">Forgot password?</span>
        </div>
        <button className="button-submit">Sign In</button>
        <p className="p">
          Don't have an account? <span className="span">Sign Up</span>
        </p>
        <p className="p line">Or With</p>

        <div className="flex-row">
          <button className="btn google">Google</button>
          <button className="btn apple">Facebook</button>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
