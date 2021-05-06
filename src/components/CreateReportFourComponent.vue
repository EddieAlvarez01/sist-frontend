<template>
    <v-container>
        <div class="container-center">
            <h2>Instituciones</h2>
            <div v-if="institutions.length > 0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Tipo</th>
                                <th class="text-center">Dirección</th>
                                <th class="text-center">Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="institution in institutions"
                                :key="institution.id"
                            >
                                <td>{{ institution.id }}</td>
                                <td>{{ institution.name }}</td>
                                <td>{{ institution.type }}</td>
                                <td>{{ institution.address }}</td>
                                <td>{{ institution.phone }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </div>
    </v-container>
</template>

<script>
import InstitutionService from '../services/institution';

export default {
    name: 'CreateReportFourComponent',

    data() {
        return {
            institutions: []
        }
    },

    mounted() {
        InstitutionService.GetAllInstitutions()
        .then(
            (res) => {
                this.institutions = res.data;
            }
        );
    }
}
</script>

<style scoped>

.container-center {
    width: 50%;
    margin: 2em auto auto;
}

</style>