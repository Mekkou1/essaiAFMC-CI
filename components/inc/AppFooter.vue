<template>
  <div>
    <MarqueeVue />
    <div class="py-3 text-white" style="background: #02063F; margin: 0; padding: 0; overflow-x: hidden;">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center">
            <h1 style="background-color:transparent; border: none; color: white; font-size: 55px; font-weight: bold;" />

            <img src="images/logo-AFEM-CI2.png" class="logo-img blink-animation" alt="Logo">
            <p class="mt-2">
              Visites : <span id="counter">{{ visitCount }}</span>
            </p>
          </div>
          <div class="col-md-4 text-center text-white mt-3">
            <div class="d-flex align-items-center mb-3" style="text-align: left;">
              <img src="images/Localisation.png" class="fas fa-map-marker-alt mr-3">
              <p class="mb-0" style="font-size: 20px;">
                Siège: Ecole Normale Supérieure d'Abidjan
              </p>
            </div>
            <div class="d-flex align-items-center mb-3">
              <img src="images/mail.png" class="fas fa-envelope mr-3">
              <p class="mb-0">
                afemcci@gmail.com
              </p>
            </div>
            <div class="d-flex align-items-center mb-3">
              <img src="images/telephone.png" class="fas fa-phone mr-3">
              <p class="mb-0">
                0778094874 / 0789790600
              </p>
            </div>
          </div>
          <div class="col-md-4 text-center text-white">
            <h1 style="background: transparent; border: none; font-size: 35px;">
              Contactez-nous
            </h1>
            <form>
              <div class="form-group mb-3">
                <input id="nom" type="text" placeholder="Entrez votre nom complet*" class="form-control custom-input" required>
              </div>
              <div class="form-group mb-3">
                <input id="email" type="email" placeholder="Entrez votre mail*" class="form-control custom-input" required>
              </div>
              <div class="form-group mb-3">
                <textarea id="message" placeholder="Ecrivez votre message*" class="form-control custom-input" rows="3" required />
              </div>
              <button type="submit" class="btn btn-primary" style="background: none; border-radius: 20%; border-color: white;">
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>
      <div class="py-3 text-white" style="background: #02063F; margin: 0; padding: 0;">
        <div class="container">
          <div class="row">
            <div class="col-md-12 text-center">
              <div class="social-icons d-flex justify-content-center mb-3">
                <a href=" " target="_blank" class="social-icon">
                  <img src="images/facebook.png" class="fab fa-facebook-f" alt="facebook" style="width: 40px; height: 40px;">
                </a>
                <a href=" " target="_blank" class="social-icon">
                  <img src="images/instag.png" class="fab fa-instagram" alt="instagram" style="width: 40px; height: 40px;">
                </a>
                <a href=" " target="_blank" class="social-icon">
                  <img src="images/linkdin.png" class="fab fa-linkedin-in" alt="linkedin" style="width: 40px; height: 40px;">
                </a>
              </div>
              <p>© 2024 . Tous droits réservés. Réalisé par: <a href="https://www.facebook.com/levelprod001?mibextid=LQQJ4d">Levelprod</a> / Développé par: <a href="https://www.techartisan./">TechArtisan</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppFooter',
  data () {
    return {
      visitCount: 0
    }
  },
  mounted () {
    // Récupérer le nombre de visites du localStorage
    const visits = localStorage.getItem('visitCount')
    if (visits) {
      this.visitCount = parseInt(visits)
    }

    // Incrémenter le nombre de visites
    this.visitCount++

    // Stocker le nombre de visites dans le localStorage
    localStorage.setItem('visitCount', this.visitCount)
  }
}
</script>

<style scoped>
.footer-title {
  font-size: 1.5rem;
}

.footer-visits {
  font-size: 1rem;
}

.footer-copy {
  font-size: 1rem;
}

.logo-img {
  width: 200px;
  display: block;
  margin: 0 auto;
}

.form-group {
  align-items: center;
  color: white;
}

.custom-input {
  background-color: white;
  color: white;
  border: 1px solid white;
}

.d-flex {
  display: flex;
  align-items: center;
}

.mr-3 {
  margin-right: 1rem;
}

.mt-2 {
  margin-top: 10px;
}

.mb-3 {
  margin-bottom: 1rem;
}

.social-icons {
  display: flex;
  justify-content: center;
}

.social-icon {
  margin-left: 10px;
}

@media (max-width: 768px) {
  .footer-title {
    font-size: 1.2rem;
  }

  .footer-visits,
  .footer-copy {
    font-size: 0.9rem;
  }

  .logo-img {
    width: 100px;
  }

  .social-icons {
    justify-content: center;
  }

  .col-md-4 {
    text-align: center;
  }
}

@media (max-width: 576px) {
  .footer-title {
    font-size: 1rem;
  }

  .footer-visits,
  .footer-copy {
    font-size: 0.8rem;
  }

  .logo-img {
    width: 80px;
  }

  .social-icons {
    justify-content: center;
  }

  .col-md-4 {
    text-align: center;
  }
}

.container {
  position: relative;
}
</style>
