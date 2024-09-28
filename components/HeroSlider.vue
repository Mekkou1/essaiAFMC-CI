<template>
  <header class="hero-slider" style="background-color: blue;">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="/images/hero_bg.jpg" class="d-block w-100" alt="Image 1">
        </div>
        <div class="carousel-item">
          <img src="/images/obj.jpg" class="d-block w-100" alt="Image 2">
        </div>
        <div class="carousel-item">
          <img src="/images/slide2.jpg" class="d-block w-100" alt="Image 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true" />
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true" />
        <span class="visually-hidden">Next</span>
      </button>
      <div class="overlay-content">
        <h1 class="display-4 font-weight-bold title">
          AFEMC-CI
        </h1>
        <div class="search-bar">
          <div class="input-group">
            <input
              v-model="searchQuery"
              type="text"
              class="form-control"
              placeholder="Rechercher dans..."
              @keyup.enter="performSearch"
            >
            <button class="btn btn-primary search-button" @click="performSearch">
              <i class="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      searchQuery: '' // The search input
    }
  },
  mounted () {
    // Initialize the carousel using Bootstrap's JavaScript API
    const carousel = document.querySelector('#carouselExample')
    // eslint-disable-next-line no-new, no-undef
    new bootstrap.Carousel(carousel, {
      interval: 3000 // Change image every 3 seconds
    })
  },
  methods: {
    performSearch () {
      const search = this.searchQuery.trim().toLowerCase()

      // Define the routing logic based on search terms
      switch (search) {
        case 'contact':
          this.$router.push('/contact')
          break
        case 'videotheque':
          this.$router.push('/videotheque')
          break
        case 'structure':
          this.$router.push('/structure')
          break
        case 'phototheque':
          this.$router.push('/phototheque')
          break
        case 'organigramme':
          this.$router.push('/organigramme')
          break
        case 'actualite':
        case 'actualité':
        case 'activité':
        case 'activités':
        case 'ceremonie':
        case 'ceremonies':
        case 'cérémonie':
        case 'cérémonies':
          this.$router.push('/actualite')
          break
        case 'presentation':
        case 'about':
          this.$router.push('/about')
          break
        default:
          alert('Aucune réponse ne correspond à votre recherche.')
      }
    }
  }
}
</script>

<style scoped>
.hero-slider {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height for larger screens */
  overflow: hidden;
}

.carousel-inner {
  position: relative;
  width: 100%;
  height: 100%; /* Ensure the carousel fills the entire slider */
}

.carousel-item img {
  object-fit: cover; /* Ensures the image covers the entire carousel */
  width: 100%;
  height: 100vh; /* Full viewport height */
}

.overlay-content {
  position: absolute;
  bottom: 100px; /* Adjusted to move the content slightly up */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  text-align: center;
  z-index: 1;
  color: white; /* Set the text color to white for better visibility */
}

.title {
  font-family: anton, sans-serif;
  color: #02063F; /* Set the text color */
  background-color: transparent;
  border: none;
  text-shadow:
    -2px -2px 0 white,  /* Top-left shadow */
    2px -2px 0 white,   /* Top-right shadow */
    -2px 2px 0 white,   /* Bottom-left shadow */
    2px 2px 0 white;    /* Bottom-right shadow */
  margin-bottom: 20px;
}

.search-bar {
  position: relative;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.search-bar .form-control {
  padding-right: 0px; /* Make room for the button */
  border-radius: 50px;
}

.search-bar .search-button {
  position: absolute;
  right: 0;
  top: 0;
  height: 100%; /* Adjusts button height to match input field height */
  background: #FB0683; /* Button background color */
  border: none;
  color: white;
  border-radius: 0px 50px 50px 0px;
  padding: 0 20px;
  cursor: pointer;
  z-index: 1; /* Ensures the button is above the input field */
}

.search-bar .search-button i {
  color: #004080;
}

/* Responsive styles */
@media (max-width: 768px) {
  .carousel-item img {
    height: auto;
    max-height: 60vh; /* Limit height for smaller screens */
  }

  .hero-slider {
    height: 40vh; /* Adjust the slider height for smaller screens */
  }

  .overlay-content {
    bottom: 20px;
  }

  .search-bar {
    width: 90%; /* Reduce width on smaller screens */
    max-width: 90%;
  }

  .search-bar .form-control {
    padding: 10px;
    width: calc(100% - 50px); /* Adjust width to make room for button */
  }

  .search-bar .search-button {
    padding: 0 10px;
    width: 50px; /* Adjust button width */
  }
}

@media (max-width: 576px) {
  .carousel-item img {
    height: auto;
    max-height: 50vh; /* Further limit height for very small screens */
  }

  .hero-slider {
    height: 30vh; /* Adjust the slider height for very small screens */
  }

  .overlay-content {
    bottom: 10px; /* Move content up */
  }

  .title {
    font-size: 1.5rem; /* Reduce title font size */
  }

  .search-bar {
    width: 100%; /* Make search bar full width */
  }

  .search-bar .form-control {
    width: calc(100% - 40px); /* Further reduced width */
  }

  .search-bar .search-button {
    width: 40px; /* Fixed button width for very small screens */
  }
}
</style>
