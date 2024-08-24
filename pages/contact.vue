<template>
  <div>
    <HeroContact />
    <ContactVide />
  </div>
</template>

<script>
import HeroContact from '~/components/HeroContact.vue'

export default {
  name: 'Contact',
  component: {
    HeroContact
  },
  head () {
    return {
      title: 'Contactez-nous',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Femmes Chercheures, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements, Adhésion, Côte d\'Ivoire, Association, Femmes, Chercheures, Côte d\'Ivoire, AFEMCI'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.ci/contact'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/afemci-logo.png'
        }
      ]
    }
  }

}
</script>

<style scoped>

@media (forced-colors: active) {
  /* styles pour le mode forced-colors */
  .info-container {
    background-color: ButtonFace;
    color: ButtonText;
  }
  .form-container {
    background-color: ButtonFace;
    color: ButtonText;
  }
}
</style>
