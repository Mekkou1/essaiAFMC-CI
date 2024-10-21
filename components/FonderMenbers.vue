<template>
  <div>
    <!-- Governance Section -->
    <section id="governance" class="py-5">
      <div class="container">
        <!-- Executive Board -->
        <div class="row mt-4">
          <div class="col-md-12">
            <div class="executive-board">
              <div class="row">
                <!-- Loop through executive members -->
                <div v-for="(member, index) in executiveMembers" :key="index" class="col-md-3">
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
        { name: 'SANOGO TIDOU Abiba  ', position: 'Professeur Titulaire ', photo: '/images/prof Sanogo.png' },
        { name: 'Pr KWA KOFFI EDITH', position: '', photo: '/images/identite.jpeg' },
        { name: 'EHUI épouse AVO BILE BERNADETTE ', position: 'Maître de Conférence ', photo: '/images/prof Ehui.png' },
        { name: 'DOSSO MIREILLE', position: 'Professeur Titulaire ', photo: '/images/prof Dosso.png' },
        { name: 'Prof ANNICK TAHIRI', position: 'Professeur Titulaire ', photo: '/images/prof Annick.png' }
      ]
    }
  }
}
</script>

  <style scoped>
  #governance {
    background: #f8f9fa;
    background: url('/images/organigramme bg.png') no-repeat center center; background-size: cover;  color: white;
    padding: 50px 0;
  }

  #governance h2 {
    margin-bottom: 30px;
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
    width: 150px;
    height: 150px;
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
