import {Navigate, Outlet} from "react-router-dom";

function PrivateRoute() {
    const authenticate = sessionStorage.getItem("password") === import.meta.env.VITE_APP_PASSWORD;

    return authenticate ? <Outlet /> : <Navigate to={`/`} />;
}

export default PrivateRoute;
