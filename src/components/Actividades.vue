<template>
  <q-page>
    <q-table
      :rows="actividades"
      :columns="columns"
      row-key="id"
    >
      <template v-slot:top>
        <q-btn @click="navegarAgregar" label="Agregar Actividad" color="primary" />
      </template>
      <template v-slot:body-cell-acciones="props">
        <q-td>
          <q-btn @click="navegarEditar(props.row.id)" label="Editar" color="secondary" />
          <q-btn @click="eliminarActividad(props.row.id)" label="Eliminar" color="negative" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { useActividadStore } from '@/stores/useActividadStore';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const store = useActividadStore();
const router = useRouter();

const actividades = store.actividades;
const columns = ref([
  { name: 'actividad', label: 'Actividad', align: 'left', field: 'actividad' },
  { name: 'fecha', label: 'Fecha', align: 'left', field: 'fecha' },
  { name: 'estado', label: 'Estado', align: 'left', field: 'estado' },
  { name: 'acciones', label: 'Acciones', align: 'center' },
]);

const navegarAgregar = () => {
  router.push('/agregar');
};

const navegarEditar = (id) => {
  router.push(`/editar/${id}`);
};

const eliminarActividad = (id) => {
  const index = actividades.findIndex(a => a.id === id);
  store.eliminarActividad(index);
};
</script>