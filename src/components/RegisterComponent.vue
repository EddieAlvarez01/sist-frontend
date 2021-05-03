<template>
    <v-container>
        <div class="container-center">
            <h2>Registrar una cuenta</h2>
            <v-text-field
                label="Nombre"
                v-model="name"
            ></v-text-field>
            <v-text-field 
                label="Apellido"
                v-model="lastName"
            ></v-text-field>
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
                    <v-btn elevation="2" @click="register">Registrarse</v-btn>
                    <v-btn elevation="2" class="btn-back" @click="goToLogin">Volver</v-btn>
                </div>
            </div>
            <v-alert v-if="success !== ''" class="alert-error" type="error">{{ success }}</v-alert>
        </div>
    </v-container>
</template>

<script>
import AccountHolderService from '../services/account.holder';

export default {
    name: "RegisterComponent",

    data() {
        return {
            name: '',
            lastName: '',
            email: '',
            password: '',
            success: ''
        }
    },

    methods: {
        goToLogin() {
            this.$router.push('/')
        },

        register() {
            AccountHolderService.registerAccountHolder(this.name, this.lastName, this.email, this.password)
            .then(
                () => {
                    this.$router.push('/');
                }
            ).catch(
                (err) => {
                    this.success = err.response.message;
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

.container-buttons {
    display: grid;
    justify-content: end;
}

.btn-back {
    margin-left: 1em;
}

</style>