<template>
    <nav>
        <ul>
            <li><router-link to="/">Inicio</router-link></li>
            <li><router-link to="/products">Productos</router-link></li>
        </ul>
    </nav>
</template>

<style scoped>
nav ul {
    display: flex;
    gap: 15px;
    list-style: none;
}
</style>
