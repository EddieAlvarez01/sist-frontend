<template>
    <v-container>
        <div class="container-center">
            <h2>Iniciar sesión</h2>
            <v-text-field
                label="Correo"
                v-model="email"
            ></v-text-field>
            <v-text-field 
                label="Contraseña"
                type="password"
                v-model="password"
            ></v-text-field>
            <div class="container-buttons">
                <div>
                    <v-btn elevation="2" @click="login">Iniciar sesión</v-btn>
                    <v-btn elevation="2" class="btn-register" @click="goToRegister">Registrarse</v-btn>
                </div>
            </div>
            <v-alert v-if="failure !== ''" class="alert-error" type="error">{{ failure }}</v-alert>
        </div>
    </v-container>
</template>

<script>
import AccountHolderService from '../services/account.holder';

export default {
    name: "LoginComponent",

    data() {
        return {
            email: '',
            password: '',
            failure: ''
        }
    },

    methods: {
        goToRegister() {
            this.$router.push('/register');
        },

        login() {
            AccountHolderService.loginAccountHolder(this.email, this.password)
            .then(
                (res) => {
                    this.$store.commit('login', res.data);
                    if(res.data.role === 'ADMIN') {
                        this.$router.push('/create-institution');
                    }else{
                        this.$router.push('/create-operation');
                    }
                }
            ).catch(
                () => {
                    this.failure = 'Credenciales incorrectos';
                }
            );
        }
    }
};
</script>

<style scoped>
.container-center {
    width: 50%;
    margin: 2em auto auto;
}

.container-buttons {
    display: grid;
    justify-content: end;
}

.btn-register {
    margin-left: 1em;
}
</style>