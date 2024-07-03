<template>
  <header class="flex gap-3 items-center my-6">
    <Button aria-label="Voltar" rounded size="small" @click="handleClick">
      <template #icon>
        <span class="material-symbols-rounded">
          chevron_left
        </span>
      </template>
    </Button>
    <h1 class="text-xl">Contas bancárias</h1>
  </header>
  <main class="grid gap-3">
    <Card>
      <template #content>
        <header class="flex justify-between">
          <h2 class="flex gap-1 items-center text-primary-500">
            <span class="material-symbols-rounded text-lg">
              location_on
            </span>
            Contas nacionais
          </h2>
          <Button size="small" label="Cadastrar nova conta">
            <template #icon>
              <span class="material-symbols-rounded text-base mr-1">
                add
              </span>
            </template>
          </Button>
        </header>
        <div class="my-6">
          <DataTable :value="companies" tableStyle="min-width: 50rem">
            <Column field="key" header="Chave"></Column>
            <Column field="type" header="Tipo"></Column>
            <Column field="bank" header="Banco"></Column>
            <Column field="companyName" header="Empresa"></Column>
            <Column field="document" header="CNPJ/CPF"></Column>
            <Column header="">
              <template #body="slotProps">
                <Button @click="console.log(`/dados-bancarios/${slotProps.data.id}`)" text aria-label="Editar" rounded>
                  <template #icon>
                    <span class="material-symbols-rounded text-base">
                      edit
                    </span>
                  </template>
                </Button>
              </template>
            </Column>
          </DataTable>
        </div>
      </template>
    </Card>
    <Card>
      <template #content>
        <TabView>
          <TabPanel header="Recebimentos futuros">
            <p class="m-0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum.
            </p>
          </TabPanel>
          <TabPanel header="Histórico de solicitações">
            <p class="m-0">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
              aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              Nemo
              enim
              ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
              qui
              ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
            </p>
          </TabPanel>
        </TabView>
      </template>
    </Card>
  </main>
</template>

<script setup>
import Button from 'primevue/button';
import Card from 'primevue/card';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import { useRouter } from 'vue-router';

const companies = [
  {
    id: '1',
    key: '00.000.000/0001-00',
    type: 'Pix (PJ)',
    bank: '000 - Nome do banco',
    companyName: 'Nome da empresa',
    document: '00.000.000/0001-00',
  },
  {
    id: '2',
    key: '00.000.000/0001-00',
    type: 'Pix (PJ)',
    bank: '000 - Nome do banco',
    companyName: 'Nome da empresa',
    document: '00.000.000/0001-00',
  }
]

const router = useRouter()

const handleClick = () => {
  router.push('/')
}
</script>

<style scoped></style>