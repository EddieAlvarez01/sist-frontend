<template>
    <v-container>
        <div class="container-center">
            <h2>Registrar institución</h2>
            <v-text-field
                label="Nombre"
                v-model="name"
            ></v-text-field>
            <v-select
                :items="types"
                label="Tipo"
                v-model="type"
            ></v-select>
            <v-text-field
                label="Dirección"
                v-model="address"
            ></v-text-field>
            <v-text-field
                label="Telefono"
                v-model="phone"
            ></v-text-field>
            <v-btn elevation="2" @click="createInstitution">Registrar institución</v-btn>
            <v-alert v-if="failure !== ''" class="alert-error" type="error">{{ failure }}</v-alert>
            <v-alert v-if="success !== ''" class="alert-error" type="success">{{ success }}</v-alert>
        </div>
    </v-container>
</template>

<script>
import InstitutionService from '../services/institution';

export default {
    name: "CreateInstitutionComponent",

    data() {
        return {
            types: ['Banco', 'Financiera casa de préstamo', 'Casa de bolsa'],
            name: '',
            type: '',
            address: '',
            phone: '',
            failure: '',
            success: ''
        }
    },

    methods: {
        createInstitution() {
            InstitutionService.createInstitution(this.name, this.type, this.address, this.phone)
            .then(
                () => {
                    this.success = "Registrado correctamente";
                }
            ).catch(
                () => {
                    this.failure = "Error al registrar";
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