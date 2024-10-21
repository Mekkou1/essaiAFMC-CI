<template>
  <section id="about" class="py-5">
    <div class="container">
      <div class="row align-items-center">
        <!-- Image Section -->
        <div class="col-md-6 text-center order-1 order-md-2 imagesection">
          <div class="photo-stack">
            <img v-scroll-animation :src="aboutsectionData.images.photoMiddle" alt="Photo 2" class="photo-middle">
            <img v-scroll-animation :src="aboutsectionData.images.photoBottom" alt="Photo 3" class="photo-bottom">
          </div>
        </div>
        <!-- Text Section -->
        <div class="col-md-6 text-center text-md-left order-2 order-md-1">
          <h2 v-scroll-animation class="font-weight-bold">
            QUI SOMMES NOUS ?
          </h2>
          <p v-scroll-animation class="lead" style="font-weight: bold;">
            {{ aboutsectionData.text }}
          </p>
          <NuxtLink v-scroll-animation to="/about" class="btn btn-primary btn-lg mt-3">
            En savoir plus
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import aboutsectionData from '~/assets/data/aboutsectionData'
export default {
  name: 'AboutSection',
  data () {
    return {
      aboutsectionData
    }
  }
}
</script>

  <style scoped>
  .imagesection {
    margin-bottom: 20px; /* Espace sous la section d'image */
  }

  .photo-stack {
    position: relative;
    width: 100%;
    max-width: 250px;
    margin: 0 auto;
  }

  .photo-stack img {
    width: 100%;
    display: block;
  }

  .photo-middle {
    position: absolute;
    top: 10px;
    left: 60%;
    width: 25%;
    z-index: 2;
  }

  .photo-bottom {
    position: relative;
    top: 170px;
    left: 20%;
    width: 50%;
    height: 100%;
    border-radius: 20px;
    z-index: 3;
  }
  .btn {
  background: none;
  border-top: 5px solid #000000;
  border-bottom: 5px solid #000000;
  border-left: none;
  border-right: none;
  color: #000000;
}
  @media (max-width: 768px) {
    .photo-stack img {
      display: none;
    }

    .photo-middle {
      left: 50%;
    }

    .photo-bottom {
      top: 150px;
      left: 0%;
      width: 60%;
    }
  }

  @media (max-width: 480px) {
    .photo-stack img {
      display: none;
    }

    .photo-middle {
      left: 50%;
    }

    .photo-bottom {
      top: 140px;
      left: 0%;
      width: 70%;
    }
  }
  </style>
