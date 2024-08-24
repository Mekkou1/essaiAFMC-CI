<template>
  <section id="objectives" class="py-5" style="text-align: center;">
    <h2 class="font-weight-bold text-center">
      NOS OBJECTIFS
    </h2>
    <div class="container" style="background: url('/images/obj.jpg') no-repeat center center; background-size: cover;">
      <div class="row">
        <div
          v-for="(group, index) in objectivesGroups"
          :key="group.title"
          class="col-md-4"
          :class="{ 'first-line': index < 2, 'second-line': index >= 2 }"
        >
          <div :ref="`card_${index}`" class="card border-0 shadow-sm pinned-card">
            <div class="card-body text-center p-4">
              <h5 class="card-title font-weight-bold" style="color: #000000; margin-left: 15px; font-weight: bold; margin-top: -10px;">
                {{ group.title }}
              </h5>
              <p class="card-text" :class="{ 'd-none': !group.expanded }" style="text-align: left; margin-left: 13px; margin-top: 20px;">
                <ul class="objectives-list">
                  <li v-for="objective in group.objectives" :key="objective" style="font-size: 13.99px;">
                    {{ objective }}
                  </li>
                </ul>
              </p>
              <button class="btn btn-primary mt-3" @click="toggleExpand(index)">
                {{ group.expanded ? 'Moins' : 'En savoir plus' }}
              </button>
            </div>
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
          ],
          expanded: false
        },
        {
          title: 'Renforcement de capacités et Développement Professionnel',
          objectives: [
            'Assurer le renforcement des capacités des femmes chercheures dans leurs domaines de compétences et en explorer d’autres ;',
            'Contribuer à la sensibilisation, à la formation et à l’éducation des femmes et des jeunes filles.'
          ],
          expanded: false
        },
        {
          title: 'Recherches de Financements et Soutien aux Projets',
          objectives: [
            'Rechercher les financements pour les projets mono ou pluridisciplinaires en faveur des femmes.'
          ],
          expanded: false
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
  },
  methods: {
    toggleExpand (index) {
      this.objectivesGroups[index].expanded = !this.objectivesGroups[index].expanded
    }
  }
}
</script>

  <style scoped>
  .pinned-card {
  position: relative;
  padding-top: 40px;
  background-color: #fff;
  border: 8px solid #FB0683; /* Couleur et épaisseur de la bordure modifiées */
  border-radius: 25%; /* Bordures arrondies à 25% */
  box-shadow: 0 4px 8px #FB0683;
  margin-top: 0px;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  width: 300px; /* Largeur fixe de la carte */
  min-height: 200px; /* Hauteur minimale de la carte */
  display: inline-block; /* Permet à la carte de s'adapter à son contenu */
  padding: 20px; /* Ajoute de l'espace autour du texte */
}

  .pinned-card.pinned {
    transform: translateY(0);
    opacity: 1;
  }

  .card-body {
    padding-top: 40px;
    font-family: 'Georgia', serif;
    color: #333;
    padding: 20px;
  }

  .card-title {
    margin-bottom: 10px;
    font-size: 15px;
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
    font-size: 14px;
  }

  .card-text ul li:before {
    content: '\2022';
    color: #000000;
    font-weight: bold;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .col-md-4 {
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }

  .first-line {
    flex: 0 0 48%;
    max-width: 48%;
  }

  .second-line {
    flex: 0 0 100%;
    max-width: 100%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .second-line .pinned-card {
    margin: 0 auto;
  }

  .btn{
    background: hsl(57, 97%, 50%);
    border-top: none;
    border-bottom:none;
    border-left: none;
    border-right: none;
    color: #000000;
  }
  @media (max-width: 768px) {
    .col-md-4 {
      flex: 0 0 100%;
      max-width: 100%;
    }

    .first-line, .second-line {
      flex: 0 0 100%;
      max-width: 100%;
    }
  }
  </style>
