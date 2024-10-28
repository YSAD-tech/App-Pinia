<template>
  <q-page>
    <q-form @submit.prevent="agregarActividad">
      <q-input v-model="actividad" label="Actividad" type="textarea" />
      <q-input v-model="fecha" label="Fecha" type="date" />
      <q-select v-model="estado" :options="estados" label="Estado" />
      <q-btn type="submit" label="Agregar" color="primary" />
    </q-form>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
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

const agregarActividad = () => {
  const nuevaActividad = {
    id: Date.now(), // Genera un ID único
    actividad: actividad.value,
    fecha: fecha.value,
    estado: estado.value,
  };
  store.agregarActividad(nuevaActividad);
  router.push('/');
};
</script>