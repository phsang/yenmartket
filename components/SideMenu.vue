<template>
  <div class="side-menu-wrapper">
    <nav class="side-menu">
      <ul class="main-menu">
        <li v-for="(item, index) in menuItems" 
            :key="index" 
            class="menu-item"
            @mouseenter="activeSubmenu = index"
            @mouseleave="activeSubmenu = null">
          <div class="menu-item-content">
            <NuxtLink :to="item.link" class="menu-link">{{ item.title }}</NuxtLink>
            <div v-if="item.children && item.children.length" class="submenu-indicator">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
          
          <!-- Submenu -->
          <div v-if="item.children && item.children.length && activeSubmenu === index" class="submenu">
            <ul>
              <li v-for="(child, childIndex) in item.children" :key="childIndex">
                <NuxtLink :to="child.link" class="submenu-link">{{ child.title }}</NuxtLink>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface MenuItem {
  title: string;
  link: string;
  children?: MenuItem[];
}

const props = defineProps<{
  items?: MenuItem[];
}>();

// Default menu items if none provided
const defaultMenuItems: MenuItem[] = [
  {
    title: 'PROMOTION',
    link: '#promotions'
  },
  {
    title: 'OUR PRODUCTS',
    link: '#our_products',
    children: [
      { title: 'FRESH FOOD', link: '#fresh_food' },
      { title: 'FROZEN FOOD', link: '#frozen_food' },
      { title: 'SALTY GROCERY', link: '#salty_grocery' },
      { title: 'SWEET GROCERY', link: '#sweet_grocery' }
    ]
  },
  {
    title: 'YEN MARKET MENU',
    link: '#yen_market_menu',
    children: [
      { title: 'YEN\'s KITCHEN', link: '#yens_kitchen' }
    ]
  },
  {
    title: 'SEASONAL',
    link: '#seasonal',
    children: [
      { title: 'LUNAR NEW YEAR', link: '#lunar_new_year' }
    ]
  }
];

const menuItems = computed(() => props.items || defaultMenuItems);
const activeSubmenu = ref<number | null>(null);
</script>

<style scoped>
.side-menu-wrapper {
  width: 250px;
  background-color: #fff;
  border-radius: var(--border-radius);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.side-menu {
  padding: 0.5rem 0;
}

.main-menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  position: relative;
}

.menu-item-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
}

.menu-link {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  display: block;
  flex-grow: 1;
}

.menu-item:hover .menu-link {
  color: var(--primary-color);
}

.submenu-indicator {
  margin-left: 0.5rem;
  color: #777;
}

.submenu {
  position: absolute;
  top: 0;
  left: 100%;
  width: 220px;
  background-color: #fff;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: var(--border-radius);
  padding: 0.5rem 0;
  z-index: 100;
  animation: fadeIn 0.2s ease;
}

.submenu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.submenu-link {
  display: block;
  padding: 0.6rem 1rem;
  color: var(--text-color);
  text-decoration: none;
  transition: all 0.3s ease;
}

.submenu-link:hover {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--primary-color);
  padding-left: 1.2rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 992px) {
  .side-menu-wrapper {
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .submenu {
    position: static;
    width: 100%;
    box-shadow: none;
    padding-left: 1.5rem;
    animation: none;
  }
  
  .menu-item-content {
    flex-wrap: wrap;
  }
}
</style>
