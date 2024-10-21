<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroActualite />
      <h2 class="head-title">
        Photothèque
      </h2>
    </div>

    <div class="py-5 contener" style="background-color: white;">
      <div class="row">
        <div class="col-md-12 text-center">
          <!-- Show ImageGallery if no specific photo section is selected -->
          <ImageGallery v-if="!selectedPhotoSection" @show-section="showSection" />

          <!-- Show the PhotoGallery component dynamically based on selection -->
          <PhotoGallery
            v-if="selectedPhotoSection"
            :title="selectedPhotoSection.title"
            :photos="selectedPhotoSection.photos"
            @go-back="goBack"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Importation des données externalisées
import { photoSections } from '@/assets/data/photothequeData'
import ImageGallery from '@/components/ImageGallery.vue' // Chemin ajusté si nécessaire
import PhotoGallery from '@/components/PhotoGallery.vue' // Chemin ajusté si nécessaire

export default {
  name: 'PhotothequePage',
  components: {
    ImageGallery,
    PhotoGallery
  },
  data () {
    return {
      selectedPhotoSection: null // Gère la section affichée
    }
  },
  methods: {
    showSection (slug) {
      // Définir la section de photos sélectionnée à partir du slug
      this.selectedPhotoSection = photoSections[slug]
    },
    goBack () {
      // Réinitialiser pour afficher à nouveau la galerie d'images principale
      this.selectedPhotoSection = null
    }
  }
}
</script>

<style scoped>
.head-title {
  background-color: #02063F;
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  width: 100%;
  text-align: center;
  margin: 0;
  padding: 10px 0;
  border-radius: 0;
}
</style>
