import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import Card from "../ui/Card";
import classes from "./ForgotPasswordForm.module.css";

function ForgotPasswordForm(props) {
  const emailInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;

    props.onForgotPassword(enteredEmail);
  }
  const navigate = useNavigate();

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>

        <div className={classes.parent}>
          <div className={classes.child}>
            <div className={classes.actions}>
              <button>Send Password Reset</button>
            </div>
          </div>
        </div>
        <div className={classes.parentCenter}>
          <div className={classes.child}>
            <Link to="/sign-in">Sign In</Link>
          </div>
          <div className={classes.child}>
            <div className={classes.actions}>
              <Link to="/create-account">Create Account</Link>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default ForgotPasswordForm;
