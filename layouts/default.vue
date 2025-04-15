<template>
  <div class="layout">
    <AppHeader />
    <main class="main-content">
      <div class="container">
        <slot />
      </div>
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
// Default layout component
</script>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
}

@media (max-width: 768px) {
  .main-content {
    padding: 1.5rem 0;
  }
}

@media (max-width: 576px) {
  .main-content {
    padding: 1rem 0;
  }
}
</style>
