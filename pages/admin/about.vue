<template>
  <div>
    <!-- Hero Section -->
    <div>
      <h2 class="head-title">
        Présentation
      </h2>
    </div>

    <PresentationVue />
    <div class="py-5 contener">
      <div class="row missions">
        <div class="col-md-12 text-center" />
      </div>
    </div>
  </div>
</template>

<script>
import PresentationVue from '~/components/admin/PresentationVue.vue'

export default {
  name: 'About',
  components: {
    PresentationVue
  },
  layout: 'admin', // Spécifiez le layout ici

  head () {
    return {
      title: 'A propos',
      meta: [
        // (vos métadonnées ici)
      ]
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

  .contener {
    overflow-x: hidden; /* Évite le défilement horizontal */
  }

  /* Styles supplémentaires pour assurer une mise en page fluide */
  @media (max-width: 768px) {
    .head-title {
      font-size: 20px; /* Ajuste la taille de police pour les petits écrans */
    }
  }
  </style>
