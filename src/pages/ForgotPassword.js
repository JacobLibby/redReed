import { useNavigate } from "react-router-dom";
import ForgotPasswordForm from "../components/sign-in/ForgotPasswordForm";
import { Alert } from "react-bootstrap";
import { useState } from "react";
//import "../store/auth-context"
import { AuthProvider } from "../store/auth-context";
import { useAuth } from "../store/auth-context";
import app from "../Firebase";

export default function ForgotPasswordPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { resetPassword } = useAuth();

  async function forgotPasswordHandler(email) {
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(email);
      //   navigate('/', { replace: true });
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
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
      <h1>Reset Password</h1>
      {error && <Alert variant="danger">⚠︎ {error} ⚠︎</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <ForgotPasswordForm
        disabled={loading}
        onForgotPassword={forgotPasswordHandler}
      />
    </section>
  );
}
