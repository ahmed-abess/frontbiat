import React from "react";
import {Route} from "react-router-dom";
import SignIn from '../layouts/authentication/sign-in/index'
import {RouteView} from "../services/AthGuard";
import DashboardClient  from "../layouts/client/dashboard/dashboard"
import Home from "../layouts/Home";
import Assisstance from "../layouts/client/assistance/Assisstance";
import AjoutCompte from "../layouts/client/ajoutCompte/AjoutCompte";
import AjoutClient from "../layouts/Agent/client/ListClient";
import ListCredit from "../layouts/Agent/demmandeCredit/ListDemmandeCredit";
import DashboardAdmin from "../layouts/admin/AdminDashboard";
import ListAgents from "../layouts/admin/agent/ListAgents";

import Actualite from "../layouts/admin/actualité/Actualité";
import ListCompte from "../layouts/Agent/ListCompte/ListCompte";
import SignUp from "../layouts/authentication/sign-up/index";
import NosProduit from "./client/produit/NosProduit";
import DemmandeCredit from "./client/demmandeCredit/DemmandeCredit";
import ForgetPassword from "./authentication/forget-password";
import {getRole} from "../services/authService";
function AllRoutes() {
    return (
        <>
            {getRole() ? (
                    <>
                        <Route exact path="/client/dashboard">
                            <DashboardClient />
                        </Route>
                        <Route exact path="/client/produit">
                            <NosProduit/>
                        </Route>
                        <Route exact path="/client/Credit">
                            <DemmandeCredit/>
                        </Route>
                        <Route exact path="/client/Assisstance">
                        <Assisstance/>
                    </Route>
                        <Route exact path="/client/compte">
                            <AjoutCompte/>
                        </Route>

                        <Route exact path="/agent/listclient">
                            <AjoutCompte/>
                        </Route>
                        <Route exact path="/agent/listComptes">
                            <ListCompte/>
                        </Route>
                        <Route exact path="/agent/demmandesCredits">
                            <AjoutCompte/>
                        </Route>
                        <Route exact path="/client/Credit">
                            <ListCredit/>
                        </Route>
                        <Route exact path="/admin/acceuil">
                            <DashboardAdmin/>
                        </Route>
                        <Route exact path="/admin/listagents">
                            <ListAgents/>
                        </Route>
                        <Route exact path="/admin/actualite">
                            <Actualite/>
                        </Route>


                    </>
                ):(
                <>
                    <Route exact path="/sign-in">
                        <SignIn />
                    </Route>
                    <Route exact path="/home">
                        <Home/>
                    </Route>
                    <Route exact path="/sign-up">
                        <SignUp />
                    </Route>
                    <Route exact path="/forgetPassword">
                        <ForgetPassword/>
                    </Route>


                </>
            )}
        </>
    )
}
export {AllRoutes}