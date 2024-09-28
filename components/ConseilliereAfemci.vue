<template>
  <section class="scientific-committee-section">
    <div class="container">
      <table class="members-table">
        <thead>
          <tr>
            <th>POSTE</th>
            <th>NOM ET PRENOMS</th>
            <th>INSTITUTION D’ORIGINE ET SPECIALITE</th>
            <th>CONTACT ET EMAIL</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="index">
            <td>{{ member.post }}</td>
            <td>{{ member.name }}</td>
            <td>{{ member.institution }}</td>
            <td>{{ member.contact }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const members = [
  { post: 'CONSEILLERE TECHNIQUE CHARGEE DES ETUDES PROSPECTIVES ', name: 'Dr (MC). BINATE NAMIZATA', institution: 'SCIENCES ECONOMIQUES; CONSEILLERE TECHNIQUE; MINISTERE DE LA FEMME DE LA FAMILLE ET DE L’ENFANT' },
  { post: 'CONSEILLERE TECHNIQUE CHARGEE DE LA GOUVERNANCE ', name: 'PROF. ASSA REBECCA YAO', institution: 'BIOCHIMIE, UFR BIOSCIENCES; RESPONSABLE GENRE UNIVERSITE FELIX HOUPHOUET BOIGNY (UFHB)' },
  { post: 'CONSEILLERE TECHNIQUE CHARGEE DE LA COOPERATION ET DES PARTENARIATS ', name: 'Dr NTAIN JEANE', institution: 'PSYCHOLOGIE, UNIVERSITE NANGUI ABROGOUA; MINISTERE DE L’ENVIRONNEMENT ET DU DEVELOPPEMENT DURABLE' },
  { post: 'CONSEILLERE TECHNIQUE CHARGEE DES PROJETS SCIENTIFIQUES ET ADMINISTRATIFS ', name: 'Dr(MC) YAO MARIE JEANE OHOU ', institution: 'CHIMIE, UNIVERSITE LOROUGNON GUEDE (UJLOG)' }
]
</script>

<style scoped>
.scientific-committee-section {
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

.members-table {
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
}

.members-table th, .members-table td {
  border: 1px solid white;
  padding: 10px;
  text-align: left;
}

.members-table th {
  background-color: #ec4a68;
  color: white;
  font-weight: bold;
}

.members-table td {
  background-color: #ff849b;
  color: white;
}

@media (max-width: 768px) {
  .members-table th, .members-table td {
    font-size: 12px;
    padding: 8px;
  }
}
</style>
