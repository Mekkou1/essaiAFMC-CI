<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroActualite />
      <h2 class="head-title">
        Videotheque
      </h2>
    </div>
    <div class="container">
      <VideoGallery />
    </div><br>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <img src="/images/bibliotheque.jpg" alt="Illustration de la bibliothèque" class="img-fluid rounded shadow-sm mb-4">
          </div>
          <div class="col-md-6">
            <LibrairyVue />
          </div>
        </div>
      </div>
    </div>
    <div class="py-5 contener" style="background-color: white;">
      <div class="row">
        <div class="col-md-12 text-center">
          <SliderVue />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Ajouter une règle pour éviter les barres de navigation latérales */
html, body {
    overflow-x: hidden; /* Supprime le défilement horizontal global */
}
.head-title {
    background-color: #02063F;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    width: 100%; /* Prendre toute la largeur du conteneur */
    text-align: center; /* Centrer le texte */
    margin: 0; /* Supprimer les marges par défaut */
    padding: 10px 0; /* Ajouter un peu d'espace autour du texte pour améliorer l'apparence */
    border-radius: 0; /* Assurer qu'il n'y a pas de bord arrondi */
}
</style>
