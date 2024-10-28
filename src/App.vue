<template>
  <q-layout>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { Quasar } from 'quasar';
import App from './App.vue'; // Importa el componente principal
import router from './router'; // Asegúrate de tener el router configurado

// Crea la aplicación
const app = createApp(App);

// Configura Pinia
const pinia = createPinia();
app.use(pinia);

// Configura Quasar
app.use(Quasar, {
  plugins: {}, // Puedes añadir plugins aquí
});

// Configura el router
app.use(router);

// Monta la aplicación
app.mount('#app');
</script>
