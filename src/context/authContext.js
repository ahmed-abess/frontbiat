import { createContext, useContext, useReducer, useMemo } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import {signin} from "./authAction";
// Material Dashboard 2 React main context
const Auth = createContext();

// Setting custom name for the context which is visible on react dev tools
Auth.displayName = "authContext";

// Material Dashboard 2 React reducer
function reducer( state ,action) {
    switch (action.type) {
        case "USER_LOGIN":
            return { ...state, user: action.payload };
        case "USER_SIGNUP":
            return { ...state, user: action.payload };


        default:
            throw new Error(`Unhandled action type: ${action.type}`);

    }
}

// Material Dashboard 2 React context provider
function AuthControllerProvider({ children }) {
    const initialState = {

    };

    const [controller, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => [controller, dispatch], [controller, dispatch]);

    return <Auth.Provider value={value}>{children}</Auth.Provider>;
}

// Material Dashboard 2 React custom hook for using context
function useAuthController() {
    const context = useContext(Auth);

    if (!context) {
        throw new Error(
            "useMaterialUIController should be used inside the MaterialUIControllerProvider."
        );
    }

    return context;
}

// Typechecking props for the MaterialUIControllerProvider
AuthControllerProvider.propTypes = {
    children: PropTypes.node.isRequired,
};



export {
    AuthControllerProvider,
    useAuthController,
    signin

};
