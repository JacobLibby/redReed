import React from "react";
import { Route, Routes } from "react-router-dom";
import { useAuth } from "../store/auth-context";
import { Navigate, Outlet } from "react-router-dom";
import { RedirectFunction } from "react-router-dom";



// export default function PrivateRoute({ children }) {
//     const auth = useAuth();
//     return auth ? <>{children}</> : <Navigate to="/sign-in" />;
//   }





// const PrivateRoute = () => {
//     const auth = null; // determine if authorized, from context or however you're doing it

//     // If authorized, return an outlet that will render child elements
//     // If not, return element that will navigate to login page
//     return auth ? <Outlet /> : <Navigate to="/login" />;
// }

// export default PrivateRoute




export default function PrivateRoutes() {
    let { currentUser } = useAuth();
    console.log(currentUser)
    if (currentUser){
        console.log(" IT IS TRUE")
    } else {
        console.log(" IT IS FALSE")
    }
    // let  userid = localStorage.getItem("token") == null ? false : true;
    return (
        <>
            {currentUser ? <Outlet  /> : <Navigate to="/sign-in" />};
        </>

    )
}







// export default function PrivateRoute({ component: Component, ...rest }) {
//   const { currentUser } = useAuth();

//   return (
//     <Routes>
//     <Route
//       {...rest}
//       render={(props) => {
//         return currentUser ? 
//           <Component {...props} />
//          : 
//             <Navigate to="/sign-in" />
//         // redirect("/sign-in")
//         ;
//       }}
//     ></Route>
//     </Routes>
//   );
// }
