<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-md-6 text-center order-1 order-md-2 imagesection">
          <div class="photo-stack">
            <img v-scroll-animation :src="aboutsectionData.images.photoMiddle" alt="Photo 2" class="photo-middle">
            <img v-scroll-animation :src="aboutsectionData.images.photoBottom" alt="Photo 3" class="photo-bottom">
          </div>
        </div>
        <!-- Text Section -->
        <div class="col-md-6 text-center text-md-left order-2 order-md-1">
          <h2 v-scroll-animation class="font-weight-bold">
            QUI SOMMES NOUS ?
          </h2>
          <p v-scroll-animation class="lead" style="font-weight: bold;">
            {{ aboutText }}
          </p>
          <div class="edit-links mt-3">
            <a href="#" class="edit-link" @click.prevent="toggleTextForm">Modifier le texte</a> |
            <a href="#" class="edit-link" @click.prevent="toggleImagesForm">Modifier les images</a>
          </div>
        </div>
      </div>

      <!-- Text Edit Form -->
      <div v-if="showTextForm" class="edit-form mt-4">
        <form @submit.prevent="updateText">
          <div class="form-group">
            <label for="aboutText">Texte</label>
            <textarea id="aboutText" v-model="aboutText" class="form-control" rows="3" />
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Enregistrer
          </button>
        </form>
      </div>

      <!-- Image Edit Form -->
      <div v-if="showImagesForm" class="edit-form mt-4">
        <form @submit.prevent="updateImages">
          <div class="form-group">
            <label for="middleImage">Image du milieu</label>
            <input id="middleImage" type="file" class="form-control" @change="handleImageUpload($event, 'middle')">
          </div>
          <div class="form-group">
            <label for="bottomImage">Image du bas</label>
            <input id="bottomImage" type="file" class="form-control" @change="handleImageUpload($event, 'bottom')">
          </div>
          <button type="submit" class="btn btn-primary mt-3">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import aboutsectionData from '~/assets/data/aboutsectionData'

export default {
  name: 'AboutSection',
  data () {
    return {
      aboutsectionData,
      showTextForm: false,
      showImagesForm: false,
      aboutText: aboutsectionData.text,
      newImageFiles: {
        middle: null,
        bottom: null
      },
      oldImageNames: {
        middle: aboutsectionData.images.photoMiddle.split('/').pop(),
        bottom: aboutsectionData.images.photoBottom.split('/').pop()
      }
    }
  },
  methods: {
    toggleTextForm () {
      this.showTextForm = !this.showTextForm
    },
    toggleImagesForm () {
      this.showImagesForm = !this.showImagesForm
    },
    handleImageUpload (event, position) {
      const file = event.target.files[0]
      if (file) {
        this.newImageFiles[position] = file
      }
    },
    // eslint-disable-next-line require-await
    async updateText () {
      this.aboutsectionData.text = this.aboutText
      alert('Texte mis à jour avec succès !')
      this.showTextForm = false
    },
    async updateImages () {
      const formData = new FormData()

      if (this.newImageFiles.middle) {
        formData.append('image', this.newImageFiles.middle)
        formData.append('oldImageName', this.oldImageNames.middle) // Envoyer l'ancien nom de l'image
      }
      if (this.newImageFiles.bottom) {
        formData.append('image', this.newImageFiles.bottom)
        formData.append('oldImageName', this.oldImageNames.bottom) // Envoyer l'ancien nom de l'image
      }

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      })
      const result = await response.json()

      if (result.success) {
        // Mettre à jour les liens des images
        if (this.newImageFiles.middle) {
          this.aboutsectionData.images.photoMiddle = `/images/${result.filename}`
        }
        if (this.newImageFiles.bottom) {
          this.aboutsectionData.images.photoBottom = `/images/${result.filename}`
        }
        alert('Images mises à jour avec succès !')
      } else {
        alert('Erreur lors de la mise à jour des images.')
      }

      this.showImagesForm = false
    }
  }
}
</script>

  <style scoped>
  .imagesection {
    margin-bottom: 20px;
  }

  .photo-stack {
    position: relative;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }

  .photo-stack img {
    width: 100%;
    display: block;
  }

  .photo-middle {
    position: absolute;
    top: 10px;
    left: 60%;
    width: 25%;
    z-index: 2;
  }

  .photo-bottom {
    position: relative;
    top: 170px;
    left: 20%;
    width: 50%;
    height: 100%;
    border-radius: 20px;
    z-index: 3;
  }

  .edit-links {
    margin-top: 20px;
  }

  .edit-link {
    cursor: pointer;
  }

  .btn {
    background: none;
    border-top: 5px solid #000000;
    border-bottom: 5px solid #000000;
    border-left: none;
    border-right: none;
    color: #000000;
  }
/* Positionner les formulaires devant les photos */
.edit-form {
  position: relative; /* Positionner par rapport à son conteneur */
  z-index: 3; /* Assurez-vous que le z-index est supérieur aux images */
  margin-top: 40px; /* Espace de 40px au-dessus */
}
  @media (max-width: 768px) {
    .photo-stack img {
      display: none;
    }

    .photo-middle {
      left: 50%;
    }

    .photo-bottom {
      top: 150px;
      left: 0%;
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    .photo-stack img {
      display: none;
    }

    .photo-middle {
      left: 50%;
    }

    .photo-bottom {
      top: 140px;
      left: 0%;
      width: 70%;
    }
  }
  </style>
