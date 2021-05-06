<template>
    <v-container>
        <div class="container-center">
            <h2>Operaciones realizadas por un cuentahabiente por mes</h2>
            <div class="filter-report">
                <v-select
                    label="Cuentahabiente"
                    :items="account_holders"
                    item-value="id"
                    :item-text="accountHolderText"
                    v-model="account_holder_id"
                ></v-select>
                <v-select
                    label="Mes"
                    :items="months"
                    item-value="abr"
                    item-text="name"
                    v-model="month"
                ></v-select>
                <v-btn elevation="2" @click="getOperations">Ver reporte</v-btn>
            </div>
            <div v-if="operations.length > 0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-center">Numero de cuenta</th>
                                <th class="text-center">Numero de operación</th>
                                <th class="text-center">Tipo</th>
                                <th class="text-center">Valor</th>
                                <th class="text-center">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr
                                v-for="operation in operations"
                                :key="operation.operation_id"
                            >
                                <td>{{ operation.account_number }}</td>
                                <td>{{ operation.operation_id }}</td>
                                <td>{{ operation.type }}</td>
                                <td>Q{{ operation.value }}</td>
                                <td>{{ operation.date | formatDate }}</td>
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
import OperationService from '../services/operation';

export default {
    name: 'CreateReportFiveComponent',

    data() {
        return {
            operations: [],
            account_holders: [],
            months: [
                {
                    name: 'Enero',
                    abr: 'JAN'
                },
                {
                    name: 'Febrero',
                    abr: 'FEB'
                },
                {
                    name: 'Marzo',
                    abr: 'MAR'
                },
                {
                    name: 'Abril',
                    abr: 'APR'
                },
                {
                    name: 'Mayo',
                    abr: 'MAY'
                },
                {
                    name: 'Junio',
                    abr: 'JUN'
                },
                {
                    name: 'Julio',
                    abr: 'JUL'
                },
                {
                    name: 'Agosto',
                    abr: 'AUG'
                },
                {
                    name: 'Septiembre',
                    abr: 'SEP'
                },
                {
                    name: 'Octubre',
                    abr: 'OCT'
                },
                {
                    name: 'Noviembre',
                    abr: 'NOV'
                },
                {
                    name: 'Diciembre',
                    abr: 'DEC'
                }
            ],
            month: '',
            account_holder_id: ''
        }
    },

    mounted() {
        AccountHolderService.getAllAccountHolders()
        .then(
            (res) => {
                this.account_holders = res.data;
            }
        );
    },

    methods: {
        accountHolderText(item) {
            return `${item.name} ${item.last_name}`;
        },

        getOperations() {
            OperationService.getAllOperationsByAccountHolderAndMonth(this.account_holder_id, this.month)
            .then(
                (res) => {
                    this.operations = res.data;
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

.filter-report {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 33% 33% 33%;
}

</style>