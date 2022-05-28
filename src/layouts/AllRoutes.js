import React from "react";
import {Route} from "react-router-dom";
import SignIn from '../layouts/authentication/sign-in/index'
import {RouteView} from "../services/AthGuard";
import DashboardClient  from "../layouts/client/dashboard/dashboard"

function AllRoutes() {
    return (
        <>
            {RouteView() === "homePage" ? (
                <>
                    <Route exact path="/sign-in">
                        <SignIn />
                    </Route>
                </>
                ):(
                    <>
                        <Route exact path="/client/dashboard">
                            <DashboardClient />
                        </Route>
                    </>
                )}
        </>
    )
}
export {AllRoutes}