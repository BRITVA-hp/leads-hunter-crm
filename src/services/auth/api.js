import axios from "axios";
import router from "../../routes";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
})

// Start Request

api.interceptors.request.use( config => {
    if (localStorage.getItem('access_token') ){
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config
}, error => {

})

// End Request

api.interceptors.response.use( config => {
    if (localStorage.getItem('access_token') ){
        config.headers.authorization = `Bearer ${localStorage.getItem('access_token')}`
    }

    return config
}, error => {
    if (error.response.status === 401){
        router.push({ name: 'login' })
    }
})

export default api