<template>
  <div class="product-card card">
    <div class="product-image-container">
      <img 
        v-if="product.image" 
        :src="product.image" 
        :alt="product.title"
        class="product-image"
        loading="lazy"
      />
      <div v-else class="product-image-placeholder">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.title }}</h3>
      <p class="product-description">{{ truncateDescription(product.description) }}</p>
      <div class="product-price-rating">
        <p class="product-price">{{ product.price.toFixed(2) }} /Kg</p>
        <div class="product-rating">
          <div class="stars" :title="`Rating: ${product.rating}/5`">
            <template v-for="i in 5" :key="i">
              <svg 
                v-if="i <= Math.round(product.rating)" 
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star filled">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
              <svg 
                v-else
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="star">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </template>
          </div>
          <span class="rating-value">{{ product.rating.toFixed(1) }}</span>
        </div>
      </div>
      <NuxtLink :to="`/product/${product.id}`" class="btn view-details">Chi tiết</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  rating: number;
}

const props = defineProps<{
  product: Product;
}>();

const truncateDescription = (text: string) => {
  return text.length > 80 ? text.substring(0, 80) + '...' : text;
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #fff;
}

.product-image-container {
  position: relative;
  padding-top: 66.67%; /* 2:3 aspect ratio */
  overflow: hidden;
  background-color: #f8f9fa;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.product-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #adb5bd;
}

.product-card:hover .product-image {
  transform: scale(1.05);
}

.product-info {
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-title {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
}

.product-description {
  color: #6c757d;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  flex-grow: 1;
}

.product-price-rating {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.product-price {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--primary-color);
}

.product-rating {
  display: flex;
  align-items: center;
}

.stars {
  display: flex;
  color: #f6993f;
  margin-right: 0.25rem;
}

.star {
  margin-right: 0.1rem;
}

.star.filled {
  color: #f6993f;
}

.rating-value {
  font-size: 0.9rem;
  color: #6c757d;
}

.view-details {
  align-self: center;
  width: 100%;
  text-align: center;
}

@media (max-width: 576px) {
  .product-info {
    padding: 1rem;
  }

  .product-title {
    font-size: 1rem;
  }

  .product-description {
    font-size: 0.85rem;
  }

  .product-price {
    font-size: 1rem;
  }
}
</style>
