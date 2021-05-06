<template>
    <v-container>
        <div class="container-center">
            <h2>Totales de créditos y débitos para una institución financiera</h2>
            <v-select
                label="Institución"
                :items="institutions"
                item-value="id"
                item-text="name"
                v-model="institutionID"
                @change="getTotals"
            ></v-select>
            <div v-if="total.debits">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">Debitos</th>
                                <th class="text-center">Creditos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                            >
                                <td>Q{{ total.debits }}</td>
                                <td>Q{{ total.credits }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </div>
        </div>
    </v-container>
</template>

<script>
import OperationService from '../services/operation';
import InstitutionService from '../services/institution'; 

export default {
    name: 'CreateReportTwoComponent',

    data() {
        return {
            institutions: [],
            total: {},
            institutionID: ''
        }
    },

    methods: {
        getTotals() {
            OperationService.getTotalsForInstitution(this.institutionID)
            .then(
                (res) => {
                    this.total = res.data;
                }
            );
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