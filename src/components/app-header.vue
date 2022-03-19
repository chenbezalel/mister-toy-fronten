<template>
  <header class="main-header flex items-center justify-between">
    <div class="logo uppercase">
      <h2>Toys</h2>
    </div>
    <nav>
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/toy">Toys</router-link> |
      <router-link class="link" to="/dashboard">Info</router-link> |
      <router-link class="link" to="/about">About</router-link> |
      <router-link class="link" to="/login">Login</router-link>
    </nav>
  </header>
</template>