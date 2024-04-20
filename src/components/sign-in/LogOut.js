import { useState } from "react";
import { useAuth } from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

// NOT OPERATIONAL, CURRENTLY IMPLEMENTED IN MainNavigation.js
function LogOut(){
    const logOut = useAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    console.log('logout outer func')
    async function handleLogOut(){
        setError('')
        try {
            await logOut()
            navigate('/sign-in', { replace: true });
        } catch  {
            setError('Failed to log out')
        }
    }
    

}

export default LogOut