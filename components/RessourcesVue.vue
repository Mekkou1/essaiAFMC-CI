<template>
  <div class="py-5 contener">
    <div class="row">
      <div class="col-md-12 text-center">
        <h2 class="main-heading">
          Nos Ressources
        </h2>
      </div>
      <div class="ressources">
        <ul style="list-style-position: inside; display: inline-block; text-align: left;">
          <li>Les ressources de l’AFEMC-CI proviennent des :</li><br>
          <ul>
            <li><strong>Droits d’adhésion :</strong></li>
            <ul>
              <li>Femmes chercheures : 10 000 francs CFA</li>
              <li>Masterantes et Doctorantes : 5000 francs CFA</li>
            </ul>
            <li><strong>Cotisations annuelles des membres :</strong></li>
            <ul>
              <li>Femmes chercheures : 12 000 francs CFA / an</li>
              <li>Masterantes et Doctorantes : 6000 francs CFA / an</li>
            </ul>
            <li><strong>Subventions, aides, dons et legs accordés à l’Association</strong></li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RessourcesVue'

}
</script>

<style scoped>
.ressources {
  text-align: center;
  color: white;
  font-size: 20px;
  padding: 40px;
  height: 100%; /* Ajusté pour prendre en compte le contenu */
  margin-top: 10px;
  background-image: linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 0, 0.5)), url('/images/ressources.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden; /* Empêche tout débordement */
}

.ressources-list {
  list-style-position: inside;
  display: inline-block;
  text-align: left;
  padding-left: 0;
  margin: 0;
  max-width: 100%; /* S'assure que la liste ne dépasse pas la largeur du conteneur */
}

.ressources-list ul {
  padding-left: 20px; /* Indentation de la sous-liste */
  margin: 0;
}

.ressources-list li {
  margin-bottom: 10px;
}

.contener {
  overflow-x: hidden; /* Empêche le défilement horizontal pour toute la section */
}
</style>
