<template>
  <section class="honor-members-section">
    <div class="container">
      <div class="members-container">
        <div class="members-column">
          <ul>
            <li v-for="(member, index) in leftColumnMembers" :key="index">
              {{ member }}
            </li>
          </ul>
        </div>
        <div class="members-column">
          <ul>
            <li v-for="(member, index) in rightColumnMembers" :key="index">
              {{ member }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Data for the members
const leftColumnMembers = [
  'PROF. MARIATOU KONE', 'PROF. LY RAMATA', 'PROF. GUIDI WANDIJA', 'PROF. TIDOU ABIBA KONE',
  'PROF. DOSSO MIREILLE', 'PROF. YAO RITA KAKOU', 'PROF. NEBOUT AKUREUST PATRICIA',
  'PROF. YAUBOUET VERONIQUE', 'PROF. NDATZ SANOGO', 'PROF. AVO BILE', "PROF. POAME N'GORAN LEA"
]

const rightColumnMembers = [
  'PROF. DIALLO ATTA HORTENSE', 'PROF. ACRAY-ZENGBE PETRONILLE', 'PROF. ADOHI VIVIANE',
  'PROF. SERI PHILOMENE', 'PROF. NEVRY ROSE', 'PROF. TAHIRI ANICK', 'PROF. NANDJUI MANSE BEATRICE',
  'PROF. KOFFI-GNAGNE YOLANDE', 'Dr GAUZE MARTINE', 'PROF. MAMBO VERONIQUE'
]
</script>

<style scoped>
.honor-members-section {
  background-color: #800000; /* Dark red background */
  background: url('/images/organigramme bg.png') no-repeat center center; background-size: cover;  color: white;
  color: white;
  padding: 20px;
  text-align: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo img {
  width: 100px; /* Adjust size as necessary */
  margin-bottom: 20px;
}

.members-container {
  display: flex;
  justify-content: space-around;
  width: 100%;
}

.members-column {
  width: 40%;
}

.members-column ul {
  list-style-type: none;
  padding: 0;
}

.members-column li {
  background-color: #ec4a68; /* Pink background for members */
  margin: 5px 0;
  padding: 10px;
  font-size: 16px;
  text-align: center;
}
</style>
