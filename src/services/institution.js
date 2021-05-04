import axios from 'axios';

let apiUrl = process.env.VUE_APP_HTTP;

export default {

    createInstitution(name, type, address, phone) {
        return axios.post(`${apiUrl}/institution`, {
            name,
            type,
            address,
            phone
        });
    }

}