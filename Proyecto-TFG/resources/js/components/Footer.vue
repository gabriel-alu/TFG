<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
</script>

<template>
  <footer class="footer">
    <p>&copy; {{ new Date().getFullYear() }} - Mi Tienda</p>

     <!--He puesto el _blank para que se abra en una nueva pestaña y el noopener noreferrer para evitar riesgos de seguridad y tener mejor rendimiento-->
    <div class="social-links">
      <a href="https://www.facebook.com/NuestraTienda" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="faFacebook" />
      </a>
      <a href="https://twitter.com/NuestraTienda" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="faTwitter" />
      </a>
      <a href="https://www.instagram.com/NuestraTienda" target="_blank" rel="noopener noreferrer">
        <font-awesome-icon :icon="faInstagram" />
      </a>
    </div>
    <nav class="internal-links">
      <!-- Enlaces internos con <router-link> -->
      <router-link to="/">Inicio</router-link>
      <router-link to="/sobre-nosotros">Sobre Nosotros</router-link>
      <router-link to="/contacto">Contacto</router-link>
      <router-link to="/politica-privacidad">Política de Privacidad</router-link>
    </nav>
  </footer>
</template>

<style scoped>
.footer {
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5px 0;
  background: #3e5f8a;
  color: white;
  font-size: 18px; /* Reduce los iconos */
}

.social-links a {
  margin: 0 10px;
  font-size: 18px;
  color: white;
  transition: transform 0.2s;
}

.social-links a:hover {
  color: #0059ff;
}

.internal-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 50%;
}

.internal-links p {
  margin: 0;
  font-size: 18px;
}

.internal-links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
  font-size: 18px;
  transition: color 0.3s;
}

.internal-links a:hover {

  color: #0059ff;
}
</style>