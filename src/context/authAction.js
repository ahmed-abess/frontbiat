import {API_HOST, API_LOGIN, API_SIGNUP} from "../Api";
import axios from "axios";
import jwtDecode from "jwt-decode";


export const signin = (dispatch,data, history) => {

    const URL = API_HOST + API_LOGIN;

    axios.post(URL,data).then(
        (response) => {
            const Token = response.data.token;
            const Refresh = response.data.refresh_token
            const currentUser = jwtDecode(Token);
            dispatch({ type: "USER_LOGIN", value: { ...currentUser, status: "success" } });

                localStorage.setItem('token', Token);
                localStorage.setItem('refresh_token', Refresh)
                /* Admin */
                if (currentUser.roles[0] === 'ROLE_ADMIN') {
                    setTimeout(() => {
                        history.assign('/admin/dashboard');
                    }, 1000);
                }
                /* recruiter */
                else if (currentUser.roles[0] === 'ROLE_AGENT') {

                        setTimeout(() => {
                            history.assign('/recruiter/profil' );
                        }, 1000);

                }
                /* candidate */
                else if (currentUser.roles[0] === 'ROLE_USER') {

                        setTimeout(() => {
                            history.assign('/client/dashboard');
                        }, 1000);

                }
                /* Error */
                else history.assign('/home');
            }

    ).catch(err=>{
        //dispatch({ type:"TOAST_ERR",payload:{status:"danger",msg:"connexion échoué"}})
        history.push('/sign-in');
    })
}
export  const signUp =(dispatch,data)=>{
    const URL = API_HOST + API_SIGNUP;
    console.log(data)
    axios.post(URL,data).then(
        (response) => {
            console.log(response)
            dispatch({type: "USER_SIGNUP", value: response.data});
            window.location.assign('/sign-in')
        }
    )
}