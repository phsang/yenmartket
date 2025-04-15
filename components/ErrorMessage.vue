<template>
  <div class="error-container" :class="{ [type]: true }">
    <div class="error-icon">
      <svg v-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <line x1="12" y1="16" x2="12.01" y2="16"></line>
      </svg>
      <svg v-else-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    </div>
    <div class="error-content">
      <h3 v-if="title" class="error-title">{{ title }}</h3>
      <p class="error-message">{{ message }}</p>
      <button v-if="showRetry" @click="$emit('retry')" class="retry-button">
        Try Again
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="23 4 23 10 17 10"></polyline>
          <polyline points="1 20 1 14 7 14"></polyline>
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  type?: 'error' | 'warning' | 'info';
  title?: string;
  message: string;
  showRetry?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: 'error',
  title: '',
  showRetry: false
});

defineEmits(['retry']);
</script>

<style scoped>
.error-container {
  display: flex;
  align-items: flex-start;
  padding: 1.5rem;
  border-radius: var(--border-radius);
  margin: 1.5rem 0;
}

.error-container.error {
  background-color: #fee2e2;
  border-left: 4px solid var(--danger-color);
}

.error-container.warning {
  background-color: #fff7ed;
  border-left: 4px solid var(--warning-color);
}

.error-container.info {
  background-color: #eff6ff;
  border-left: 4px solid var(--primary-color);
}

.error-icon {
  margin-right: 1rem;
}

.error-container.error .error-icon {
  color: var(--danger-color);
}

.error-container.warning .error-icon {
  color: var(--warning-color);
}

.error-container.info .error-icon {
  color: var(--primary-color);
}

.error-content {
  flex: 1;
}

.error-title {
  font-size: 1.1rem;
  margin: 0 0 0.5rem 0;
  color: var(--dark-color);
}

.error-message {
  margin: 0;
  color: #4b5563;
}

.retry-button {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: var(--primary-color);
  font-weight: 500;
  margin-top: 1rem;
  padding: 0.5rem 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.retry-button:hover {
  color: #2779bd;
}
</style>
