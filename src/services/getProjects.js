import axios from "axios";

// const url = import.meta.env.VITE_APP_API_BASE_URL

function getProjects() {
    return axios.get(`https://www.in.leads-hunter.com/v2/dashboard`)
        .then(response => {
            return response
        })
}

export default {
    getProjects
};