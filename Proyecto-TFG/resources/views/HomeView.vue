<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

const fetchProducts = async () => {
    try {
        const response = await axios.get('/api/products');
        products.value = response.data;
    } catch (error) {
        console.error('Error al obtener productos:', error);
    }
};

onMounted(fetchProducts);
</script>

<template>
    <div class="home-container">
        <!-- Banner en la parte superior -->
        <div class="banner">
            <img src="/public/images/tienda01.jpg" alt="Banner de la tienda" />
        </div>

        <!-- Sección de productos -->
        <h2 class="title">Nuestros Productos</h2>
        <div class="product-grid">
            <div class="product-card" v-for="product in products" :key="product.id">
                <img :src="product.image" alt="Imagen del producto" />
                <h3>{{ product.name }}</h3>
                <p>${{ product.price }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Contenedor principal */
.home-container {
    text-align: center;
}

/* Banner */
.banner img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}

/* Título */
.title {
    margin-top: 20px;
    font-size: 24px;
    font-weight: bold;
}

/* Cuadrícula de productos */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    padding: 20px;
}

/* Tarjetas de productos */
.product-card {
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    padding: 10px;
}

.product-card img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 8px;
}
</style>
