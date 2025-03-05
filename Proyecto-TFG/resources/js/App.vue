<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div class="app-container">
        <Header />

        <main class="content">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<style>
/* Estructura para que el footer quede en la parte inferior */
.app-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh; /* Altura mínima de toda la pantalla */
}

.content {
    flex: 1; /* Ocupa el espacio disponible y empuja el footer hacia abajo */
    padding: 20px;
}
</style>
