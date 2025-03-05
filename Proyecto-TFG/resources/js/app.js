import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

import HelloWorld from './components/HelloWorld.vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

// Agregar iconos a la librería
library.add(faFacebook, faTwitter, faInstagram);

// Crear la aplicación y registrar el componente
const app = createApp(HelloWorld);
app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
