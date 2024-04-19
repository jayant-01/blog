<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>My Blog 🐾</h1>
      <nav>
        <RouterLink to="/">Posts</RouterLink>
        <!-- Remove the links to 'author', 'post', and 'tag' -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<!-- ... -->