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
import ImageGallery from '@/components/ImageGallery.vue' // Adjust the path as needed
import PhotoGallery from '@/components/PhotoGallery.vue' // Adjust the path as needed

export default {
  name: 'PhotothequePage',
  components: {
    ImageGallery,
    PhotoGallery
  },
  data () {
    return {
      selectedPhotoSection: null, // Keeps track of which section to show
      photoSections: {
        audiences: {
          title: 'Audiences',
          photos: [
            '/images/audiance.jpg',
            '/images/audiance3.jpg'
            // Add more image paths here
          ]
        },
        'journee-scientifique': {
          title: 'Journée scientifique',
          photos: [
            '/images/audiance2.jpg',
            '/images/seminaire1.jpg',
            '/images/remise.jpg',
            '/images/goupe.jpg',
            '/images/groupe2.jpg',
            '/images/allocpresidente.jpg',
            '/images/journee.jpg'

            // Add more image paths here
          ]
        }
      }
    }
  },
  methods: {
    showSection (slug) {
      // Set the selected photo section based on the slug
      this.selectedPhotoSection = this.photoSections[slug]
    },
    goBack () {
      // Reset to show ImageGallery again
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
