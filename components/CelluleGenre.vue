<template>
  <section class="scientific-committee-section">
    <div class="container">
      <table class="members-table">
        <thead>
          <tr>
            <th>POSTE</th>
            <th>NOM ET PRENOMS</th>
            <th>INSTITUTION D’ORIGINE ET SPECIALITE</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(member, index) in members" :key="index">
            <td>{{ member.post }}</td>
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
  { post: 'Superviseure Générale', name: 'Dr (MC) NOBAH Céline Sidonie Koco', institution: 'Ecole Normale Supérieure d’Abidjan (ENS-ABIDJAN), Spécialité : HYDROBIOLOGIE / PISCICULTURE', contact: '0708885058, ncskoco@gmail.com' },
  { post: 'Coordinatrice Générale', name: 'Dr KOUASSI Amenan Valérie Epse KONIN', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : ESPAGNOL', contact: '0748089210, valeriekonin@gmail.com' },
  { post: 'Coordinatrice Générale Adjointe', name: 'Dr (MC) TAPE Sophie Pulchérie', institution: 'Université Peleforo GON COULIBALY (UPGC), Spécialité : GEOGRAPHIE', contact: '0758449910, pultap78@yahoo.fr' },
  { post: 'Chargée d’Etude Projet Enseignement Supérieur', name: 'Dr Bendé N’Dasso Flore-Benbac Epse Kouacou', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : Psychologie clinique, UFR SHS Psychologie, CIERPA', contact: '0707006132, akaflore.bende@gmail.com' },
  { post: 'Chargée d’Etude Projet Recherche', name: 'Dr ASSOMA Epse GBA Amon Benjamine', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : CHIMIE THEORIQUE', contact: '0707869666, benassoma@yahoo.fr' },
  { post: 'Chargée du Budget et de la Mobilisation des Ressources', name: 'Dr (MC) SEU-ANOÏ Netto Mireille', institution: 'Université Nangui Abrogoua (UNA), Spécialité : HYDROBIOLOGIE/PHYCOLOGIE/ALGOCULTURE', contact: '0759203227, nettomiranoy@yahoo.fr' },
  { post: 'Chargée Adjointe du Budget et de la Mobilisation des Ressources', name: 'Dr YAYO N’CHO Amalatchy', institution: 'Centre de Recherche en OCEANOLOGIE (CRO), Spécialité : OCEANOGRAPHIE / PECHE', contact: '0141457330, amalachyyayo@yahoo.fr' },
  { post: 'Chargée de la Communication et des Relations Publiques', name: 'Dr (MC) OUATTARA Schérazade Fatou Epse SORO', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : PHYSIOLOGIE ANIMALE', contact: '0778094874, scherazadefatou@yahoo.fr' },
  { post: 'Chargée Adjointe de la Communication et des Relations Publiques', name: 'NOUAMAN Tanoh Elisabeth', institution: 'Université Félix Houphouët Boigny (UFHB), Doctorante en Sciences des Langues', contact: '0778823480, lizatanoh@gmail.com' },
  { post: 'Chargée du Suivi et de l’Evaluation', name: 'Dr (Cr) KOUASSI Sainte Sébastienne Aya', institution: 'Centre Ivoirien de Recherches Economiques et Sociales (CIRES), Spécialité : SOCIOLOGIE ECONOMIQUE, Experte en Genre', contact: '0758790911, Sebastienne_aya@yahoo.fr' },
  { post: 'Chargée du Suivi et de l’Evaluation Adjointe', name: 'Dr AMBEU LOKO', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : CHIMIE THEORIQUE', contact: '0789790600, chris_meliss@yahoo.fr' },
  { post: 'Point focal Universités et Grandes écoles', name: 'Prof ASSA Rebecca Epse YAO', institution: 'Université Félix Houphouët Boigny (UFHB), Spécialité : BIOCHIMIE / SCIENCES DES ALIMENTS', contact: '0707698851, Assa_rebecca@yahoo.fr' },
  { post: 'Point Focal Centres de Recherche', name: 'Dr TANO Akoua Epse KAMELAN', institution: 'Institut National de Santé Publique (INSP), Spécialité : SANTE PUBLIQUE option PREVENTION, Experte en VIH/SR/Genre', contact: '0707833438, tanokamelan@yahoo.fr' }
]
</script>

<style scoped>
.scientific-committee-section {
  background-color: #800000; /* Dark red background */
  background: url('/images/organigramme bg.png') no-repeat center center; background-size: cover;  color: white;
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

/* Styles responsives */
@media (max-width: 768px) {
  .members-table {
    display: block;
    overflow-x: auto; /* Ajoute un défilement horizontal */
    width: 100%;
  }

  .members-table thead {
    display: none; /* Masque l'en-tête du tableau */
  }

  .members-table tr {
    display: flex;
    flex-direction: column; /* Affiche chaque membre en bloc */
    margin-bottom: 10px; /* Ajoute un espacement entre les membres */
  }

  .members-table td {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: none; /* Retire les bordures pour une apparence plus propre */
    background-color: #ff849b; /* Arrière-plan pour les cellules */
  }

  .members-table td::before {
    content: attr(data-label); /* Utilise l'attribut data-label pour afficher le nom de la colonne */
    font-weight: bold;
    margin-right: 10px;
  }
}
</style>
