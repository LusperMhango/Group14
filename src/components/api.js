import axios from "axios";

const api = axios.create({
    baseURL: 'https://memorylane-5fnz.onrender.com',
    withCredentials: true,
});
api.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('accessToken');
        if(token){
            config.headers.Authorization= `Bearer${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
api.interceptors.response.use(
    (response) => response,
    (error) =>{
        if(error.response && error.response.status ===401){

        }
        return Promise.reject(error);
    }
);
export default api;