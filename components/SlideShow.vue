<template>
  <div 
    class="slideshow-container"
    @mouseenter="pauseAutoplay"
    @mouseleave="resumeAutoplay"
  >
    <div 
      v-for="(slide, index) in slides" 
      :key="index"
      class="slide"
      :class="{ active: currentSlide === index }"
      :style="{ backgroundImage: `url(${slide.image})` }"
    >
      <div class="slide-content">
        <h2>{{ slide.title }}</h2>
        <p>{{ slide.description }}</p>
        <NuxtLink v-if="slide.buttonText" :to="slide.buttonLink" class="btn slide-btn">
          {{ slide.buttonText }}
        </NuxtLink>
      </div>
    </div>

    <div class="slideshow-navigation">
      <button @click="prevSlide" class="nav-btn prev-btn" aria-label="Previous slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      <div class="slideshow-indicators">
        <button 
          v-for="(slide, index) in slides" 
          :key="index"
          @click="goToSlide(index)"
          class="indicator"
          :class="{ active: currentSlide === index }"
          :aria-label="`Go to slide ${index + 1}`"
        ></button>
      </div>
      <button @click="nextSlide" class="nav-btn next-btn" aria-label="Next slide">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

interface Slide {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const props = defineProps<{
  slides: Slide[];
  autoplay?: boolean;
  interval?: number;
}>();

const currentSlide = ref(0);
const autoplayInterval = ref<number | null>(null);

const startAutoplay = () => {
  if (props.autoplay && props.interval) {
    autoplayInterval.value = window.setInterval(() => {
      nextSlide();
    }, props.interval);
  }
};

const stopAutoplay = () => {
  if (autoplayInterval.value) {
    clearInterval(autoplayInterval.value);
    autoplayInterval.value = null;
  }
};

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.slides.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.slides.length) % props.slides.length;
};

const goToSlide = (index: number) => {
  currentSlide.value = index;
};

// Start autoplay on mount
onMounted(() => {
  startAutoplay();
});

// Clean up on unmount
onUnmounted(() => {
  stopAutoplay();
});

// Pause autoplay on hover
const pauseAutoplay = () => {
  if (props.autoplay) {
    stopAutoplay();
  }
};

const resumeAutoplay = () => {
  if (props.autoplay) {
    startAutoplay();
  }
};
</script>

<style scoped>
.slideshow-container {
  position: relative;
  height: 500px;
  overflow: hidden;
  border-radius: var(--border-radius);
}

.slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.slide.active {
  opacity: 1;
  z-index: 1;
}

.slide-content {
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: var(--border-radius);
  margin-left: 5%;
  animation: fadeInLeft 1s ease-out;
}

.slide-content h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slide-content p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.slide-btn {
  display: inline-block;
  background-color: var(--primary-color);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.slide-btn:hover {
  background-color: #2779bd;
}

.slideshow-navigation {
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}

.slideshow-indicators {
  display: flex;
  gap: 0.5rem;
  margin: 0 1rem;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.indicator.active {
  background-color: white;
  transform: scale(1.2);
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 768px) {
  .slideshow-container {
    height: 400px;
  }
  
  .slide-content {
    display: none;
  }
  
  .slide-content h2 {
    font-size: 2rem;
  }
  
  .slide-content p {
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .slideshow-container {
    height: 350px;
  }
  
  .slide-content {
    max-width: 90%;
    padding: 1rem;
    margin-left: 0;
    margin: 0 auto;
  }
  
  .slide-content h2 {
    font-size: 1.5rem;
  }
  
  .nav-btn {
    width: 36px;
    height: 36px;
  }
}
</style>
