<template>
  <div>
    <!-- Missions Section -->
    <section id="missions" class="py-5">
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="mission-details">
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
    background: #f8f9fa;
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

  .mt-4 {
    margin-top: 1.5rem;
  }
  </style>
