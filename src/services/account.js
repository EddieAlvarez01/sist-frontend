import axios from 'axios';

let apiUrl = process.env.VUE_APP_HTTP;

export default {

    createNewAccount(account_holder_id, institution_id, institution_name, type, balance) {
        return axios.post(`${apiUrl}/account`, {
            account_holder_id,
            institution_id,
            institution_name,
            type,
            balance,
            associated_accounts: []
        });
    },

    getAllAccountsForAccountHolder(id) {
        return axios.get(`${apiUrl}/account/account_holder/${id}`);
    }

}