import { Route, Routes, BrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import SignInPage from "./pages/SignIn";
import CreateAccountPage from "./pages/CreateAccount";
import ForgotPasswordPage from "./pages/ForgotPassword";
import Layout from "./components/layout/Layout";
import { AuthProvider } from "./store/auth-context";
import PrivateRoute from "./pages/PrivateRoute";
// import FirebaseDB from "./Firebase";

function App() {
  // FirebaseDB();

  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path="/" element={<AllMeetupsPage />} />
          </Route>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path="/home" element={<FavoritesPage />} />
          </Route>
          {/* <PrivateRoute exact path="/" element={<AllMeetupsPage />} /> */}
          <Route exact element={<PrivateRoute  />}>
            <Route exact path="favorites" element={<FavoritesPage />} />
          </Route>
          <Route exact element={<PrivateRoute  />}>
            <Route exact path="/new-meetup" element={<NewMeetupPage />} />
          </Route>
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/create-account" element={<CreateAccountPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
