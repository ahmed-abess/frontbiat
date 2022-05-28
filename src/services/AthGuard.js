import { useLocation, useNavigate } from "react-router-dom";
import {getRole} from "./authService";

/* Route Protect */
function RouteView() {

    // check phone or tablet mode
    /* use Location */
    const location = useLocation();
    /* use history */
    const history = useNavigate();
    /* get Current User */
    const role = getRole();

    if (
        location.pathname === "/" ||
        location.pathname === "/sign-up" ||
        location.pathname === "/home" ||
        location.pathname === "/simulation" ||
        location.pathname.indexOf("forgetpassword") !== -1 ||
        location.pathname.indexOf("resetpassword") !== -1
    ) {
        return "homePage";
    } else if (location.pathname === "/sign-in") {

            if (getRole()=='ROLE_USER') history("/client/dashboard");
            else if (getRole()=='ROLE_AGENT') history("/agent/dashboard");
            else if (getRole()=='ROLE_ADMIN') history("/admin/dashboard");
            else return "homePage";

    } else {
       history.push("/");
    }
}


export { RouteView }