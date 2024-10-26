<template>
  <div>
    <!-- Présidentes Honoraires Section -->
    <section id="honoraire" class="py-5">
      <div class="container">
        <!-- Executive Board -->
        <div class="row mt-4 justify-content-center">
          <div class="col-md-12">
            <div class="executive-board">
              <div class="row justify-content-center">
                <!-- Loop through executive members -->
                <div v-for="(member, index) in executiveMembers" :key="index" class="col-md-3 d-flex justify-content-center">
                  <div class="executive-member">
                    <img :src="member.photo" alt="Membre du Bureau" class="img-fluid rounded-circle">
                    <h5 class="mt-2" style="color: #000000">
                      {{ member.name }}
                    </h5>
                    <p style="color: #FB0683">
                      {{ member.position }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      executiveMembers: [
        { name: 'PROFESSEURE TIDOU ABIBA SANOGO EPSE KONE', position: 'Présidente de 1996 à 2015', photo: '/images/tidou.png' },
        { name: 'PROFESSEURE RITA KAKOU EPSE YAO', position: 'Présidente de 2016 à 2022', photo: '/images/rita yao.png' }
      ]
    }
  }
}
</script>

<style scoped>
#honoraire {
  background: #f8f9fa;
  background: url('/images/organigramme bg.png') no-repeat center center; background-size: cover;  color: white;
  padding: 50px 0;
}

.executive-board {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.executive-member {
  text-align: center;
  margin-bottom: 20px;
}

.executive-member img {
  width: 150px; /* Agrandissez la largeur de l'image */
  height: 150px; /* Agrandissez la hauteur de l'image */
  object-fit: cover; /* Pour que l'image garde ses proportions */
}

/* Flexbox styles for centering the elements */
.row {
  display: flex;
  justify-content: center;
}

.executive-member {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.col-md-3 {
  display: flex;
  justify-content: center;
}

.card-header {
  background-color: #007bff;
  color: #fff;
}

.card-header .btn-link {
  color: #fff;
}

.card-body {
  padding: 20px;
}
</style>
