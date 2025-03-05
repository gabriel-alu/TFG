import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import App from './App.vue'; 
import router from './router';

// Agregar iconos a la librería
library.add(faFacebook, faTwitter, faInstagram);

// Crear la aplicación
const app = createApp(App);
app.use(router); // Habilitamos Vue Router
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
