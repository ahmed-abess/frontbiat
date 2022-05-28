import jwtDecode from "jwt-decode";

/* set token */
export const setToken = (token) => {
    localStorage.setItem("token", token);
}
/* set refresh token */
export const setRefreshToken = (refresh) => {
    localStorage.setItem("refresh_token", refresh);
}

/* get token */
export const getToken = () => {
    const token = localStorage.getItem("token") || null;
    return token
}

/* get refresh token */
export const getRefreshToken = () => {
    const Refresh = localStorage.getItem("refresh_token") || null;
    return Refresh
}

/* get Current Current User */
export const getUser = () => {
    const token = localStorage.getItem("token");
    return token ? jwtDecode(token) : null;
}

/* get Id Current User */
export const getUserId = () => {
    const user = getUser();
    return user?.id;
}
export const getRole=()=>{
    const user = getUser();
    return user?.roles;
}