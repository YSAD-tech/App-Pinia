<template>
  <q-page>
    <q-form @submit.prevent="editarActividad">
      <q-input v-model="actividad" label="Actividad" type="textarea" />
      <q-input v-model="fecha" label="Fecha" type="date" />
      <q-select v-model="estado" :options="estados" label="Estado" />
      <q-btn type="submit" label="Editar" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useActividadStore } from '@/stores/useActividadStore';
import { useRouter } from 'vue-router';

const store = useActividadStore();
const router = useRouter();

const actividad = ref('');
const fecha = ref('');
const estado = ref('');
const estados = ref([
  { label: 'Completado', value: 'Completado' },
  { label: 'Pendiente', value: 'Pendiente' },
]);

const id = router.currentRoute.value.params.id;

onMounted(() => {
  const actividadEdit = store.actividades.find(a => a.id === Number(id));
  actividad.value = actividadEdit.actividad;
  fecha.value = actividadEdit.fecha;
  estado.value = actividadEdit.estado;
});

const editarActividad = () => {
  const index = store.actividades.findIndex(a => a.id === Number(id));
  const actividadEditada = {
    id: Number(id),
    actividad: actividad.value,
    fecha: fecha.value,
    estado: estado.value,
  };
  store.editarActividad(index, actividadEditada);
  router.push('/');
};
</script>