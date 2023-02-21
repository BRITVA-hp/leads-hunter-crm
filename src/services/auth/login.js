import axios from "axios";

const url = import.meta.env.VITE_API_BASE_URL

export default function post(email, password) {
    return axios.post(`${url}/auth/login`, {email, password})
        .then( response => {
            return response.data
        })
}

