<template>
  <div>
    <div class="py-5 bg-dark text-white">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h4 style="background-color:transparent">
              AFEM-CI
            </h4>
            <div class="underline" />
            <p>Visites : <span id="counter">0</span></p>
          </div>
          <div class="col-md-6 text-right text-white">
            <SliderVue />
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>© 2024 . Tous droits réservés. Réaliser par: <a href="https://www.techartisan./">TechArtisan</a> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SliderVue from '~/components/SliderVue.vue'
export default {
  name: 'AppFooter',
  components: {

    SliderVue

  }
}
</script>

  <style scoped>
  .footer-title {
    font-size: 1.5rem;
  }

  .footer-visits {
    font-size: 1rem;
  }

  .footer-copy {
    font-size: 1rem;
  }

  .logo-img {
    width: 140px;
  }

  @media (max-width: 768px) {
    .footer-title {
      font-size: 1.2rem;
    }

    .footer-visits,
    .footer-copy {
      font-size: 0.9rem;
    }

    .logo-img {
      width: 100px;
    }
  }

  @media (max-width: 576px) {
    .footer-title {
      font-size: 1rem;
    }

    .footer-visits,
    .footer-copy {
      font-size: 0.8rem;
    }

    .logo-img {
      width: 80px;
    }
  }
  </style>
