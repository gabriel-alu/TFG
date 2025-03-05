<template>
    <header>
        <nav>
            <ul>
                <!--  https://emojidb.org/inicio-emojis?utm_source=user_search  -->
                <li><router-link to="/">Inicio🏠</router-link></li>
                <li><router-link to="/products">Productos🧾</router-link></li>
                <li><router-link to="/login">Login🔐</router-link></li>
                <li><router-link to="/products">Carrito 🛒</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style scoped>
header {
    background: #3e5f8a;
    color: white;
    padding: 10px;
    text-align: center;
}
nav ul {
    display: flex;
    justify-content: center;
    list-style: none;
    gap: 20px;
}
nav a {
    color: white;
    text-decoration: none;
}
</style>
