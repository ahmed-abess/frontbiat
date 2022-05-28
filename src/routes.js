/**
=========================================================
* Material Dashboard 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";
import Tables from "layouts/tables";
import Billing from "layouts/billing";
import RTL from "layouts/rtl";
import Notifications from "layouts/notifications";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";
import ForgetPassword from "./layouts/authentication/forget-password";
import Simulation from "./layouts/Simulation";
import DashboardClient  from "./layouts/client/dashboard/dashboard"
import NosProduit from "./layouts/client/produit/NosProduit";
import SupportCredit from "./layouts/client/simulation/SupportCredit";
import DemmandeCredit from "./layouts/client/demmandeCredit/DemmandeCredit";
// @mui icons
import Icon from "@mui/material/Icon";
import Home from "./layouts/Home";
import Assisstance from "./layouts/client/assistance/Assisstance";
import AjoutCompte from "./layouts/client/ajoutCompte/AjoutCompte";
import AjoutClient from "./layouts/Agent/client/ListClient";
import ListCredit from "./layouts/Agent/demmandeCredit/ListDemmandeCredit";
import DashboardAdmin from "./layouts/admin/AdminDashboard";
import ListAgents from "./layouts/admin/agent/ListAgents";

import Actualite from "./layouts/admin/actualité/Actualité";
import ListCompte from "./layouts/Agent/ListCompte/ListCompte";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "Tables",
    key: "tables",
    icon: <Icon fontSize="small">table_view</Icon>,
    route: "/tables",
    component: <Tables />,
  },
  {
    type: "collapse",
    name: "Billing",
    key: "billing",
    icon: <Icon fontSize="small">receipt_long</Icon>,
    route: "/billing",
    component: <Billing />,
  },
  {
    type: "collapse",
    name: "RTL",
    key: "rtl",
    icon: <Icon fontSize="small">format_textdirection_r_to_l</Icon>,
    route: "/rtl",
    component: <RTL />,
  },
  {
    type: "collapse",
    name: "Notifications",
    key: "notifications",
    icon: <Icon fontSize="small">notifications</Icon>,
    route: "/notifications",
    component: <Notifications />,
  },
  {
    type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="small">person</Icon>,
    route: "/profile",
    component: <Profile />,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    icon: <Icon fontSize="small">login</Icon>,
    route: "/sign-in",
    component: <SignIn />,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    icon: <Icon fontSize="small">Sign up</Icon>,
    route: "/sign-up",
    component: <SignUp />,
  },
  {
    type: "collapse",
    name: "Home",
    key: "home",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/home",
    component: <Home/>,
  },
  {
    type: "collapse",
    name: "Forget Password",
    key: "forgetPassword",
    icon: <Icon fontSize="small">Forget Password</Icon>,
    route: "/forgetPassword",
    component: <ForgetPassword/>,
  },

  {
    type: "collapse",
    name: "Acceuil",
    role:"ROLE_USER",
    key: "Acceuil",
    icon: <Icon fontSize="small">Accueil</Icon>,
    route: "/client/dashboard",
    component: <DashboardClient/>,
  },
  {
    type: "collapse",
    name: " Produit",
    role:"ROLE_USER",
    key: "clientProduit",
    icon: <Icon fontSize="small">Produit</Icon>,
    route: "/client/produit",
    component: <NosProduit/>,
  },
  {
    type: "collapse",
    name: "Demmande Crédit",
    role:"ROLE_USER",
    key: "Client Compte",
    icon: <Icon fontSize="small">Demmande Credit</Icon>,
    route: "/client/Credit",
    component: <DemmandeCredit/>,
  },
  {
    type: "collapse",
    name: "Assisstance",
    key: "Assisstance",
    icon: <Icon fontSize="small">Assisstance</Icon>,
    route: "/client/Assisstance",
    component: <Assisstance/>,
  },
  {
    type: "collapse",
    name: "Ajouter Compte",
    role:"ROLE_USER",
    key: "clientCompte",
    icon: <Icon fontSize="small">Ajouter Compte</Icon>,
    route: "/client/compte",
    component: <AjoutCompte/>,
  },
  {
    type: "collapse",
    name: "List Des Comptes",
    role:"ROLE_USER",
    key: "List Des Comptes",
    icon: <Icon fontSize="small">List Des Comptes</Icon>,
    route: "/admin/listComptes",
    component: <ListCompte/>,
  },
   // espace agent
  {
    type: "collapse",
    name: "List Clients",
    role:"ROLE_USER",
    key: "listClient",
    icon: <Icon fontSize="small">Client</Icon>,
    route: "/agent/listclient",
    component: <AjoutClient/>,
  },
  {
    type: "collapse",
    name: "List Comptes",
    role:"ROLE_USER",
    key: "List Comptes",
    icon: <Icon fontSize="small">List Comptes</Icon>,
    route: "/agent/listComptes",
    component: <ListCompte/>,
  },
  {
    type: "collapse",
    name: "List Credit",
    role:"ROLE_USER",
    key: "listCredit",
    icon: <Icon fontSize="small">Credit</Icon>,
    route: "/agent/demmandesCredits",
    component: <ListCredit/>,
  },
    //admin
  {
    type: "collapse",
    name: "Acceuil",
    role:"ROLE_USER",
    key: "Acceuil",
    icon: <Icon fontSize="small">Acceuil</Icon>,
    route: "/admin/acceuil",
    component: <DashboardAdmin/>,
  },
  {
    type: "collapse",
    name: "List Des Agents",
    role:"ROLE_USER",
    key: "List Des Agents",
    icon: <Icon fontSize="small">List Des Agents</Icon>,
    route: "/admin/listagents",
    component: <ListAgents/>,
  },
  {
    type: "collapse",
    name: "List Des Actualité",
    role:"ROLE_USER",
    key: "List Des Actualité",
    icon: <Icon fontSize="small">List Des Actualité</Icon>,
    route: "/admin/actualite",
    component: <Actualite/>,
  },

];

export default routes;
