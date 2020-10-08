<template>
  <div class="bg-green-300 min-h-screen">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/forms">Forms</router-link>
    </div>
    <router-view />
  </div>
</template>
