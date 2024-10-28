// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Actividades from '../components/Actividades.vue'; // Cambiado a ruta relativa
import Agregar from '../components/Agregar.vue'; // Cambiado a ruta relativa
import Editar from '../components/Editar.vue'; // Cambiado a ruta relativa

const routes = [
  { path: '/', name: 'Actividades', component: Actividades },
  { path: '/agregar', name: 'Agregar', component: Agregar },
  { path: '/editar/:id', name: 'Editar', component: Editar, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;