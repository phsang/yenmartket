<template>
  <div class="home-page">
    <!-- Hero section with Menu and Slideshow -->
    <div class="hero-container">
      <!-- Side Menu -->
      <SideMenu />

      <!-- Slideshow -->
      <SlideShow :slides="slides" :autoplay="true" :interval="5000" class="main-slideshow" />
    </div>

    <div class="news_list">
      <div class="news_item">
        <img src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_1.jpg" alt="Công thức cho những bữa ăn thơm ngon, dinh dưỡng" />
      </div>
      <div class="news_item">
        <img src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_2.jpg" alt="Dinh dưỡng cho bạn và cả gia đình" />
      </div>
      <div class="news_item">
        <img src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/banner3_3.jpg" alt="Tươi mới mỗi ngày" />
      </div>
    </div>

    <div class="main_banner">
      <img src="https://mastererp.mylifecompany.com/Resources/Images/Object/Banner9114012025041546_S.jpg" alt="main banner" />
    </div>

    <section id="featured-products" class="products-section">
      <!-- Loading state -->
      <LoadingSpinner v-if="pending" message="Loading products..." />

      <!-- Error state -->
      <ErrorMessage v-else-if="error" :message="error.message || 'Failed to load products. Please try again later.'" show-retry @retry="refresh()" />

      <!-- Products grid -->
      <div v-else-if="data?.products?.length">
        <div v-for="product in data.products">
          <h2 class="section-title">{{ product.category }}</h2>
          <div class="products-grid grid">
            <ProductCard v-for="pro in product.products" :key="pro.id" :product="pro" />
          </div>
          <div class="view-all">
            <a href="#" class="btn view-all-category">See all</a>
          </div>
        </div>
      </div>

      <!-- Empty state -->
      <div v-else class="empty-state">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <p>No products found</p>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data, pending, error, refresh } = await useFetch('/api/products');

// Slideshow data
const slides = [
  {
    image: 'https://mastererp.mylifecompany.com/Resources/Images/banner%201.jpg',
    title: 'Quà tết trao tay, gửi trọn tấm lòng',
    buttonText: 'Shop Now',
    buttonLink: '#featured-products'
  },
  {
    image: 'https://mastererp.mylifecompany.com/Resources/Images/Banner%208.jpg',
    title: 'Mua sắm tại gia, freeship tận nhà',
    buttonText: 'Explore New Items',
    buttonLink: '#featured-products'
  }
];

// SEO meta tags
useHead({
  title: 'Yenmarket - High-Quality Products',
  meta: [
    { name: 'description', content: 'Discover our collection of high-quality products at affordable prices in our yenmarket.' },
    { property: 'og:title', content: 'Yenmarket - High-Quality Products' },
    { property: 'og:description', content: 'Discover our collection of high-quality products at affordable prices in our yenmarket.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Yenmarket - High-Quality Products' },
    { name: 'twitter:description', content: 'Discover our collection of high-quality products at affordable prices in our yenmarket.' }
  ]
});
</script>

<style scoped>
.home-page {
  width: 100%;
}

.hero-container {
  display: flex;
  margin-bottom: 2rem;
  gap: 1rem;
}

.main-slideshow {
  flex: 1;
}

.section-title {
  font-size: 24px;
  margin: 2rem 0 1rem;
  color: var(--dark-color);
}

.products-grid {
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  margin-top: 1rem;
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #6c757d;
  background-color: #f8f9fa;
  border-radius: var(--border-radius);
  text-align: center;
}

.empty-state svg {
  margin-bottom: 1rem;
}

.news_list {
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  gap: 10px;
  overflow-y: hidden;
}

.news_list::-webkit-scrollbar {
  display: none;
}

.news_item {
  padding: 5px 0;
  width: calc(33.33% - 12px);
  min-width: 320px;
}

.news_item img {
  width: 100%;
  object-fit: contain;
}

.main_banner img {
  width: 100%
}

.view-all {
  margin: 16px 0;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
}

.view-all:before,
.view-all:after {
  content: "";
  position: absolute;
  border-top: 1px solid #cfcfcf;
  top: 50%;
  width: calc(50% - 60px);
}

.view-all:before {
  left: 0;
}

.view-all:after {
  right: 0;
}

.view-all-category {
  background-color: #ca2628;
  border-radius: 99px;
  width: 100px;
  text-align: center;
}

@media (max-width: 992px) {
  .hero-container {
    flex-direction: column;
  }

  .side-menu-wrapper {
    display: none;
  }

  .side-menu-wrapper.menu--active {
    display: block;
  }

  .main-slideshow {
    flex: auto 0 0;
    width: 100%;
    margin-bottom: 1rem;
    height: 290px;
  }
}

@media (max-width: 768px) {
  .products-grid {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  .news_item {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .products-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
