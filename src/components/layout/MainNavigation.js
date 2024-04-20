import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useAuth } from "../../store/auth-context";
import LogOut from "../sign-in/LogOut";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  const authCtx = useAuth();
  const { currentUser, logOut } = useAuth();

  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");
    try {
      await logOut();
      navigate("/sign-in", { replace: true });
    } catch {
      setError("Failed to log out");
      console.log('ERROR')
    }
  }

  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">All Meetups</Link>
            </li>
            <li>
              <Link to="/new-meetup">Add New Meetup</Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>
                  {favoritesCtx.totalFavorites}
                </span>
              </Link>
            </li>

            {currentUser  && (
              <li>
                <Link onClick={handleLogOut}>Log Out</Link>
              </li>
            )}
            {!currentUser && (
              <>
                <li>
                  <Link to="/sign-in">Sign In</Link>
                </li>
                <li>
                  <Link to="/create-account">Create Account</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
      <h1>{JSON.stringify(authCtx)}</h1>
    </>
  );
}

export default MainNavigation;
