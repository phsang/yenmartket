<template>
  <div class="layout">
    <AppHeader />
    <main class="main-content">

      <div class="list_of_items">
        <div class="container">
          <div class="list_item_btn">
            <button type="button" class="list_of_items__button">
              <span class="list_items_bar"></span>
              <span class="list_items_bar"></span>
              <span class="list_items_bar"></span>
            </button>
            <span>LIST OF ITEMS</span>
          </div>
        </div>
      </div>

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
  padding: 0 0 2rem;
}

.list_of_items {
  background-color: #ca2628;
  margin-bottom: 2rem;
  display: flex;
  height: 42px;
}

.list_of_items__button {
  display: flex;
  flex-direction: column;
  align-items: space-around;
  justify-content: center;
  background-color: transparent;
  border: none;
  padding: 0;
}

.list_of_items__button .list_items_bar {
  width: 26px;
  height: 2px;
  background-color: #f0f0f0;
  margin: 2px 0;
  transition: all 0.3s ease;
}

.list_item_btn {
  display: flex;
  align-items: center;
  color: #f0f0f0;
  gap: 12px;
  margin: 8px 0;
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
