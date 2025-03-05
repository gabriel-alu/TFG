<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<template>
    <div>
        <Header />
        
        <main>
            <router-view />
        </main>
        
        <Footer />
    </div>
</template>

<style>
main {
    padding-bottom: 50px; /* Para evitar que el contenido quede tapado por el footer */
}
</style>
