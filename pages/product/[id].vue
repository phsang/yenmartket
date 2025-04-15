<template>
  <div class="product-detail-page">
    <!-- Loading state -->
    <LoadingSpinner v-if="pending" message="Loading product details..." />
    
    <!-- Error state -->
    <ErrorMessage 
      v-else-if="error" 
      :message="error.message || 'Failed to load product details. Please try again later.'" 
      show-retry 
      @retry="refresh()" 
    />

    <!-- Product details -->
    <div v-else-if="product" class="product-details">
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
        <div class="breadcrumbs">
          <NuxtLink to="/">Home</NuxtLink> &gt; 
          <span>{{ product.title }}</span>
        </div>
        
        <h1 class="product-title">{{ product.title }}</h1>
        
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
          <span class="rating-value">{{ product.rating.toFixed(1) }} ({{ product.reviews }} reviews)</span>
        </div>
        
        <div class="product-price">{{ product.price.toFixed(3) }} /Kg</div>
        
        <div class="product-description">
          <h3>Description</h3>
          <p>{{ product.description }}</p>
        </div>
        
        <div class="product-actions">
          <button class="btn btn-secondary">Add to Cart</button>
          <button class="btn">Buy Now</button>
        </div>
        
        <div class="product-meta">
          <p><strong>Availability:</strong> {{ product.inStock ? 'In Stock' : 'Out of Stock' }}</p>
        </div>
      </div>
    </div>
    
    <!-- Product not found -->
    <div v-else class="not-found">
      <ErrorMessage 
        type="info"
        title="Product Not Found" 
        message="The product you're looking for doesn't exist or has been removed." 
      />
      <NuxtLink to="/" class="btn back-to-home">Back to Home</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const id = route.params.id;

// Fetch product data
const { data: product, pending, error, refresh } = await useFetch(`/api/products/${id}`);
watchEffect(() => {
  console.log('Product changed:', product.value);
});

// SEO meta tags
useHead(() => {
  if (!product.value) {
    return {
      title: 'Product Not Found - Yenmarket',
      meta: [
        { name: 'description', content: 'The product you\'re looking for doesn\'t exist or has been removed.' }
      ]
    };
  }
  
  return {
    title: `${product.value.title} - Yenmarket`,
    meta: [
      { name: 'description', content: product.value.description },
      { property: 'og:title', content: `${product.value.title} - Yenmarket` },
      { property: 'og:description', content: product.value.description },
      { property: 'og:type', content: 'product' },
      { property: 'og:image', content: product.value.image },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `${product.value.title} - Yenmarket` },
      { name: 'twitter:description', content: product.value.description },
      { name: 'twitter:image', content: product.value.image }
    ]
  };
});
</script>

<style scoped>
.product-detail-page {
  width: 100%;
}

.product-details {
  display: grid;
  grid-template-columns: minmax(300px, 40%) 1fr;
  gap: 2rem;
  background-color: #fff;
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.product-image-container {
  position: relative;
  overflow: hidden;
  padding-top: 100%;
  background-color: #f8f9fa;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
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

.product-info {
  padding: 2rem;
}

.breadcrumbs {
  font-size: 0.9rem;
  margin-bottom: 1rem;
  color: #6c757d;
}

.breadcrumbs a {
  color: #6c757d;
}

.breadcrumbs a:hover {
  color: var(--primary-color);
}

.product-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--dark-color);
}

.product-rating {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.stars {
  display: flex;
  color: #f6993f;
  margin-right: 0.5rem;
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

.product-price {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.product-description {
  margin-bottom: 2rem;
}

.product-description h3 {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: var(--dark-color);
}

.product-description p {
  color: #4b5563;
  line-height: 1.7;
}

.product-actions {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
}

.product-meta {
  border-top: 1px solid var(--border-color);
  padding-top: 1.5rem;
  color: #6c757d;
}

.product-meta p {
  margin-bottom: 0.5rem;
}

.not-found {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.back-to-home {
  margin-top: 1rem;
}

@media (max-width: 768px) {
  .product-details {
    grid-template-columns: 1fr;
  }

  .product-image-container {
    padding-top: 75%;
  }

  .product-info {
    padding: 1.5rem;
  }

  .product-title {
    font-size: 1.75rem;
  }

  .product-price {
    font-size: 1.25rem;
  }
}

@media (max-width: 576px) {
  .product-info {
    padding: 1.25rem;
  }

  .product-title {
    font-size: 1.5rem;
  }

  .product-actions {
    flex-direction: column;
  }

  .product-actions .btn {
    width: 100%;
  }
}
</style>
