<template>
  <div class="contact-page">
    <div class="container">
      <div class="row">
        <!-- Formulaire de contact à gauche -->
        <div class="col-md-6">
          <h1 class="main-heading" style="color: black; font-size: 32px; font-weight: bold;background: none;border: none;">
            Avez-vous une préoccupation ?
          </h1>
          <p style="color: black; font-size: 18px; margin-bottom: 30px;">
            Contactez-nous par e-mail en remplissant le formulaire ci-dessous :
          </p>

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
              <label for="telephone">Téléphone*</label>
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

        <!-- Photos à droite -->
        <div class="col-md-6 photo-container">
          <div class="photo-stack">
            <img src="images/contactimg2.jpg" alt="Photo" class="photo-middle">
          </div>
          <div class="thank-you-container">
            <img src="images/merci.jpg" alt="Photo" class="photo">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  components: {
    // Vous pouvez déclarer vos composants ici
  },
  data () {
    return {
      // Vous pouvez déclarer vos données ici
    }
  },
  head () {
    return {
      title: 'Contact',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Contact de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Association des Femmes Chercheures, Côte d\'Ivoire, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Contact de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.org'
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'AFEM-CI'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'Contact - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Contact de l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI)'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'twitter:card',
          name: 'twitter:card',
          content: 'summary_large_image'
        }
      ]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

.contact-page {
  padding: 50px 0;
}

.contact-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  margin-bottom: 20px;
}

.contact-form .form-group {
  margin-bottom: 15px;
}

.contact-form .form-group label {
  font-weight: bold;
}

.contact-form .form-group input,
.contact-form .form-group textarea {
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
}

.contact-form .btn-primary {
  background-color: #007bff;
  border: none;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
}

.photo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.photo-stack {
  position: relative;
  width: 100%;
  max-width: 350px;
}

.photo-stack img {
  width: 100%;
  display: block;
}

.photo-middle {
  position: absolute;
  top: 20px;
  left: 0px;
  width: 100%;
  border-radius: 10%;
  z-index: 2;
}

.thank-you-container {
  text-align: center;
  margin-top: 200px;
}
.photo{
  margin-top: 35px;
}
/* Media query pour les petits écrans */
@media (max-width: 768px) {
  .photo-stack img {
    margin-right: auto;
    margin-left: auto;
    display: block;
  }

  .photo-container {
    margin-left: 0; /* Réduire la marge à gauche pour centrer la photo */
  }
  .photo-middle{
    margin-left: 0;
  }
}
</style>
