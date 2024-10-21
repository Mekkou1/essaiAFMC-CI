<template>
  <section id="hero" class="hero-section text-white text-center py-5">
    <img src="/images/heroactualites.png" alt="Actualités" class="hero-image">
    <div class="container d-flex flex-column justify-content-center align-items-center h-100 animate__animated animate__fadeInUp">
      <div style="padding: 40px; border-radius: 10px; margin: 0 8px;" class="hover-effect animate__animated animate__fadeInUp">
        <h1 class="display-4 font-weight-bold title animate__animated animate__fadeInUp">
          ACTUALITES
        </h1>
      </div>
      <p class="lead animate__animated animate__fadeInUp" style="font-size: 18px; font-weight: bold;" />
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  position: relative; /* Permet de positionner l'image */
  height: 378px; /* Maintient la hauteur actuelle */
  overflow: hidden; /* Cache les débordements */
  object-fit: contain; /* Ajuste l'image sans la rognée */
}

.hero-image {
  position: absolute; /* Permet de positionner l'image dans le conteneur */
  top: 50%;
  left: 50%;
  width: auto;
  height: 100%;
  min-width: 100%; /* L'image doit couvrir toute la largeur */
  min-height: 100%; /* L'image doit couvrir toute la hauteur */
  transform: translate(-50%, -50%); /* Centre l'image */
  object-fit: cover; /* Assure que l'image couvre l'élément */
}
  @keyframes waveAnimation {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    50% { transform: translateY(0); }
  }
  @keyframes lightEffect {
    0% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px violet, 0 0 70px violet, 0 0 80px violet, 0 0 100px violet, 0 0 150px violet; }
    50% { box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px violet, 0 0 70px violet, 0 0 80px violet, 0 0 100px violet, 0 0 150px violet; }
  }
  .title {
  color: #02063F; /* Applique la couleur au texte */
  font-weight: bold;
  background-color: transparent;
  border: 5px solid #FB0683 ;
  text-shadow:
    -2px -2px 0 white,  /* Ombre en haut à gauche */
    2px -2px 0 white,   /* Ombre en haut à droite */
    -2px 2px 0 white,   /* Ombre en bas à gauche */
    2px 2px 0 white;    /* Ombre en bas à droite */
  margin-bottom: 20px;
}
  .animated {
    animation: waveAnimation 5s ease-in-out infinite;
  }
  .hover-effect:hover {
    transform: scale(1.05);
    transition: transform 0.5s ease-in-out;
  }
  @media (max-width: 768px) {
    .hero-section {
      padding: 3rem 1.5rem;
    }
  }
</style>
