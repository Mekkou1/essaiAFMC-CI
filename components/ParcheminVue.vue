<template>
  <section id="objectives" class="py-5 bg-light">
    <div class="container">
      <h2 class="font-weight-bold text-center">
        NOS OBJECTIFS
      </h2>
      <div class="row">
        <div
          v-for="(group, index) in objectivesGroups"
          :key="group.title"
          class="col-md-4"
        >
          <div :ref="`card_${index}`" class="card border-0 shadow-sm pinned-card">
            <div class="card-body text-center p-4">
              <!-- Adjusted to add internal margins -->
              <h5 class="card-title font-weight-bold" style="color: #0a57a9c5;margin-left: 15px; font-weight: bold; margin-top: -10px;">
                <!-- Adjusted to move text up slightly -->
                {{ group.title }}
              </h5>
              <p class="card-text" style="text-align: left;margin-left: 13px; margin-top: 20px;">
                <!-- Adjusted to add margin between title and list -->
                <ul>
                  <li v-for="objective in group.objectives" :key="objective" style="font-size: 13.99px;">
                    <!-- Reduced font size for list items -->
                    {{ objective }}
                  </li>
                </ul>
              </p>
            </div>
            <img src="images/epingle.png" alt="Pin" class="pin-image">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      objectivesGroups: [
        {
          title: 'Promotion et Valorisation des Compétences des Femmes Chercheures et Enseignants Chercheures',
          objectives: [
            'Valoriser et mettre à la disposition de la communauté nationale et internationale les compétences et l’expertise des femmes chercheures ;',
            'Créer un cadre de rencontres scientifiques, de solidarité et d’échanges entre les femmes chercheures et les autres acteurs de la communauté nationale et internationale ;',
            'Développer un esprit d’équipe dans le monde des chercheures.'
          ]
        },
        {
          title: 'Renforcement de capacités et Développement Professionnel',
          objectives: [
            'Assurer le renforcement des capacités des femmes chercheures dans leurs domaines de compétences et en explorer d’autres ;',
            'Contribuer à la sensibilisation, à la formation et à l’éducation des femmes et des jeunes filles.'
          ]
        },
        {
          title: 'Recherches de Financements et Soutien aux Projets',
          objectives: [
            'Rechercher les financements pour les projets mono ou pluridisciplinaires en faveur des femmes.'
          ]
        }
      ]
    }
  },
  mounted () {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('pinned')
        }
      })
    })

    this.objectivesGroups.forEach((_, index) => {
      const card = this.$refs[`card_${index}`][0]
      observer.observe(card)
      card.style.transitionDelay = `${index * 0.3}s`
    })
  }
}
</script>

  <style scoped>
  .pinned-card {
    position: relative;
    padding-top: 40px; /* Slightly adjust the top padding for the pin effect */
    background-image: url("/images/parchemin.jpeg"); /* Replace with your parchment background image */
    background-size: cover;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 20px;
    transform: translateY(50px);
    opacity: 0;
    transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  }

  .pinned-card.pinned {
    transform: translateY(0);
    opacity: 1;
  }

  .pin-image {
    position: absolute;
    top: 10px; /* Adjust the position of the pin */
    left: 50%;
    transform: translateX(-50%);
    width: 40px;
    height: 40px;
    z-index: 10;
  }

  .card-body {
    padding-top: 40px; /* Space for the pin */
    font-family: 'Georgia', serif; /* Use a font that resembles parchment */
    color: #333; /* Adjust text color for readability */
    padding: 20px; /* Added internal margins for text adjustment */
  }

  .card-title {
    margin-bottom: 10px;
    font-size: 15px; /* Increase font size for emphasis */
  }

  .card-text ul {
    list-style-type: none;
    padding: 0;
  }

  .card-text ul li {
    margin-bottom: 10px;
    padding-left: 30px;
    padding-right: 15px;
    position: relative;
    font-size: 14px; /* Reduced font size for list items */
  }

  .card-text ul li:before {
    content: '\2022';
    color: #007bff;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }
  </style>
