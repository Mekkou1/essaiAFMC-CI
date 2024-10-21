<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div class="container">
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
            <!-- Vos autres éléments de menu -->
            <li class="nav-item">
              <NuxtLink to="/admin/dashbord" class="nav-link fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                Accueil
              </NuxtLink>
            </li>
            <li class="nav-item dropdown">
              <a
                id="navbarDropdown"
                class="nav-link dropdown-toggle fs-5 blink-animation no-arrow"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Afemc-ci
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NuxtLink to="/admin/about" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Présentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/admin/organigramme" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Organigramme
                  </NuxtLink>
                </li>
              </ul>
            <!-- Autres éléments de menu -->
            </li><li class="nav-item">
              <button class="nav-link fs-5 blink-animation logout-button" @click="logout">
                Déconnexion
              </button>
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
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.closeMenu()
    },
    logout () {
      // Logique de déconnexion
      localStorage.removeItem('authToken') // Suppression du token
      this.$router.push('/admin/login') // Redirection vers la page de login
    }
  }
}
</script>

  <style scoped>
    /* Vos autres styles */
    .logout-button {
      background-color: transparent;
      border: none;
      color: #FB0683;
      cursor: pointer;
    }

    .logout-button:hover {
      color: #FB0683;
      text-decoration: underline;
    }
  </style>
