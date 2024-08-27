<template>
  <section
    id="hero"
    class="hero-section text-white text-center py-5"
    style="background: url('/images/hero_bg.jpg') no-repeat center center; background-size: cover; height: 85vh; width: 100%; position: relative;"
  >
    <div
      class="hover-effect animate__animated animate__fadeInUp"
      style="margin-top: 30px; margin-right: 70px; text-align: right;"
    >
      <h1
        class="display-4 font-weight-bold animate__animated animate__fadeInUp"
      >
        AFEMC-CI
      </h1>
    </div>
    <p
      class="lead animate__animated animate__fadeInUp"
      style="margin-top: 250px; font-size: 25px; font-weight: bold; font-style: italic; background-color: #FB0683;"
    >
      <marquee behavior="" direction="right">
        Favoriser l'innovation et la collaboration dans le domaine de l'enseignement supérieur et de la recherche pour les femmes.
      </marquee>
    </p>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Anton&display=swap');

@keyframes waveAnimation {
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
}

.animated {
  animation: waveAnimation 5s ease-in-out infinite;
}

.hover-effect:hover {
  transform: scale(1.05);
  transition: transform 0.5s ease-in-out;
}

.hero-section h1{
  margin-top: 10px;
  color: mediumblue;
  text-shadow: none;
  font-family: 'Anton', sans-serif;
  font-weight: 800;
  font-size: 150px;
  color: aliceblue;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 2rem 1rem;
    height: 60vh; /* Ajustez la hauteur pour les petits écrans */
    text-align: center; /* Centrer le texte pour les petits écrans */
  }

  .hover-effect {
    margin: 0; /* Supprimer les marges pour une meilleure adaptation */
    text-align: center;
  }

  .hero-section h1 {
    font-size: 50px; /* Réduire la taille de la police pour les petits écrans */
    font-weight: 800;
    margin: 20px 0; /* Ajuster les marges */
    white-space: nowrap; /* Empêcher le retour à la ligne */
    overflow: hidden; /* Masquer le débordement */
    text-overflow: ellipsis; /* Ajouter des points de suspension si le texte est trop long */
  }

  .hero-section p {
    font-size: 18px; /* Réduire la taille de la police du texte */
    margin-top: 10px; /* Ajuster la marge supérieure */
  }

  .hero-section marquee {
    font-weight: 800px;
    font-size: 40px; /* Ajuster la taille de la police du texte défilant */
  }
}

@media (max-width: 480px) {
  .hero-section {
    height: 50vh; /* Réduire encore la hauteur pour les très petits écrans */
  }

  .hero-section h1 {
    font-weight: 800px;
    font-size: 30px; /* Réduire davantage la taille de la police pour les très petits écrans */
    white-space: nowrap; /* Empêcher le retour à la ligne */
    overflow: hidden; /* Masquer le débordement */
    text-overflow: ellipsis; /* Ajouter des points de suspension si le texte est trop long */
  }

  .hero-section p {
    font-size: 16px; /* Réduire la taille de la police du texte pour les très petits écrans */
    margin-top: 10px; /* Ajuster la marge supérieure */
  }

  .hero-section marquee {
    font-size: 14px; /* Ajuster la taille de la police du texte défilant pour les très petits écrans */
  }
}
</style>
