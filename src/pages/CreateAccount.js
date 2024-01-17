import { useNavigate } from "react-router-dom";
import CreateAccountForm from "../components/sign-in/CreateAccountForm";
import { Alert } from "react-bootstrap";
import { useState } from "react";
//import "../store/auth-context"
import { AuthProvider } from "../store/auth-context";
import { useAuth } from "../store/auth-context";
import app from "../Firebase";

function CreateAccountPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { createAccount } = useAuth();

  async function createAccountHandler(accountData) {
    if (accountData.password !== accountData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await createAccount(accountData.email, accountData.password);
      navigate('/', { replace: true });
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  //   function signInHandler(signInData) {
  //     fetch(
  //       "https://react-getting-started-a9759-default-rtdb.firebaseio.com/meetups.json",
  //       {
  //         method: "POST",
  //         body: JSON.stringify(meetupData),
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     ).then(() => {
  //         navigate('/', { replace: true });
  //     });
  //   }
  return (
    <section>
      <h1>CREATE ACCOUNT PAGE</h1>
      {error && <Alert variant="danger">⚠︎ {error} ⚠︎</Alert>}
      <CreateAccountForm
        disabled={loading}
        onCreateAccount={createAccountHandler}
      />
    </section>
  );
}

export default CreateAccountPage;
