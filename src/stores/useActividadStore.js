// src/stores/useActividadStore.js
import { defineStore } from 'pinia';

export const useActividadStore = defineStore('actividades', {
  state: () => ({
    actividades: [],
  }),
  actions: {
    agregarActividad(actividad) {
      this.actividades.push(actividad);
    },
    editarActividad(index, actividad) {
      this.actividades[index] = actividad;
    },
    eliminarActividad(index) {
      this.actividades.splice(index, 1);
    },
  },
});
