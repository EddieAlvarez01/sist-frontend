<template>
    <v-container>
        <div class="container-center">
            <h2>Operación</h2>
            <v-select
                label="Cuenta"
                :items="accounts"
                item-value="account_number"
                :item-text="accountText"
                v-model="account"
            ></v-select>
            <v-text-field
                v-model="destination_account"
                label="Cuenta de destino"
            ></v-text-field>
            <v-text-field
                label="Monto"
                prefix="Q"
                v-model="balance"
            ></v-text-field>
            <v-btn elevation="2" @click="makeTransfer">Transferir</v-btn>
            <v-alert v-if="failure !== ''" class="alert-error" type="error">{{ failure }}</v-alert>
            <v-alert v-if="success !== ''" class="alert-error" type="success">{{ success }}</v-alert>
        </div>
    </v-container>
</template>

<script>
import AccountService from '../services/account';
import OperationService from '../services/operation';

export default {
    name: 'CreateOperationComponent',

    data() {
        return {
            accounts: [],
            account: '',
            destination_account: '',
            balance: '',
            failure: '',
            success: ''
        }
    },

    mounted() {
        AccountService.getAllAccountsForAccountHolder(this.$store.getters.getSession.id)
        .then(
            (res) => {
                this.accounts = res.data;
            }
        );
    },

    methods: {
        accountText(item) {
            return `${item.account_number} - ${item.institution_name} - Q${item.balance}`;
        },

        makeTransfer() {
            OperationService.createOperation(this.$store.getters.getSession.id, this.account, this.destination_account, this.balance)
            .then(
                () => {
                    this.success = 'Operación realizada correctamente';
                    this.failure = '';
                }
            ).catch(
                () => {
                    this.failure = 'Fondos insuficientes en la cuenta';
                    this.success = '';
                } 
            );
        }
    }
}
</script>

<style scoped>

.container-center {
    width: 50%;
    margin: 2em auto auto;
}

</style>