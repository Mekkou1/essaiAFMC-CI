<template>
  <footer class="footer bg-dark py-4">
    <h2 class="text-white text-center mb-4">
      Notre Réseau Partenaire
    </h2>
    <div class="container">
      <div class="marquee-container">
        <div class="marquee d-flex align-items-center">
          <img src="images/campc.png" alt="Image 1" class="small-image">
          <img src="images/ens.png" alt="Image 2" class="small-image">
          <img src="images/inphb.png" alt="Image 3" class="small-image">
          <img src="images/ufhb.png" alt="Image 4" class="small-image">
          <img src="images/una.png" alt="Image 5" class="small-image">
          <img src="images/uao.png" alt="Image 6" class="small-image">
          <img src="images/usp.png" alt="Image 7" class="small-image">
          <img src="images/ugpc.png" alt="Image 8" class="small-image">
          <img src="images/usp.png" alt="Image 9" class="small-image">
          <img src="images/ugpc.png" alt="Image 10" class="small-image">
          <img src="images/uj.png" alt="Image 11" class="small-image">
          <img src="images/uigb.png" alt="Image 12" class="small-image">
          <img src="images/mffe.png" alt="Image 13" class="small-image">
          <img src="images/menetfp.png" alt="Image 14" class="small-image">
          <img src="images/fonsti.png" alt="Image 15" class="small-image">
          <img src="images/instpasteur.png" alt="Image 15" class="small-image">
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SliderVue'
}
</script>

<style scoped>

.marquee-container {
  width: 100%; /* Prend toute la largeur du conteneur parent */
  overflow: hidden; /* Masque les parties défilantes hors de la vue */
}

.marquee {
  display: flex;
  justify-content: space-around; /* Espacement égal entre les images */
  align-items: center;
  animation: marquee 20s linear infinite; /* Défilement continu */
}

.small-image {
  max-width: 50px; /* Taille des images */
  margin: 0 15px; /* Espacement entre les images */
}

@keyframes marquee {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
