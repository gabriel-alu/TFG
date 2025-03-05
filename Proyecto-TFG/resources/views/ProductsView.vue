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
    <div>
        <h1>Lista de Productos</h1>
        <ul>
            <li v-for="product in products" :key="product.id">
                {{ product.name }} - ${{ product.price }}
            </li>
        </ul>
    </div>
</template>
