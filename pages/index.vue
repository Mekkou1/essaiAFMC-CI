<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroIndex />
    </div>

    <!-- About Section -->
    <section id="about" class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-6 order-md-2">
            <div class="text-center">
              <div class="photo-stack">
                <img v-scroll-animation src="images/contact1.jpg" alt="Photo 2" class="photo-middle">
                <img v-scroll-animation src="images/contact2.jpg" alt="Photo 3" class="photo-bottom">
              </div>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="text-center">
              <h2 v-scroll-animation class="font-weight-bold">
                QUI SOMMES NOUS ?
              </h2>
              <p v-scroll-animation class="lead" style="font: bold;">
                Nous sommes l'Association des Femmes Chercheures de Côte d'Ivoire (AFEMC-CI), une organisation dédiée à la promotion des droits et de l'épanouissement professionnel des femmes dans l'enseignement supérieur et la recherche. Fondée le 14 janvier 1995, l'AFEMC-CI regroupe des enseignantes-chercheures et des chercheures de toutes les universités et centres de recherche en Côte d'Ivoire.
              </p>
              <NuxtLink v-scroll-animation to="/about" class="btn btn-primary btn-lg mt-3">
                En savoir plus
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Objectives Section -->

    <NosObjectifs />

    <!-- News Section -->
    <section id="news" class="py-5" style="text-align: center;">
      <div class="container">
        <h2 class="font-weight-bold text-center">
          A la une
        </h2>
        <div class="row">
          <!-- Featured News -->
          <div class="col-md-12 mb-4">
            <div class="card border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title font-weight-bold">
                  Investiture de la Présidente
                </h5>
                <div class="embed-responsive embed-responsive-16by9 mb-3">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/5DKPkFZF95A" allowfullscreen />
                </div>
                <marquee width="300" scrollamount="300" scrolldelay="5000" style="color: red;">
                  Rejoignez-nous pour célébrer l'investiture de notre nouvelle présidente. Regardez la vidéo pour en savoir plus sur son discours et ses projets pour l'association.
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" class="py-5">
      <div class="container">
        <BlogPosts />
      </div>
    </section>

    <!-- Contact Section -->
    <ContactVue />
    <SliderVue />
  </div>
</template>

<script>
import ContactVue from '~/components/ContactVue.vue'

export default {
  name: 'IndexPage',
  components: {
    // Vous pouvez déclarer vos composants ici
    ContactVue
  },
  data () {
    return {
      // Vous pouvez déclarer vos données ici
    }
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
.btn{
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
    max-width: 250px;
  }

  .photo-stack img {
    width: 100%;
    display: block;
  }

  .photo-top {
    position: absolute;
    top: 200px;
    left: 70px;
    width: 100%;
    z-index: 1;
  }

  .photo-middle {
    position: absolute;
    top: 40px;
    left: 80%;
    width: 25%;
    border-radius: none;
    z-index: 2;
  }

  .photo-bottom {
    position: relative;
    top: 200px;
    left: 40%;
    width: 50%;
    height: 100%;
    border-radius: 20px;
    z-index: 3;
  }
  </style>
