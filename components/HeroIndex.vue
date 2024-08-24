<template>
  <section
    id="hero"
    class="hero-section text-white text-center py-5"
    style="background: url('/images/hero_bg.jpg') no-repeat center center; background-size: cover; height: 85vh; width: 100%; position: relative;"
  >
    <div
      class="hover-effect animate__animated animate__fadeInUp"
      style="margin-top: 30px;  margin-right: 70px;   text-align: right;"
    >
      <h1
        class="display-4 font-weight-bold animate__animated animate__fadeInUp"
        style="margin-top: 10px;  color: mediumblue; text-shadow: none;  font-family: 'Anton', sans-serif; font-weight: 800; font-size: 150px;   color: aliceblue; align-items: right;"
      >
        AFEMC-CI
      </h1>
    </div>
    <p
      class="lead animate__animated animate__fadeInUp"
      style=" margin-top: 250px;  font-size: 25px; font-weight: bold; font-style: italic; background-color:#FB0683 ;  "
    >
      <marquee behavior="" direction="rigth">
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
  50% { transform: translateY(0); }
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
  .overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:  rgba(0, 0, 0, 0.2); /* Noir avec 50% de transparence */; /* Noir avec 50% de transparence */
  z-index: 0; /* Assurez-vous que la superposition est derrière le contenu */
}
}
.rounded-h1 {
  border-radius: 50px; /* Ajustez la valeur selon vos besoins */
  padding: 10px; /* Ajoutez un padding pour que les bordures soient visibles */
  background-color: aliceblue; /* Couleur de fond pour rendre les bordures visibles */
}
</style>
