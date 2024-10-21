<template>
  <div>
    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">
            Pourquoi l'AFEMC-CI ?
          </h2>
          <div class="container">
            <div class="row">
              <div class="col-md-8" style="text-align: left;">
                <p class="lead" style="margin-top: 70px; text-size-adjust: 30px;">
                  {{ content }}
                </p>
              </div>
              <div class="col-md-4 d-flex justify-content-center align-items-center">
                <div class="image-container">
                  <img :src="imageUrl" :alt="imageAlt" class="img-fluid rounded-circle">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div><br>
    </div>
  </div>
</template>

<script>
import { presentationData } from '~/assets/data/presentationData.js'
export default {
  name: 'PresentationVue',
  data () {
    return {
      heading: presentationData.heading,
      content: presentationData.content,
      imageUrl: presentationData.imageUrl,
      imageAlt: presentationData.imageAlt
    }
  }
}
</script>

<style scoped>
.image-container {
  background-color: #02063F;
  padding: 20px;
  border-radius: 10px;
  display: inline-block;
}
.img-fluid{
  border: 5px solid #FB0683; /* Couleur et épaisseur de la bordure */

}
</style>
