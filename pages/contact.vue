<template>
  <div>
    <div class="py-5 contener" style="background: url('/images/hero-bg.png') no-repeat center center / cover;">
      <div class="row">
        <div class="col-md-12 text-center" />
      </div>
      <div class="py-5 container">
        <div class="row">
          <div class="col-md-6 info-container">
            <h2 style="background-color: transparent; color: white;">
              Ecrivez-nous
            </h2>
            <p>Par e-mail :</p>
            <p>En utilisant le formulaire ci-contre vous contacterez le secrétariat de l'association.</p>
            <p>Par courrier postal :</p>
            <address>
              <strong>AFEM-CI</strong><br>
              Ecole Normale Supérieure (ENS),<br>
              Bâtiment deuxième étage (C)<br>
              Abidjan Cocody<br>
              08 BP 10 Abidjan 08
            </address>
          </div>
          <div class="col-md-6 form-container">
            <form>
              <div class="form-group">
                <label for="nom">Nom*</label>
                <input id="nom" type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="prenom">Prénom*</label>
                <input id="prenom" type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="email">Email*</label>
                <input id="email" type="email" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="telephone">Téléphone</label>
                <input id="telephone" type="tel" class="form-control">
              </div>
              <div class="form-group">
                <label for="objet">Objet*</label>
                <input id="objet" type="text" class="form-control" required>
              </div>
              <div class="form-group">
                <label for="message">Votre message*</label>
                <textarea id="message" class="form-control" rows="5" required />
              </div>
              <div class="form-group form-check">
                <input id="consent" type="checkbox" class="form-check-input" required>
                <label class="form-check-label" for="consent">J’accepte que l’association AECSE collecte et utilise les données personnelles que je renseigne dans ce formulaire dans le but de m’envoyer des informations en accord avec notre politique de protection des données personnelles.</label>
              </div>
              <div class="text-right">
                <button type="submit" class="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head () {
    return {
      title: 'Contactez-nous',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Femmes Chercheures, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements, Adhésion, Côte d\'Ivoire, Association, Femmes, Chercheures, Côte d\'Ivoire, AFEMCI'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.ci/contact'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contactez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI) pour plus d\'informations sur nos activités et nos objectifs.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/afemci-logo.png'
        }
      ]
    }
  }

}
</script>

<style scoped>
.info-container {
  background-color: rgba(0, 123, 255, 0.7); /* Bleu avec 70% d'opacité */
  color: white;
  padding: 20px;
}

.form-container {
  background-color: rgba(111, 66, 193, 0.7); /* Violet avec 70% d'opacité */
  color: white;
  padding: 20px;
}

@media (forced-colors: active) {
  /* styles pour le mode forced-colors */
  .info-container {
    background-color: ButtonFace;
    color: ButtonText;
  }
  .form-container {
    background-color: ButtonFace;
    color: ButtonText;
  }
}
</style>
