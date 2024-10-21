<template>
  <section id="objectives" class="py-5" style="text-align: center;">
    <h2 class="font-weight-bold text-center">
      NOS OBJECTIFS
    </h2>
    <div class="container" style="padding-top:10px ;">
      <div class="row">
        <div
          v-for="(group, index) in objectivesGroups"
          :key="group.title"
          class="col-md-4"
          :class="{ 'first-line': index < 2, 'second-line': index >= 2 }"
        >
          <div
            :ref="`card_${index}`"
            class="card border-0 shadow-sm pinned-card"
            :style="{
              background: `linear-gradient(${backgroundColors[index]}, ${backgroundColors[index]}), url(${backgroundImages[index]}) no-repeat center center / cover`
            }"
          >
            <div class="card-body text-center p-4">
              <h5 class="card-title font-weight-bold" style="color: white; margin-left: 15px; font-weight: bold; margin-top: -10px;">
                {{ group.title }}
              </h5>
              <p class="card-text" :class="{ 'd-none': !group.expanded }" style="text-align: left; margin-left: 13px; margin-top: 20px; color: white;">
                <ul class="objectives-list">
                  <li v-for="objective in group.objectives" :key="objective" style="font-size: 13.99px; color: white; ">
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
import { objectivesData } from '~/assets/data/objectivesData.js'
export default {
  data () {
    return {
      objectivesGroups: objectivesData.objectivesGroups,
      backgroundImages: objectivesData.backgroundImages,
      backgroundColors: [
        'rgba(0, 0, 255, 0.5)', // Couleur transparente pour la première carte
        'rgba(0, 0, 255, 0.5)', // Couleur transparente pour la deuxième carte
        'rgba(0, 0, 255, 0.5)' // Couleur transparente pour la troisième carte
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
  padding-top: 20px; /* Ajustement du padding */
  background-color: #fff;
  border: 8px solid #FB0683; /* Couleur et épaisseur de la bordure */
  border-radius: 60px; /* Ajustement pour forme ovale */
  box-shadow: 0 4px 8px #FB0683;
  margin-top: 0px;
  transform: translateY(50px);
  opacity: 0;
  transition: transform 0.5s ease-out, opacity 0.5s ease-out;
  width: 250px; /* Largeur ajustée de la carte */
  min-height: 350px; /* Hauteur minimale ajustée de la carte */
  display: inline-block;
  padding: 20px;
  text-align: center; /* Centrer le texte */
}

.pinned-card.pinned {
  transform: translateY(0);
  opacity: 1;
}

.card-body {
  padding-top: 10px;
  font-family: 'Georgia', serif;
  color: #333;
  padding: 20px;
  padding-bottom: 60px; /* Ajoutez cet espace pour éloigner le bouton du texte */
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
  justify-content: space-between; /* Ajustement pour aligner les cartes sur la même ligne */
  align-items: flex-start; /* Alignement en haut pour les cartes */
}

.col-md-4 {
  flex: 0 0 33.3333%; /* Assure que chaque carte occupe un tiers de la largeur */
  max-width: 33.3333%;
  box-sizing: border-box;
  /*padding: 0 10px;  Pour ajouter un espace entre les cartes */
}

.first-line {
  display: flex;
  width: 100%;
  justify-content: space-between; /* Espacer les cartes également */
}

.second-line {
  display: flex;
  width: 100%;
  justify-content: center; /* Centrer les cartes pour la ligne suivante */
  margin-top: 10px;
}

.second-line .pinned-card {
  margin: 0 auto;
}

/* Cibler la carte du milieu et la descendre de 30px */
.col-md-4:nth-child(2) .pinned-card {
  margin-top: 150px; /* Descend la carte du milieu */
  margin-right: 10px;
  margin-left: 30px;
}

.btn {
  background: hsl(328, 97%, 50%);
  border: none;
  color: white;
  position: absolute; /* Positionnement absolu pour le bouton */
  bottom: 20px; /* 50px du bord bas de la carte */
  left: 50%;
  transform: translateX(-50%); /* Centrer le bouton horizontalement */
}

@media (max-width: 768px) {
  .col-md-4 {
    flex: 0 0 100%;
    max-width: 100%;
    padding: 0; /* Retirer l'espace entre les cartes pour mobiles */
  }

  .first-line, .second-line {
    flex: 0 0 100%;
    max-width: 100%;
    flex-direction: column;
    align-items: center;
  }
}

  </style>
