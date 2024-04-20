import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import Card from "../ui/Card";
import classes from "./CreateAccountForm.module.css";

function CreateAccountForm(props) {
  const usernameInputRef = useRef();
  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const passwordConfirmInputRef = useRef();

  const navigate = useNavigate();

  function signInHandler() {
    navigate("/sign-in", { replace: true });
  }
  function submitHandler(event) {
    event.preventDefault();

    const enteredUsername = usernameInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredPasswordConfirm = passwordConfirmInputRef.current.value;

    const accountData = {
      username: enteredUsername,
      name: enteredName,
      email: enteredEmail,
      password: enteredPassword,
      passwordConfirm: enteredPasswordConfirm,
    };

    props.onCreateAccount(accountData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">Username</label>
          <input type="text" required id="username" ref={usernameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" required id="name" ref={nameInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email</label>
          <input type="email" required id="email" ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            id="password"
            ref={passwordInputRef}
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="passwordConfirm">Confirm Password</label>
          <input
            type="password"
            required
            id="passwordConfirm"
            ref={passwordConfirmInputRef}
          />
        </div>
        <a href="https://www.elevana.com/images/blogs/Shrug.jpg">
          Tips on creating a secure password
        </a>
        <div className={classes.parent}>
          <div className={classes.child}>
            <div className={classes.actions}>
              <button>Create Account</button>
            </div>
          </div>
          <div className={classes.child}>
            <div className={classes.actions_secondary}>
              <button onClick={signInHandler}>I Already Have An Account</button>
            </div>
          </div>
        </div>
      </form>
    </Card>
  );
}

export default CreateAccountForm;
