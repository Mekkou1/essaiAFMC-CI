<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroAbout />
      <h2 class="head-title">
        Organigramme
      </h2>
    </div>

    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #FCCEC7;">
            Bureau Exécutif
          </h2>
        </div>
        <GouvernanceVue />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #FEBCE0;">
            Conseillières
          </h2>
        </div>
        <ConseilliereAfemci />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #FE6D03;">
            Sections
          </h2>
        </div>
        <SectionsVue />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #FEBCE0;">
            COMMITE D'ORIENTATION ET SCIENTIFIQUE
          </h2>
        </div>
        <ComiteScientifique />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #FF2F0F;">
            CELLULE GENRE
          </h2>
        </div>
        <CelluleGenre />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #CCCCCC;">
            MEMBRES D'HONNEUR
          </h2>
        </div>
        <MembresHonneur />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #2e2b6f;">
            MEMBRES FONDATEURS
          </h2>
        </div>
        <FonderMenbers />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading" style="background-color: #E590E8;">
            PRESIDENTES HONORAIRES
          </h2>
        </div>
        <PresidentesHonoraires />
      </div>
    </div>
    <div class="py-5 contener" style="background-color: white;">
      <div class="row">
        <div class="col-md-12 text-center">
          <SliderVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Organigramme',
  head () {
    return {
      title: 'A propos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Femmes Chercheures, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements, Adhésion, Côte d\'Ivoire, Association, Femmes, Chercheures, Côte d\'Ivoire, AFEMCI'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'A propos - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.ci/a-propos'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'A propos - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/assets/images/afemci-logo.png'
        }
      ]
    }
  }

}
</script>

<style scoped>

.head-title {
    background-color: #02063F;
    font-size: 25px;
    font-weight: bold;
    font-style: italic;
    width: 100%; /* Prendre toute la largeur du conteneur */
    text-align: center; /* Centrer le texte */
    margin: 0; /* Supprimer les marges par défaut */
    padding: 10px 0; /* Ajouter un peu d'espace autour du texte pour améliorer l'apparence */
    border-radius: 0; /* Assurer qu'il n'y a pas de bord arrondi */
}
</style>
