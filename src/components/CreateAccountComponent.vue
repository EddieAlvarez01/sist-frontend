<template>
    <v-container>
        <div class="container-center">
            <h2>Crear cuenta nueva</h2>
            <v-select
                :items="users"
                label="Usuario"
                :item-text="parseText"
                item-value="id"
                v-model="account_holder_id"
            ></v-select>
            <v-select
                item-value="id"
                item-text="name"
                :items="institutions"
                label="Institución"
                return-object
                v-model="institution"
            ></v-select>
            <v-select
                :items="types"
                label="Tipo"
                v-model="type"
            ></v-select>
            <v-text-field
                prefix="Q"
                v-model="balance"
                label="Monto"
            ></v-text-field>
            <div class="container-buttons">
                <div>
                    <v-btn elevation="2" @click="createNewAccount">Crear cuenta</v-btn>
                </div>
            </div>
            <v-alert v-if="failure !== ''" class="alert-error" type="error">{{ failure }}</v-alert>
            <v-alert v-if="success !== ''" class="alert-error" type="success">{{ success }}</v-alert>
        </div>
    </v-container>
</template>

<script>
import AccountHolderService from '../services/account.holder';
import InstitutionService from '../services/institution';
import AccountService from '../services/account';

export default {
    name: 'CreateAccountComponent',
    data() {
        return {
            users: [],
            institutions: [],
            types: ['ahorro', 'monetaria'],
            balance: "0.00",
            account_holder_id: '',
            institution: {},
            type: '',
            failure: '',
            success: ''
        }
    },
    mounted() {
        AccountHolderService.getAllAccountHolders()
        .then(
            (res) => {
                this.users = res.data;
            }
        );
        InstitutionService.GetAllInstitutions()
        .then(
            (res) => {
                this.institutions = res.data;
            }
        );
    },
    methods: {
        parseText(item) {
            return `${item.name} ${item.last_name}`;
        },

        createNewAccount() {
            AccountService.createNewAccount(this.account_holder_id, this.institution.id, this.institution.name, this.type, this.balance)
            .then(
                () => {
                    this.success = 'Cuenta creada con exito';
                }
            ).catch(
                () => {
                    this.failure = 'Error al crear la cuenta';
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