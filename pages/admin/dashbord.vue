<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroSlider />
    </div>

    <!-- About Section -->
    <div>
      <AboutSection />
    </div>

    <!-- Objectives Section -->
    <NosObjectifs />

    <!-- News Section -->
    <NewsVideo />
  </div>
</template>

<script>
import HeroSlider from '~/components/admin/HeroSlider.vue'
import AboutSection from '~/components/admin/AboutSection.vue'
import NosObjectifs from '~/components/admin/NosObjectifs.vue'
import NewsVideo from '~/components/admin/NewsVideo.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroSlider,
    AboutSection,
    NosObjectifs,
    NewsVideo
  },
  layout: 'admin', // Spécifiez le layout ici

  data () {
    return {}
  },
  head () {
    return {
      title: 'Accueil',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Accueil de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Association des Femmes Chercheures, Côte d\'Ivoire, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Accueil - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Accueil de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.ci'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'AFEM-CI'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Accueil - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Accueil de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

  <style scoped>
  @keyframes customFadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .custom-animation {
    animation: customFadeIn 1s ease-out forwards;
  }

  .btn {
    background: none;
    border-top: 5px solid #000000;
    border-bottom: 5px solid #000000;
    border-left: none;
    border-right: none;
    color: #000000;
  }

  .photo-stack {
    position: relative;
    width: 100%;
    max-width: 250px; /* Limiter la largeur des images */
    margin: 0 auto;
  }

  .photo-stack img {
    width: 100%;
    display: block;
  }

  .photo-middle {
    position: absolute;
    top: 10px; /* Ajustez cette valeur pour la superposition */
    left: 60%;
    width: 25%;
    border-radius: none;
    z-index: 2;
  }

  .photo-bottom {
    position: relative;
    top: 170px; /* Ajustez cette valeur pour la superposition */
    left: 20%;
    width: 50%;
    height: 100%;
    border-radius: 20px;
    z-index: 3;
  }

  @media (max-width: 768px) {
    .imagesection {
      margin-bottom: 20px; /* Espace sous la section d'image */
    }
    .photo-stack img {
    display: none;
  }
    /* Garder les images superposées */
    .photo-middle {
      left: 50%; /* Centrer sur petit écran */
    }

    .photo-bottom {
      top: 150px; /* Ajustez cette valeur pour la superposition */
      left: 0%; /* Ajustez si nécessaire */
      width: 60%; /* Ajustez pour le petit écran */
    }
    .youtube-video {
    max-width: 100%; /* S'assure que le lecteur ne dépasse pas la largeur de son conteneur */
    height: auto; /* Ajuste la hauteur automatiquement pour maintenir le ratio */
  }
  }

  @media (max-width: 480px) {
    .imagesection {
      margin-bottom: 20px; /* Espace sous la section d'image */
    }
    .photo-stack img {
    display: none;
  }

    /* Garder les images superposées */
    .photo-middle {
      left: 50%; /* Centrer sur très petit écran */
    }

    .photo-bottom {
      top: 140px; /* Ajustez cette valeur pour la superposition */
      left: 0%; /* Ajustez si nécessaire */
      width: 70%; /* Ajustez pour le très petit écran */
    }
    .youtube-video {
    max-width: 100%; /* S'assure que le lecteur ne dépasse pas la largeur de son conteneur */
    height: auto; /* Ajuste la hauteur automatiquement pour maintenir le ratio */
  }
  }
  </style>
