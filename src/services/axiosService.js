import axios from 'axios';
import { API_HOST, API_REFRESH_TOKEN} from "../../Api";

// Add a response interceptor
axios.interceptors.response.use(
    response => response,
    error => {
        // Reject promise if usual error
        if (error.response.status !== 401) {
            return Promise.reject(error);
        }
        if( localStorage.getItem('refresh_token')){
            const url = API_HOST + API_REFRESH_TOKEN
            axios.create().post(url, {'refresh_token': localStorage.getItem('refresh_token')}).then(response => {
                    //get token
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                },
                error => {
                    localStorage.clear();
                    window.location = "/login"
                }
            )
        }
        return Promise.reject(error);
    }
)

// Add a request interceptor
axios.interceptors.request.use(
    function (config) {

        //get token
        const token = localStorage.getItem("token");
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

const axiosService = {
    get: axios.get,
    post: axios.post,
    put: axios.put,
    delete: axios.delete,
    patch: axios.patch
};
export default axiosService;