<template>
  <section class="scientific-committee-section">
    <div class="container">
      <table class="members-table">
        <thead>
          <tr>
            <th>NOM ET PRENOMS</th>
            <th>INSTITUTION</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="index">
            <td>{{ member.name }}</td>
            <td>{{ member.institution }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const members = [
  { name: 'PROF. EBAH DJEDJI CARINE', institution: 'DIRECTRICE DE LA STATION DE RECHERCHES TECHNOLOGIQUES DE BINGERVILLE; CENTRE NATIONALE DE RECHERCHE AGRONOMIQUE (CNRA).' },
  { name: 'PROF. GUESSEND NATHALIE', institution: 'CHEF DE L’UNITE DES ANTIBIOTIQUES, DES SUBSTANCES NATURELLES ET DE LA SURVEILLANCE DE LA RESISTANCE DES MICRO-ORGANISMES AUX ANTI-INFECTIEUX (ASSURMI)' },
  { name: 'PROF. DIDI-KOUKO COULIBALY JUDITH', institution: "DIRECTRICE DU CENTRE NATIONAL D'ONCOLOGIE MEDICALE ET DE RADIOTHERAPIE ALASSANE OUATTARA (CNRAO)" },
  { name: 'PROF. AKANVOU LOUISE', institution: 'CHEFFE DU DEPARTEMENT DES RESSOURCES GENETIQUES ; CNRA' },
  { name: "PROF. MAURICETTE N'GORAN OUALI", institution: 'UNIVERSITE FELIX HOUPHOUET BOIGNY; UFR BIOSCIENCES' },
  { name: 'PROF. YAPO-ANVILE ELISE', institution: 'ECOLE NORMALE SUPERIEURE D’ABIDJAN, DEPARTEMENT DE PHILOSOPHIE' },
  { name: 'Dr (MC) OUATTARA GOITA', institution: 'CHEFFE DE CABINET DU MESRS; ECOLE NORMALE SUPERIEURE D’ABIDJAN (ENS) ; SCIENCES DE L’EDUCATION' },
  { name: 'Dr (MC) BOSSON JOCELYNE', institution: "REPRESENTANTE DE L'AGENCE UNIVERSITAIRE FRANCOPHONE (AUF) EN CÔTE D’IVOIRE" },
  { name: 'Dr (MR) CREZOIT YAPO ANTOINETTE', institution: "CHEFFE D’UNITE DU PÔLE DE BIOLOGIE DE L'IMMUNITE; INSTITUT PASTEUR DE CÔTE D’IVOIRE" },
  { name: 'Dr (MC) KONE MAEVA', institution: 'DIRECTRICE AU LANEMA, UNIVERSITE FELIX HOUPHOUET BOIGNY ; UFR SSMT' },
  { name: 'Dr MONE LOLO', institution: 'ECOLE NORMALE SUPERIEURE D’ABIDJAN ; DEPARTEMENT DES SCIENCES DE L’EDUCATION' },
  { name: 'Dr KANON LUCIANE', institution: 'ECOLE NORMALE SUPERIEURE D’ABIDJAN ; SCIENCES DE L’EDUCATION' },
  { name: 'Dr DJENEBA TRAORE COULIBALY', institution: 'PLAN D’URGENCE DU PRESIDENT DES USA POUR LA LUTTE CONTRE LE VIH/SIDA (PEPFAR); SOCIOLOGIE ET ANTHROPOLOGIE' }
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

.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.logo img {
  width: 100px; /* Adjust size as necessary */
}

.title {
  font-size: 24px;
  margin: 10px 0;
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
