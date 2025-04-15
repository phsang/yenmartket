<template>
  <div class="contact-page">
    <div class="page-header">
      <h1>Contact Us</h1>
    </div>
    
    <section class="contact-content">
      <div class="contact-info">
        <h2>Get In Touch</h2>
        <p>
          Have questions about our yenmarket? Want to learn more about the technologies
          used in this project? We'd love to hear from you!
        </p>
        
        <div class="contact-methods">
          <div class="contact-method">
            <div class="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </div>
            <div class="method-content">
              <h3>Email</h3>
              <p><a href="mailto:contact@demostore.example">contact@demostore.example</a></p>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <div class="method-content">
              <h3>Phone</h3>
              <p><a href="tel:+15551234567">+1 (555) 123-4567</a></p>
            </div>
          </div>
          
          <div class="contact-method">
            <div class="method-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <div class="method-content">
              <h3>Address</h3>
              <p>123 Demo Street<br>Technology Park<br>Sample City, 12345</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="contact-form-container">
        <h2>Send Us a Message</h2>
        <form class="contact-form" @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name</label>
            <input 
              id="name" 
              v-model="form.name" 
              type="text" 
              required 
              placeholder="Your name"
              :class="{ 'error': formErrors.name }"
            >
            <p v-if="formErrors.name" class="error-message">{{ formErrors.name }}</p>
          </div>
          
          <div class="form-group">
            <label for="email">Email</label>
            <input 
              id="email" 
              v-model="form.email" 
              type="email" 
              required 
              placeholder="Your email address"
              :class="{ 'error': formErrors.email }"
            >
            <p v-if="formErrors.email" class="error-message">{{ formErrors.email }}</p>
          </div>
          
          <div class="form-group">
            <label for="subject">Subject</label>
            <input 
              id="subject" 
              v-model="form.subject" 
              type="text" 
              required 
              placeholder="Message subject"
              :class="{ 'error': formErrors.subject }"
            >
            <p v-if="formErrors.subject" class="error-message">{{ formErrors.subject }}</p>
          </div>
          
          <div class="form-group">
            <label for="message">Message</label>
            <textarea 
              id="message" 
              v-model="form.message" 
              rows="5" 
              required 
              placeholder="Your message"
              :class="{ 'error': formErrors.message }"
            ></textarea>
            <p v-if="formErrors.message" class="error-message">{{ formErrors.message }}</p>
          </div>
          
          <button type="submit" class="btn" :disabled="isSubmitting">
            <span v-if="isSubmitting">
              Sending...
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="spin-icon">
                <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
              </svg>
            </span>
            <span v-else>Send Message</span>
          </button>
        </form>
        
        <div v-if="formSubmitted" class="success-message">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
          <h3>Message Sent!</h3>
          <p>Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// SEO meta tags
useHead({
  title: 'Contact Us - Yenmarket',
  meta: [
    { name: 'description', content: 'Get in touch with the Yenmarket team. We\'re here to answer your questions and provide assistance.' },
    { property: 'og:title', content: 'Contact Us - Yenmarket' },
    { property: 'og:description', content: 'Get in touch with the Yenmarket team. We\'re here to answer your questions and provide assistance.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:title', content: 'Contact Us - Yenmarket' },
    { name: 'twitter:description', content: 'Get in touch with the Yenmarket team. We\'re here to answer your questions and provide assistance.' }
  ]
});

// Form state
const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const formErrors = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const formSubmitted = ref(false);

// Form validation
const validateForm = () => {
  let isValid = true;
  
  // Reset errors
  formErrors.name = '';
  formErrors.email = '';
  formErrors.subject = '';
  formErrors.message = '';
  
  // Name validation
  if (!form.name.trim()) {
    formErrors.name = 'Name is required';
    isValid = false;
  }
  
  // Email validation
  if (!form.email.trim()) {
    formErrors.email = 'Email is required';
    isValid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    formErrors.email = 'Please enter a valid email address';
    isValid = false;
  }
  
  // Subject validation
  if (!form.subject.trim()) {
    formErrors.subject = 'Subject is required';
    isValid = false;
  }
  
  // Message validation
  if (!form.message.trim()) {
    formErrors.message = 'Message is required';
    isValid = false;
  } else if (form.message.trim().length < 10) {
    formErrors.message = 'Message should be at least 10 characters';
    isValid = false;
  }
  
  return isValid;
};

// Form submission
const submitForm = async () => {
  if (!validateForm()) {
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulate API request
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    form.name = '';
    form.email = '';
    form.subject = '';
    form.message = '';
    
    // Show success message
    formSubmitted.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      formSubmitted.value = false;
    }, 5000);
  } catch (error) {
    console.error('Error submitting form:', error);
    alert('There was an error sending your message. Please try again later.');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-page {
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

.contact-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.contact-info,
.contact-form-container {
  background-color: #fff;
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.contact-info h2,
.contact-form-container h2 {
  color: var(--dark-color);
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.contact-info h2:after,
.contact-form-container h2:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 3px;
  background-color: var(--primary-color);
}

.contact-info p {
  margin-bottom: 1.5rem;
  color: #4b5563;
  line-height: 1.7;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.contact-method {
  display: flex;
  align-items: flex-start;
}

.method-icon {
  margin-right: 1rem;
  color: var(--primary-color);
}

.method-content h3 {
  margin-bottom: 0.25rem;
  font-size: 1.1rem;
  color: var(--dark-color);
}

.method-content p {
  margin: 0;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: var(--dark-color);
}

.form-group input,
.form-group textarea {
  padding: 0.75rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  outline: none;
  font-family: inherit;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(52, 144, 220, 0.1);
}

.form-group input.error,
.form-group textarea.error {
  border-color: var(--danger-color);
}

.error-message {
  color: var(--danger-color);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spin-icon {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.success-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: var(--success-color);
  animation: fadeIn 0.5s;
}

.success-message svg {
  margin-bottom: 1rem;
}

.success-message h3 {
  color: var(--dark-color);
  margin-bottom: 0.5rem;
}

.success-message p {
  color: #4b5563;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .contact-content {
    grid-template-columns: 1fr;
  }
  
  .page-header {
    padding: 2rem 1rem;
  }
}

@media (max-width: 576px) {
  .contact-info,
  .contact-form-container {
    padding: 1.5rem;
  }
  
  .page-header {
    padding: 1.5rem 1rem;
  }
}
</style>
