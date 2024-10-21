<template>
  <div>
    <!-- Missions Section -->
    <section id="missions" class="py-5">
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="mission-details d-flex align-items-start">
              <div class="mission-text">
                <p class="mission-description">
                  L’AFEMC-CI a pour missions de :
                </p>
                <ul class="mission-list">
                  <li>Promouvoir la femme chercheure dans son cadre institutionnel.</li>
                  <li>Appuyer les initiatives des femmes chercheures auprès des organisations gouvernementales et non-gouvernementales dans la recherche pour le développement.</li>
                  <li>Positionner l’Association comme une institution de référence en Côte d’Ivoire.</li>
                </ul>
                <p class="mission-description mt-4">
                  Pour assurer ces missions, l’AFEMC-CI devra capter un maximum de ressources humaines et financières.
                </p>
              </div>
              <div class="mission-image">
                <img src="/images/missions.png" alt="Mission Image" class="img-fluid rounded-circle">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // Data if needed
    }
  }
}
</script>

<style scoped>
#missions {
  background: transparent;
  padding: 50px 0;
}

#missions h2 {
  margin-bottom: 30px;
}

.mission-details {
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: flex-start;
}

.mission-text {
  flex: 1;
  margin-right: 20px;
}

.mission-description {
  font-size: 1.1rem;
  color: #343a40;
}

.mission-list {
  list-style-type: disc;
  padding-left: 20px;
  margin-top: 10px;
}

.mission-list li {
  margin-bottom: 10px;
  color: #6c757d;
}

.mission-image {
  flex-shrink: 0;
  width: 200px; /* Ajustez la taille selon vos besoins */
  height: 200px; /* Ajustez la taille selon vos besoins */
  border: 5px solid #FB0683; /* Couleur et épaisseur de la bordure */
  border-radius: 50%;
  overflow: hidden;
}

.mission-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.mt-4 {
  margin-top: 1.5rem;
}

/* Media query pour cacher l'image sur les petits écrans */
@media (max-width: 767px) {
  .mission-image {
    display: none;
  }
}
</style> externaliser les données de ce composant dans un fichier data.js
