<template>
  <div>
    <!-- Objectives Section -->
    <section id="objectives" class="py-5 bg-light">
      <div class="container">
        <h2 class="font-weight-bold text-center">
          NOS OBJECTIFS
        </h2>
        <div class="row">
          <div v-for="(group, index) in objectivesGroups" :key="group.title" class="col-md-4">
            <div :ref="`card_${index}`" class="card border-0 shadow-sm pinned-card">
              <div class="card-body text-center">
                <h5 class="card-title font-weight-bold">
                  {{ group.title }}
                </h5>
                <p class="card-text">
                  <ul>
                    <li v-for="objective in group.objectives" :key="objective">
                      {{ objective }}
                    </li>
                  </ul>
                </p>
              </div>
              <img src="/images/pin.png" alt="Pin" class="pin-image">
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
      objectivesGroups: [
        {
          title: 'Promotion et Valorisation des Compétences des Femmes Chercheures et Enseignet Chercheures',
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
          title: 'Recherches de Financements et Soutient aux Projets',
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
      card.style.transitionDelay = `${index * 0.3}s` // Utilisation de l'index pour le délai d'animation
    })
  }
}
</script>

<style scoped>
.pinned-card {
  position: relative;
  padding-top: 20px;
  background: #fefefe;
  border: 5px solid #FB0683; /* Bordure épaisse et couleur rose */
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  z-index: 10;
}

.card-body {
  padding-top: 40px; /* Space for the pin */
}

.card-title {
  margin-bottom: 10px;
}

.card-text ul {
  list-style-type: none;
  padding: 0;
}

.card-text ul li {
  margin-bottom: 10px;
  padding-left: 20px;
  position: relative;
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
