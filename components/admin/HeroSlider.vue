<template>
  <header class="hero-slider" style="background-color: blue;">
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div
          v-for="(slide, index) in herosliderData.slides"
          :key="index"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <img :src="slide.image" class="d-block w-100" :alt="slide.alt">
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true" />
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExample"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true" />
      <span class="visually-hidden">Next</span>
    </button>
    <div class="overlay-content">
      <a href="#" class="edit-link text-white" @click.prevent="toggleImagesForm">
        Modifier les images
      </a>
    </div>

    <div v-if="showImagesForm" class="edit-form mt-4">
      <form @submit.prevent="updateImages">
        <div v-for="(slide, index) in herosliderData.slides" :key="index" class="form-group">
          <label :for="'sliderImage' + index">Image {{ index + 1 }}</label>
          <input
            :id="'sliderImage' + index"
            type="file"
            class="form-control"
            @change="handleImageUpload($event, index)"
          >
        </div>
        <button type="submit" class="btn btn-primary mt-3">
          Enregistrer
        </button>
      </form>
    </div>
  </header>
</template>

<script>
import herosliderData from '~/assets/data/herosliderData'

export default {
  data () {
    return {
      herosliderData,
      showImagesForm: false,
      newImageFiles: []
    }
  },
  mounted () {
    const carousel = document.querySelector('#carouselExample')
    // eslint-disable-next-line no-new, no-undef
    new bootstrap.Carousel(carousel, {
      interval: 3000
    })
  },
  methods: {
    editText () {
      // Logique pour modifier le texte si nécessaire
      console.log('Modification du texte demandée.')
    },
    toggleImagesForm () {
      this.showImagesForm = !this.showImagesForm
      console.log("Formulaire d'images affiché:", this.showImagesForm)
    },
    handleImageUpload (event, index) {
      const file = event.target.files[0]
      if (file) {
        this.newImageFiles[index] = file
      } else {
        this.newImageFiles[index] = null // Conserve l'image actuelle si aucune nouvelle image n'est téléchargée
      }
    },
    // eslint-disable-next-line require-await
    async updateImages () {
      for (let i = 0; i < this.herosliderData.slides.length; i++) {
        if (this.newImageFiles[i]) {
          const formData = new FormData()
          formData.append('fileName', this.newImageFiles[i].name)
          const reader = new FileReader()

          reader.onload = async (e) => {
            const data = e.target.result.split(',')[1]
            formData.append('fileData', data)

            const response = await fetch('/api/upload', {
              method: 'POST',
              body: formData
            })

            const result = await response.json()
            if (result.success) {
              this.herosliderData.slides[i].image = `/images/${this.newImageFiles[i].name}`
            } else {
              alert("Erreur lors de la mise à jour de l'image.")
            }
          }
          reader.readAsDataURL(this.newImageFiles[i])
        } else {
          // Conserve l'image actuelle si aucune nouvelle image n'est téléchargée
          // eslint-disable-next-line no-self-assign
          this.herosliderData.slides[i].image = this.herosliderData.slides[i].image
        }
      }
      this.showImagesForm = false
      alert('Images mises à jour avec succès !')
    }
  }
}
</script>

  <style scoped>
  /* Ajoutez ici vos styles */
  .edit-link.text-white {
    color: white;
  }
  </style>
