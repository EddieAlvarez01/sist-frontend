import axios from 'axios';

let apiUrl = process.env.VUE_APP_HTTP;

export default {

    registerAccountHolder(name, lastName, email, password) {
        return axios.post(`${apiUrl}/account_holder`, {
            name,
            last_name: lastName,
            email,
            password
        });
    },

    loginAccountHolder(email, password) {
        return axios.post(`${apiUrl}/account_holder/login`, {
            email,
            password
        });
    }

}