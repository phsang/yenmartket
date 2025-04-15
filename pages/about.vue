<template>
  <div class="about-page">
    <div class="page-header">
      <h1>About Us</h1>
    </div>
    
    <section class="about-content">
      <div class="about-section">
        <h2>Our Story</h2>
        <p>
          Welcome to Yenmarket, a demonstration Nuxt 3 application showcasing modern web development techniques.
          This store was created as a sample project to highlight SSR capabilities, API integration, and performance
          optimization techniques in Vue.js.
        </p>
        <p>
          While this is a demo application, it demonstrates best practices for building high-performance e-commerce
          websites with a focus on SEO and user experience.
        </p>
      </div>
      
      <div class="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to demonstrate how modern web technologies can create fast, responsive, and user-friendly
          shopping experiences. We believe in creating websites that not only look great but also perform exceptionally
          well on all devices.
        </p>
      </div>
      
      <div class="about-section">
        <h2>Technical Features</h2>
        <ul class="features-list">
          <li>
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
              </svg>
            </div>
            <div class="feature-content">
              <h3>Nuxt 3 with SSR</h3>
              <p>Server-side rendering for improved SEO and initial page load performance.</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <div class="feature-content">
              <h3>API Integration</h3>
              <p>Seamless integration with backend APIs for dynamic content.</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <div class="feature-content">
              <h3>Responsive Design</h3>
              <p>Fully responsive layout that works on all devices from mobile to desktop.</p>
            </div>
          </li>
          <li>
            <div class="feature-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="1 4 1 10 7 10"></polyline>
                <polyline points="23 20 23 14 17 14"></polyline>
                <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
              </svg>
            </div>
            <div class="feature-content">
              <h3>Performance Optimization</h3>
              <p>Image lazy-loading, code splitting, and other techniques for optimal performance.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO meta tags
useHead({
  title: 'About Us - Yenmarket',
  meta: [
    { name: 'description', content: 'Learn about Yenmarket, our mission, and the technologies behind our high-performance e-commerce platform.' },
    { property: 'og:title', content: 'About Us - Yenmarket' },
    { property: 'og:description', content: 'Learn about Yenmarket, our mission, and the technologies behind our high-performance e-commerce platform.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'About Us - Yenmarket' },
    { name: 'twitter:description', content: 'Learn about Yenmarket, our mission, and the technologies behind our high-performance e-commerce platform.' }
  ]
});
</script>

<style scoped>
.about-page {
  width: 100%;
}

.page-header {
  background: linear-gradient(to right, var(--primary-color), #2779bd);
  color: white;
  padding: 3rem 1rem;
  margin-bottom: 2rem;
  text-align: center;
  border-radius: var(--border-radius);
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-section {
  margin-bottom: 3rem;
}

.about-section h2 {
  color: var(--dark-color);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.about-section h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.about-section p {
  margin-bottom: 1rem;
  line-height: 1.7;
  color: #4b5563;
}

.features-list {
  list-style: none;
  padding: 0;
}

.features-list li {
  display: flex;
  margin-bottom: 1.5rem;
}

.feature-icon {
  margin-right: 1rem;
  color: var(--primary-color);
}

.feature-content h3 {
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  color: var(--dark-color);
}

.feature-content p {
  margin: 0;
  color: #4b5563;
}

@media (max-width: 768px) {
  .page-header {
    padding: 2rem 1rem;
  }
  
  .about-content {
    padding: 0 1rem;
  }
}

@media (max-width: 576px) {
  .page-header {
    padding: 1.5rem 1rem;
  }
  
  .about-section h2 {
    font-size: 1.5rem;
  }
  
  .features-list li {
    flex-direction: column;
  }
  
  .feature-icon {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
