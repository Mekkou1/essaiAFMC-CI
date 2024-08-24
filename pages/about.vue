<template>
  <div>
    <!-- Hero Section -->
    <HeroAbout />

    <PresentationVue />
    <div class=" py-5 contener">
      <div class="row missions">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">
            Missions
          </h2>
        </div>
        <MissionVue />
      </div>
    </div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">
            Bureau Exécutif
          </h2>
        </div>
        <GouvernanceVue />
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
  name: 'About',
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
