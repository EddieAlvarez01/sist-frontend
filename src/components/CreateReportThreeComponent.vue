<template>
    <v-container>
        <div class="container-center">
            <h2>Cuentahabientes</h2>
            <div v-if="accountHolders.length > 0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">ID</th>
                                <th class="text-center">Nombre</th>
                                <th class="text-center">Apellido</th>
                                <th class="text-center">Correo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="accountHolder in accountHolders"
                                :key="accountHolder.id"
                            >
                                <td>{{ accountHolder.id }}</td>
                                <td>{{ accountHolder.name }}</td>
                                <td>{{ accountHolder.last_name }}</td>
                                <td>{{ accountHolder.email }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </div>
    </v-container>
</template>

<script>
import AccountHolderService from '../services/account.holder';

export default {
    name: 'CreateReportThreeComponent',

    data() {
        return {
            accountHolders: []
        }
    },

    mounted() {
        AccountHolderService.getAllAccountHolders()
        .then(
            (res) => {
                this.accountHolders = res.data;
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