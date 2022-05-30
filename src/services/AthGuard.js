import { useLocation, useHistory } from "react-router-dom";
import {getRole} from "./authService";

/* Route Protect */
function RouteView() {

    // check phone or tablet mode
    /* use Location */
    const location = useLocation();
    /* use history */
    const history = useHistory();
    /* get Current User */
    const role = getRole();
if (getRole()){

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

        if (getRole()=='ROLE_USER') history.push("/client/dashboard");
        else if (getRole()=='ROLE_AGENT') history.push("/agent/dashboard");
        else if (getRole()=='ROLE_ADMIN') history.push("/admin/dashboard");
        else return "homePage";

    }else {
        return null;
    }
}
}


export { RouteView }