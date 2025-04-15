<template>
  <header class="header">
    <div class="container">
      <div class="header-content">
        <NuxtLink to="/" class="logo">
          <h1>Yenmarket</h1>
        </NuxtLink>
        
        <div class="header-right">
          <!-- Hotline -->
          <div class="hotline">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
            <span>Hotline: 1900-066-890</span>
          </div>
          
          <!-- Cart Icon -->
          <div class="cart-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg>
            <span class="cart-count">0</span>
          </div>
          
          <!-- <nav class="navigation">
            <ul class="nav-list" :class="{ 'active': isMenuOpen }">
              <li><NuxtLink to="/" @click="closeMenu">Home</NuxtLink></li>
              <li><NuxtLink to="/about" @click="closeMenu">About</NuxtLink></li>
              <li><NuxtLink to="/contact" @click="closeMenu">Contact</NuxtLink></li>
            </ul>
            <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
              <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </nav> -->

        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.header {
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.logo {
  color: var(--primary-color);
  font-weight: 700;
  text-decoration: none;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.hotline {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.hotline svg {
  color: var(--primary-color);
}

.cart-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-color);
  transition: color 0.3s ease;
}

.cart-icon:hover {
  color: var(--primary-color);
}

.cart-count {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: var(--primary-color);
  color: white;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  font-size: 11px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}

.navigation {
  display: flex;
  align-items: center;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-list li a {
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-list li a:hover,
.nav-list li a.router-link-active {
  color: var(--primary-color);
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: none;
  color: var(--text-color);
}

@media (max-width: 992px) {
  .hotline span {
    display: none;
  }
  
  .header-right {
    gap: 1rem;
  }
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .nav-list {
    position: fixed;
    top: 0;
    right: -100%;
    width: 70%;
    height: 100vh;
    background-color: #fff;
    flex-direction: column;
    padding: 5rem 2rem;
    transition: right 0.3s ease;
    z-index: 1000;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  }

  .nav-list.active {
    right: 0;
  }

  .nav-list li {
    margin: 1rem 0;
  }
}

@media (max-width: 576px) {
  .logo h1 {
    font-size: 1.2rem;
  }
  
  .header-right {
    gap: 0.75rem;
  }
}
</style>
