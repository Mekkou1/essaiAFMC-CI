<template>
  <div>
    <div class="py-3 text-white" style="background: #FB0683;">
      <div class="container">
        <div class="row">
          <div class="col-md-4 text-center">
            <h1 style="background-color:transparent; color: white; size: 65px bold;">
              AFEMC-CI
            </h1>
            <img src="images/logo-AFEM-CI2.png" class="logo-img blink-animation" alt="Logo">
            <p class="mt-2">
              Visites : <span id="counter">0</span>
            </p>
          </div>
          <div class="col-md-4 text-center text-white mt-3">
            <div class="d-flex align-items-center mb-3" style="margin-top: 40px; text-align: left;text-size-adjust: 30px;">
              <i class="fas fa-map-marker-alt mr-3" />
              <p class="mb-0">
                Abidjan Cocody Angré<br> Félix Ouphouet Bouagny<br> Université
              </p>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-envelope mr-3" />
              <p class="mb-0">
                afemc-ci@yahoo.fr
              </p>
            </div>
            <div class="d-flex align-items-center mb-3">
              <i class="fas fa-phone mr-3" />
              <p class="mb-0">
                0565668260 / 0707743501
              </p>
            </div>
          </div>
          <div class="col-md-3 text-right text-white">
            <h1 style="background: transparent; border: none; font-size: 35px;">
              Contactez-nous
            </h1>
            <form>
              <div class="form-group mb-3">
                <input id="nom" type="text" placeholder="Entrez votre nom complet*" class="form-control custom-input" required>
              </div>
              <div class="form-group mb-3">
                <input id="email" type="email" placeholder="Entrez votre mail* " class="form-control custom-input" required>
              </div>
              <div class="form-group mb-3">
                <textarea id="message" placeholder="Ecrivez votre message*" class="form-control custom-input" rows="3" required />
              </div><br>
              <button type="submit" class="btn btn-primary" style="background: none; border-radius: 20%; border-color: white;">
                Envoyer
              </button>
            </form>
          </div>
        </div>
        <div class="py-3 text-white" style="background: #FB0683;">
          <div class="row">
            <div class="col-md-12 text-center">
              <p>© 2024 . Tous droits réservés. Réaliser par: <a href="https://www.techartisan./">TechArtisan</a> </p>
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
  components: {
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
  width: 150px;
  display: block;
  margin: 0 auto;
}

.form-group {
  align-items: center;
  color: black;
}

.custom-input {
  background-color: black;
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
}
</style>
