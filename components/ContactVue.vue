<template>
  <!-- Contact Section -->
  <section id="contact-btn" class=" py-5 bg-light">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <h1 class="main-heading no-global-styles" style="color: black; background-color: transparent;">
            Avez-vous des questions ?
          </h1>
          <h4 class="no-global-styles" style="color: black; background-color: transparent;">
            Ecrivez nous s'il vous plait via notre formulaire
          </h4>
        </div>
        <div class="col-md-4 text-center my-auto ">
          <NuxtLink to="/contact" class="p-2 btn btn-primary">
            Ecrivez-nous
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // Data if needed
    }
  }
}
</script>
