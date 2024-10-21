<template>
  <div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">
            Pourquoi l'AFEMC-CI ?
          </h2>
          <div class="container">
            <div class="row">
              <div class="col-md-8" style="text-align: left;">
                <p class="lead" style="margin-top: 70px; text-size-adjust: 30px;">
                  {{ content }}
                </p>
                <!-- Lien pour afficher le formulaire de modification du contenu -->
                <a href="#" @click.prevent="toggleContentForm">Modifier le contenu</a>
                <div v-if="isContentFormVisible">
                  <textarea v-model="newContent" rows="4" class="form-control" />
                  <button class="btn btn-primary mt-2" @click="submitContentChange">
                    Soumettre
                  </button>
                </div>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="image-container">
                  <img :src="imageUrl" :alt="imageAlt" class="img-fluid rounded-circle">
                </div>
                <!-- Lien pour afficher le formulaire de modification de l'image -->
                <a href="#" @click.prevent="toggleImageForm">Modifier l'image</a>
                <div v-if="isImageFormVisible" class="mt-3">
                  <input type="file" class="form-control-file" @change="handleImageUpload">
                  <button class="btn btn-primary mt-2" @click="submitImageChange">
                    Soumettre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br>
    </div>
  </div>
</template>

<script>
import { presentationData } from '~/assets/data/presentationData.js'

export default {
  name: 'PresentationVue',
  data () {
    return {
      heading: presentationData.heading,
      content: presentationData.content,
      newContent: presentationData.content, // Variable pour le nouveau contenu
      imageUrl: presentationData.imageUrl,
      imageAlt: presentationData.imageAlt,
      isContentFormVisible: false, // État pour afficher/masquer le formulaire de contenu
      isImageFormVisible: false, // État pour afficher/masquer le formulaire d'image
      newImage: null // Variable pour la nouvelle image
    }
  },
  methods: {
    toggleContentForm () {
      this.isContentFormVisible = !this.isContentFormVisible // Alterne la visibilité du formulaire de contenu
    },
    submitContentChange () {
      this.content = this.newContent // Met à jour le contenu avec la nouvelle valeur
      this.isContentFormVisible = false // Masque le formulaire après soumission
      // Logique pour mettre à jour le fichier de données ici
      console.log('Nouveau contenu soumis:', this.newContent)
    },
    toggleImageForm () {
      this.isImageFormVisible = !this.isImageFormVisible // Alterne la visibilité du formulaire d'image
    },
    handleImageUpload (event) {
      this.newImage = event.target.files[0] // Stocke la nouvelle image
    },
    submitImageChange () {
      if (this.newImage) {
        // Logique pour supprimer l'ancienne image
        // Remplacer l'ancienne image par la nouvelle dans le dossier static/images
        // Assurez-vous que vous avez un moyen d'accéder à votre backend pour gérer cela
        console.log('Nouvelle image soumise:', this.newImage)
        // Mettez à jour le lien de l'image dans le fichier de données
        // Exemple : mettre à jour imageUrl avec le nouveau chemin de l'image
        this.imageUrl = URL.createObjectURL(this.newImage) // Met à jour l'image affichée localement
        this.isImageFormVisible = false // Masque le formulaire après soumission
      }
    }
  }
}
</script>

  <style scoped>
  .image-container {
    background-color: #02063F;
    padding: 20px;
    border-radius: 10px;
    display: inline-block;
  }
  .img-fluid{
    border: 5px solid #FB0683; /* Couleur et épaisseur de la bordure */
  }
  </style>
