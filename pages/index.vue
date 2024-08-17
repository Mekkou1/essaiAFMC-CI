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
              <img v-scroll-animation src="/images/presidente.png" alt="À propos" class="img-fluid rounded mb-3" style="width: 250px;">
              <h5 v-scroll-animation class="font-size: 20px; background-color: transparent;">
                Dr(MC) NOBAH KACOU-WODJE
              </h5>
              <h6 v-scroll-animation>
                Présidente
              </h6>
            </div>
          </div>
          <div class="col-md-6 order-md-1">
            <div class="text-center">
              <h2 v-scroll-animation class="font-weight-bold">
                Qui sommes nous ?
              </h2>
              <p v-scroll-animation class="lead">
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

    <ParcheminVue />

    <!-- News Section -->
    <section id="news" class="py-5">
      <div class="container">
        <h2 class="font-weight-bold text-center">
          Video à la une
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
  </div>
</template>

<script>

export default {
  name: 'IndexPage',
  components: {
    // Vous pouvez déclarer vos composants ici
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

  </style>
