<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Yenmarket</h3>
          <p><b>Địa chỉ:</b> 92 Nguyễn Trọng Tuyển, Phường 15, Phú Nhuận,TP.HCM</p>
          <p><b>Email:</b> yenmarket@mylifecompany.com.vn</p>
          <p><b>Hotline:</b> 1900 066 890</p>
          <p>Mã số doanh nghiệp: 0317179405. Đăng ký lần đầu: 20/09/2008</p>
        </div>
        <div class="footer-section">
          <h4>Liên kết</h4>
          <ul>
            <li><NuxtLink to="/">Trang chủ</NuxtLink></li>
            <li><NuxtLink to="/about">Về chúng tôi</NuxtLink></li>
            <li><NuxtLink to="/contact">Liên hệ</NuxtLink></li>
          </ul>
        </div>
        <div class="footer-section">
          <h4>Kết nối với chúng tôi</h4>
          <div class="social-links">
            <a href="#" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <a href="http://online.gov.vn/Home/WebDetails/66187" target="_blank" rel="noopener noreferrer" class="bct-logo">
            <img src="http://bizweb.dktcdn.net/100/382/166/themes/900578/assets/logo_bct.png?1724210132257" width="140" alt="BCT" />
          </a>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} Yenmarket. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>

<style scoped>
.footer {
  background-color: #f8f9fa;
  padding: 3rem 0 1.5rem;
  margin-top: 2rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-section h3,
.footer-section h4 {
  color: var(--dark-color);
  margin-bottom: 1rem;
}

.footer-section p {
  color: #6c757d;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #6c757d;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e9ecef;
  color: #495057;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: var(--primary-color);
  color: white;
}

.copyright {
  text-align: center;
  color: #6c757d;
  border-top: 1px solid #dee2e6;
  padding-top: 1.5rem;
}

.bct-logo {
  display: flex;
  margin-top: 20px;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 576px) {
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>
