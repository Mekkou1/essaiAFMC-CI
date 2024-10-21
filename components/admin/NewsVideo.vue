<template>
  <div>
    <!-- News Section -->
    <section id="news" class="py-5" style="text-align: center;">
      <div class="container">
        <h2 class="font-weight-bold text-center">
          A la une
        </h2>

        <div class="row">
          <!-- Featured News -->
          <div class="col-md-12 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <!-- Displaying the Featured Title -->
                <h5 class="card-title font-weight-bold">
                  {{ featuredTitle }}
                  <!-- Link to edit the title -->
                  <a href="#" style="font-size: 14px; color: blue;" @click.prevent="showEditForm('title')">[Modifier]</a>
                </h5>

                <!-- Embedding the YouTube video -->
                <div class="embed-responsive embed-responsive-16by9 mb-3">
                  <iframe
                    class="embed-responsive-item youtube-video"
                    :src="videoUrl"
                    allowfullscreen
                    style="width: 100%; height: 450px;"
                  />
                </div>
                <!-- Link to edit the YouTube video URL -->
                <a href="#" style="font-size: 14px; color: blue;" @click.prevent="showEditForm('video')">[Modifier le lien de la vidéo]</a>

                <!-- Displaying the marquee text -->
                <marquee width="300" scrollamount="300" scrolldelay="5000" style="color: red;">
                  {{ marqueeText }}
                </marquee>
                <!-- Link to edit the marquee text -->
                <a href="#" style="font-size: 14px; color: blue;" @click.prevent="showEditForm('marquee')">[Modifier le texte du bandeau]</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Formulaire de modification -->
        <div v-if="editing" class="mt-4">
          <form @submit.prevent="updateData">
            <!-- Edit title form -->
            <div v-if="editField === 'title'" class="mb-3">
              <label for="title" class="form-label">Modifier le titre :</label>
              <input
                id="title"
                v-model="formData.title"
                type="text"
                class="form-control"
                required
              >
            </div>

            <!-- Edit video URL form -->
            <div v-if="editField === 'video'" class="mb-3">
              <label for="videoUrl" class="form-label">Modifier l'URL de la vidéo :</label>
              <input
                id="videoUrl"
                v-model="formData.videoUrl"
                type="text"
                class="form-control"
                required
              >
            </div>

            <!-- Edit marquee text form -->
            <div v-if="editField === 'marquee'" class="mb-3">
              <label for="marqueeText" class="form-label">Modifier le texte du bandeau :</label>
              <input
                id="marqueeText"
                v-model="formData.marqueeText"
                type="text"
                class="form-control"
                required
              >
            </div>

            <!-- Submit button -->
            <button type="submit" class="btn btn-primary">
              Enregistrer les modifications
            </button>

            <!-- Cancel button -->
            <button type="button" class="btn btn-secondary" @click="cancelEdit">
              Annuler
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { newsData } from '~/assets/data/newsData.js'

export default {
  data () {
    return {
      // Data to display
      featuredTitle: newsData.featuredTitle,
      videoUrl: newsData.videoUrl,
      marqueeText: newsData.marqueeText,

      // For editing
      editing: false, // To track if we're editing
      editField: '', // Field currently being edited
      formData: {
        title: '', // To hold the new title value
        videoUrl: '', // To hold the new video URL
        marqueeText: '' // To hold the new marquee text
      }
    }
  },
  methods: {
    showEditForm (field) {
      // Set the form based on which field is being edited
      this.editField = field
      this.editing = true

      // Pre-fill the formData with the current values
      if (field === 'title') {
        this.formData.title = this.featuredTitle
      } else if (field === 'video') {
        this.formData.videoUrl = this.videoUrl
      } else if (field === 'marquee') {
        this.formData.marqueeText = this.marqueeText
      }
    },
    updateData () {
      // Update the displayed data based on form input
      if (this.editField === 'title') {
        this.featuredTitle = this.formData.title
      } else if (this.editField === 'video') {
        this.videoUrl = this.formData.videoUrl
      } else if (this.editField === 'marquee') {
        this.marqueeText = this.formData.marqueeText
      }
      // Reset editing state
      this.editing = false
      this.editField = ''
    },
    cancelEdit () {
      // Cancel editing and hide the form
      this.editing = false
      this.editField = ''
    }
  }
}
</script>

  <style scoped>
  @keyframes customFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .custom-animation {
    animation: customFadeIn 1s ease-out forwards;
  }

  @media (max-width: 768px) {
    .youtube-video {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 480px) {
    .youtube-video {
      max-width: 100%;
      height: auto;
    }
  }
  </style>
