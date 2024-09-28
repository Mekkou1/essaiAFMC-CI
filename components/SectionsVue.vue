<template>
  <section class="section-container">
    <div class="container">
      <table class="info-table">
        <thead>
          <tr>
            <th>Institution</th>
            <th>Nom et Titre</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(person, index) in people" :key="index">
            <td>{{ person.institution }}</td>
            <td>{{ person.name }}</td>
            <td>{{ person.position }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script setup>
const people = [
  { institution: 'UNIVERSITE FELIX HOUPHOUËT-BOIGNY', name: "AMBEU N'ta Christelle Mélissa épse LOKO", position: 'Secrétaire de la section Sciences et Technologies, Maître-Assistant' },
  { institution: 'UNIVERSITE NANGUI ABROGOUA', name: 'Dr NIAMIEN épouse Ebrottié Julie Estelle', position: 'Secrétaire, Maître de Conférences, Responsable du campus numérique francophone de l\'UNA' },
  { institution: 'UNIVERSITE VIRTUELLE DE CÔTE D’IVOIRE (UVCI)', name: 'YAO Akissi Sandrine', position: 'Secrétaire, Assistante' },
  { institution: 'INSTITUT NATIONAL DE LA JEUNESSE ET DES SPORTS (INJS)', name: 'GOUDENON Epse BLEY', position: 'Secrétaire, Maître-Assistant' },
  { institution: 'CNRA', name: 'Dr KOUADJO-ZEZE Claude', position: 'Secrétaire' },
  { institution: 'CRE', name: 'OUATTARA Yagnama Rokia Epse COULIBALY', position: 'POINT FOCAL, Chargée de Recherche' },
  { institution: 'UNIVERSITE PELEFOLO GON COULIBALI (UPGC)', name: 'Dr N’GUESSAN Aya Carine', position: 'Secrétaire, Maître de Conférences' },
  { institution: 'UNIVERSITE PELEFOLO GON COULIBALI (UPGC)', name: 'ADOH Bissè Blanche Danielle N’Guessan', position: 'POINT FOCAL : Sociologie, Maître-Assistant' },
  { institution: 'UNIVERSITE PELEFOLO GON COULIBALI (UPGC)', name: 'Dr TUO Sita', position: 'POINT FOCAL : Département d’anglais, Assistant' },
  { institution: 'UNIVERSITE PELEFOLO GON COULIBALI (UPGC)', name: 'MENIGA Mariam', position: 'POINT FOCAL : Institut de Gestion Agro-pastorale' },
  { institution: 'UNIVERSITE PELEFOLO GON COULIBALI (UPGC)', name: 'Dr Oulaï Sylvie', position: 'POINT FOCAL : Département Biochimie - Génétique, Maître Assistant' }
]
</script>

<style scoped>
.section-container {
  background-color: #800000;
  background: url('/images/organigramme bg.png') no-repeat center center; background-size: cover;  color: white;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: center;
}

.info-table {
  width: 100%;
  max-width: 1000px;
  border-collapse: collapse;
}

.info-table th, .info-table td {
  border: 1px solid #800000;
  padding: 8px;
  text-align: left;
}

.info-table th {
  background-color: #ec4a68;
  color: white;
  font-weight: bold;
}

.info-table td {
  background-color: #ff849b;
  color: white;
}

@media (max-width: 768px) {
  .info-table th, .info-table td {
    font-size: 12px;
    padding: 6px;
  }
}
</style>
