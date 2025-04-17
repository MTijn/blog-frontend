<template>
  <div class="app-wrapper">
    <header>
      <nav class="navbar navbar-expand-md navbar-dark custom-header sticky-top">
        <div class="container">
          <router-link active-class="active" class="navbar-brand" to="/">
            <h1 class="site-title">MartijnKlene.nl</h1>
          </router-link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link
                  active-class="active"
                  class="nav-link"
                  :to="{ name: 'archive'}"
                >
                  <i class="fa fa-archive me-1"></i> Archive
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <main class="main-content py-5">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>

    <footer class="footer bg-light py-4 mt-5">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <h4 class="mb-3">Links</h4>
            <ul class="list-unstyled">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link :to="{ name: 'archive'}">Archive</router-link></li>
            </ul>
          </div>
          <div class="col-md-3">
            <h4 class="mb-3">Connect</h4>
            <div class="social-links">
              <a href="https://github.com/martijnklene" target="_blank" class="me-2">
                <i class="fa fa-github"></i>
              </a>
              <a href="https://twitter.com/martijnklene" target="_blank" class="me-2">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/in/martijnklene" target="_blank" class="me-2">
                <i class="fa fa-linkedin"></i>
              </a>
              <a rel="me" href="https://phpc.social/@mtijn">
                <i class="fa fa-mastodon" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-12 text-center">
            <p class="mb-0">&copy; {{ new Date().getFullYear() }} Martijn Klene. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Import Bootstrap and Fork-Awesome CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fork-awesome/css/fork-awesome.min.css';
</script>

<style>
:root {
    --primary-color: #0d6efd;
    --secondary-color: #6c757d;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

body {
    font-family: var(--font-family-sans-serif);
    line-height: 1.6;
    color: var(--dark-color);
    background-color: #f9f9f9;
}

.app-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.main-content {
    flex: 1;
}

.site-title {
    font-size: 1.5rem;
    margin-bottom: 0;
    font-weight: 700;
    color: #ffffff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    letter-spacing: 0.5px;
}

.navbar {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.custom-header {
    background: linear-gradient(135deg, #2c3e50, #4a5568);
    border-bottom: 3px solid #e74c3c;
    position: relative;
}

.custom-header::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3Ccircle cx='13' cy='13' r='1'/%3E%3C/g%3E%3C/svg%3E");
    pointer-events: none;
}

.custom-header .nav-link {
    position: relative;
    transition: color 0.3s ease;
}

.custom-header .nav-link::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #e74c3c;
    transition: width 0.3s ease;
}

.custom-header .nav-link:hover::after,
.custom-header .nav-link.active::after {
    width: 100%;
}

.custom-header .btn-outline-light {
    border-color: rgba(255, 255, 255, 0.5);
    transition: all 0.3s ease;
}

.custom-header .btn-outline-light:hover {
    background-color: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateY(-2px);
}

.footer {
    border-top: 1px solid #e9ecef;
}

.footer a {
    color: var(--dark-color);
    text-decoration: none;
}

.footer a:hover {
    color: var(--primary-color);
    text-decoration: underline;
}

.social-links a {
    font-size: 1.5rem;
    color: var(--secondary-color);
}

.social-links a:hover {
    color: var(--primary-color);
    text-decoration: none;
}

h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin-bottom: 1rem;
}

a {
    color: var(--primary-color);
    text-decoration: none;
}

a:hover {
    color: #0a58ca;
    text-decoration: underline;
}
</style>
