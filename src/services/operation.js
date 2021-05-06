import axios from 'axios';

let apiUrl = process.env.VUE_APP_HTTP;

export default {

    createOperation(account_holder_id, source_account, destination_account, value) {
        return axios.post(`${apiUrl}/operations`, {
            account_holder_id,
            source_account,
            destination_account,
            value
        });
    },

    getAllOperationsByAccountHolder(id) {
        return axios.get(`${apiUrl}/operations/account_holder/${id}`);
    },

    getTotalsForInstitution(id) {
        return axios.get(`${apiUrl}/operations/institution_totals/${id}`);
    },

    getAllOperationsByAccountHolderAndMonth(id, month) {
        return axios.get(`${apiUrl}/operations/account_holder/${id}/month/${month}`);
    }

}