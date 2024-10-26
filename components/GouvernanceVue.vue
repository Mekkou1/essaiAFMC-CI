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
        { name: 'Dr(MC) NOBAH KACOU-WODJE ', position: 'Présidente', photo: '/images/presidenteok.jpg' },
        { name: 'Dr(MC) OUATTARA FATOU SCHERAZADE EPSE SORO', position: 'Vice-Présidente', photo: '/images/vicepresidente.png' },
        { name: 'Dr(MC) SEU NETTO MIREILLE ANOI ', position: 'Secrétaire à l’organisation', photo: '/images/secretaire a l organisation.png' },
        { name: 'Dr (MC) BEDE AFFOUE LUCIE BAGAYOKO', position: 'Secrétaire adjointe à l’organisation', photo: '/images/secretaire a l organisation adjoint.png' },
        { name: 'Dr(MC) TAPE PULCHERIE KOFFI', position: 'Secrétaire administrative', photo: '/images/secretaire administrative.png' },
        { name: 'Dr(MCA) MELANIE TIA', position: 'Secrétaire administrative adjointe', photo: '/images/secretaire administrative adjoint.png' },
        { name: 'Dr(MC) ADAYE AKOUA ASUINTA ', position: 'Secrétaire scientifique', photo: '/images/secretaire scientifique.png' },
        { name: 'Dr(MR) MGBESSO NADEGE KOUADIO', position: 'Secrétaire scientifique adjointe', photo: '/images/secretaire scientifique adjoint.png' },
        { name: 'Dr AMALACHI N’CHO YAYO ', position: 'Trésorière générale', photo: '/images/tresoriere generale.png' },
        { name: 'Dr OUATTARA ANNETTE ', position: 'Trésorière générale adjointe', photo: '/images/ANNETTE.jpg' }
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
