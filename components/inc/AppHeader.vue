<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="images/logo-AFEM-CI2.png" class="logo-img blink-animation" alt="Logo">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-label="Toggle navigation"
          @click="toggleMenu"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div id="navbarSupportedContent" class="collapse navbar-collapse" :class="{ show: isMenuOpen }">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NuxtLink to="/" class="nav-link fs-5 text-primary blink-animation" exact-active-class="active" @click.native="closeMenu">
                Accueil
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/about" class="nav-link fs-5 text-primary blink-animation" exact-active-class="active" @click.native="closeMenu">
                A Propos
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/actualite" class="nav-link fs-5 text-primary blink-animation" exact-active-class="active" @click.native="closeMenu">
                Actualités
              </NuxtLink>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link fs-5 text-primary blink-animation" exact-active-class="active" @click.native="closeMenu">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu () {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu () {
      this.isMenuOpen = false
    }
  }
}
</script>

<style scoped>
.logo-img {
  width: 80px;
}

.text-hover-purple:hover {
  color: purple;
}

.active {
  font-weight: bold;
  color: #007bff; /* Bootstrap's primary color */
  text-decoration: underline; /* Added underline to active item */
  text-decoration-color: #007bff; /* Changed underline color to match the text color */
}

.blink-animation {
  transition: opacity 1s;
  opacity: 1;
}
.blink-animation:hover {
  opacity: 0;
  animation: blink-animation 1s infinite;
}
@keyframes blink-animation {
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
