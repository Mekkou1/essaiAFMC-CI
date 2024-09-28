<template>
  <div class="marquee-container">
    <p class="marquee-text">
      <marquee behavior="" direction="left" style="color: white;">
        Favoriser l'innovation et la collaboration dans le domaine de l'enseignement supérieur et de la recherche pour les femmes.
      </marquee>
    </p>
  </div>
</template>

<style scoped>
.marquee-container {
  overflow: hidden; /* Empêche le débordement */
  white-space: nowrap; /* Empêche le texte de s'enrouler */
  background-color: #FB0683; /* Couleur d'arrière-plan */
}

.marquee-text {
  font-size: 25px;
  font-weight: bold;
  font-style: italic;
  margin: 0; /* Élimine les marges */
  padding: 10px 0; /* Padding vertical pour l'espacement */
}
</style>
