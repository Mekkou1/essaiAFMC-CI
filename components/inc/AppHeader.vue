<template>
  <div class="sticky-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
      <div class="container">
        <a class="navbar-brand" href="/">
          <img src="images/logo-AFEM-CI2.png" class="logo-img blink-animation" alt="Logo">
        </a>
        <!-- Icônes des réseaux sociaux -->
        <div class="social-icons d-none d-lg-flex">
          <a href=" " target="_blank" class="social-icon">
            <img src="images/facebook.png" class="fab fa-facebook-f" alt="facebook" style="width: 20px; height: 20px;">
          </a>
          <a href=" " target="_blank" class="social-icon">
            <img src="images/instag.png" class="fab fa-instagram" alt="instagram" style="width: 20px; height: 20px;">
          </a>
          <a href=" " target="_blank" class="social-icon">
            <img src="images/linkdin.png" class="fab fa-linkedin-in" alt="linkedin" style="width: 20px; height: 20px;">
          </a>
        </div>
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
              <NuxtLink to="/" class="nav-link fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
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
                  <NuxtLink to="/about" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Présentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/organigramme" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Organigramme
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/structure" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Structure et Fonctionnement
                  </NuxtLink>
                </li>
              </ul>
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
                Actualité
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <NuxtLink to="/phototheque" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Photothèque
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/actualite" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Activités et Cérémonies
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink to="/videotheque" class="dropdown-item fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
                    Videothèque
                  </NuxtLink>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <NuxtLink to="/contact" class="nav-link fs-5 blink-animation" exact-active-class="active" @click.native="scrollToTop">
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
    },
    scrollToTop () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      this.closeMenu()
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.logo-img {
  width: 80px;
}

.active, .dropdown-item.active {
  font-weight: bold;
  color: #FB0683; /* Couleur mise à jour */
  text-decoration: underline;
  text-decoration-color: #FB0683; /* Couleur de soulignement mise à jour */
}

.nav-link, .dropdown-item {
  color: #FB0683; /* Couleur mise à jour */
}

.nav-link:hover, .dropdown-item:hover {
  color: #FB0683; /* Couleur sur hover mise à jour */
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

/* Masquer la flèche du menu déroulant */
.no-arrow::after {
  display: none;
}

/* Styles pour les icônes des réseaux sociaux */
.social-icons {
  position: absolute;
  top: 10px;
  right: 250px;
  display: flex;
  gap: 10px;
  z-index: 1000; /* Assurez-vous que les icônes sont au-dessus du menu */
}

.social-icon img {
  width: 20px;
  height: 20px;
}

.social-icon:hover {
  color: #0056b3; /* Couleur des icônes au survol */
}

/* Styles pour positionner le menu à 10px du bas */
.navbar {
  position: relative; /* Positionne le menu par rapport à son conteneur */
  bottom: 10px; /* Aligne le menu à 10px du bas de son conteneur */
  margin-bottom: 0; /* Supprime la marge basse du menu */
  padding-bottom: 0; /* Supprime le padding bas du menu */
}
</style>
