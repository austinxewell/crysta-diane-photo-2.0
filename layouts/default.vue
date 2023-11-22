<template>
    <div>
        <nav class="nav-wrapper">
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/gallery">Gallery</NuxtLink>
            <NuxtLink to="/services">Services</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </nav>
        <slot></slot>
        <footer>This Will be the footer Section</footer>
    </div>
</template>

<script setup></script>

<style scoped>
.nav-wrapper {
    display: flex;
    gap: 10px;
}
.nav-wrapper:hover {
    cursor: pointer;
}
</style>
