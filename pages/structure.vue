<template>
  <div>
    <!-- Hero Section -->
    <div>
      <HeroAbout />
      <h2 class="head-title">
        Structure et Fonctionnement
      </h2>
    </div>

    <div class="py-5 contener">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="main-heading">
            Structure et Fonctionnement
          </h2>
        </div>
        <div class="col-md-10  structure-body">
          <strong>STRUCTURE</strong>
          <p>L’Association des Femmes Chercheures de Côte d’Ivoire est constituée de six (6) organes :</p>
          <ul>
            <li>Assemblée Générale (AG)</li>
            <li>Bureau Exécutif (BE)</li>
            <li>Comité d’Orientation Scientifique (COS)</li>
            <li>Secrétariats de Sections (SS)</li>
            <li>Points Focaux (PF)</li>
            <li>Commissariat aux Comptes (CC)</li>
          </ul>
          <strong>FONCTIONNEMENT</strong>
          <p>
            <strong>Assemblée Générale :</strong> C’est l’organe suprême de l’Association qui en définit la politique générale et fixe les grandes orientations. Elle est composée de tous les membres. Elle élit le Président du Bureau Exécutif et les membres du Commissariat aux Comptes, fixe le taux des cotisations, discute et approuve le bilan moral et financier de l’exercice clos. Elle donne le quitus au Bureau Exécutif. L’Association tient une Assemblée Générale Ordinaire (AGO) une fois par semestre. La première AGO se tient dans la première semaine du mois de juin et la seconde à la mi-novembre de chaque année. Une Assemblée Générale Extraordinaire (AGE) peut être convoquée par :
            <ul>
              <li>La Présidente de l’Association</li>
              <li>Les 2/3 des membres inscrits</li>
              <li>Les Commissaires aux Comptes</li>
            </ul>
          </p>
          <p>
            <strong>Bureau Exécutif :</strong> c’est l’organe d’exécution des décisions de l’Assemblée Générale. Il comprend :
            <ul>
              <li>Une Présidente</li>
              <li>Une Vice-Présidente chargée de la communication, de la formation et de la recherche</li>
              <li>Une Vice-Présidente chargée du matériel, de la mobilisation des ressources et de la coopération</li>
              <li>Une Secrétaire à l’organisation</li>
              <li>Une Secrétaire adjointe à l’organisation</li>
              <li>Une Secrétaire administrative</li>
              <li>Une Secrétaire administrative adjointe</li>
              <li>Une Secrétaire scientifique</li>
              <li>Une Secrétaire scientifique adjointe</li>
              <li>Une Trésorière générale</li>
              <li>Une Trésorière générale adjointe</li>
            </ul>
            La Présidente est élue tandis que les autres membres de son bureau sont nommés par ses soins. Le Bureau Exécutif tient des réunions bimensuelles. La prise de décisions au cours de ces réunions se fait par voix de vote. En cas d’égalité de voix, l’avis de la Présidente est prépondérant. Le Bureau Exécutif est aidé dans sa tâche par deux (2) Commissaires aux Comptes élues et un collège de conseillères :
            <ul>
              <li>Une Conseillère Technique chargée des études prospectives</li>
              <li>Une Conseillère Technique chargée des projets scientifiques et administratifs</li>
              <li>Une Conseillère Technique chargée de la coopération et des partenariats</li>
              <li>Une Conseillère Technique chargée de la gouvernance</li>
            </ul>
            Les Conseillères, nommées par la Présidente, et les Commissaires aux Comptes ne font pas partie du bureau. Le mode d’élection ainsi que le rôle de chaque membre du bureau sont définis par le règlement intérieur.
          </p>
          <p>
            Peut être candidate à la Présidence :
            <ul>
              <li>Toute femme chercheure, enseignante-chercheure ou inventeure ivoirienne résidant en Côte d’Ivoire</li>
              <li>Tout membre de l’AFEMC-CI, ayant une ancienneté d’au moins trois ans</li>
              <li>Tout membre à jour de ses cotisations</li>
            </ul>
            Les modalités de fonctionnement de l’Assemblée Générale et du Bureau Exécutif sont précisées dans le règlement intérieur de l’Association.
          </p>
          <p>
            Le service de communication assiste l’Association et compte en son sein un représentant du BE. Ses membres sont proposés par le BE. Ils sont chargés d’élaborer le plan de communication, d’assurer la communication audiovisuelle, digitale et d’archiver toute la documentation liée à la communication.
          </p>
          <p>
            <strong>Comité d’Orientation Scientifique (COS) :</strong> c’est un organe consultatif dont les membres sont désignés par la Présidente de l’AFEMC-CI en fonction de leurs compétences.
          </p>
          <p>
            <strong>Secrétariats de Sections (SS) :</strong> ce sont des représentations de l’Association dans les institutions universitaires, les grandes écoles et les centres de recherche. Elles dépendent du Bureau Exécutif et ne peuvent mener des actions ou exécuter des programmes sans son accord ou sa validation.
          </p>
          <p>
            <strong>Points Focaux (PF) :</strong> ce sont des démembrements des SS au sein des UFR ou des Départements. Ils sont membres d’office du bureau des SS.
          </p>
          <p>
            <strong>Commissariat aux Comptes (CC) :</strong> c’est l’organe de contrôle. Il s’assure de la régularité des dépenses et de la déclaration de toutes les entrées financières. Il ne rend compte qu’à l’Assemblée Générale.
          </p>
        </div>
      </div>
    </div>
    <div class="py-5 contener" style="background-color: white;">
      <div class="row">
        <div class="col-md-12 text-center">
          <SliderVue />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Structure',
  head () {
    return {
      title: 'A propos',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'AFEM-CI, Femmes Chercheures, Enseignement supérieur, Recherche scientifique, Promotion professionnelle, Renforcement de capacités, Financements, Adhésion, Côte d\'Ivoire, Association, Femmes, Chercheures, Côte d\'Ivoire, AFEMCI'
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: 'A propos - AFEM-CI'
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: '/images/afemci-logo.png'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: 'https://afemci.ci/a-propos'
        },
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: 'A propos - AFEM-CI'
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: 'Découvrez l\'Association des Femmes Chercheures de Côte d\'Ivoire (AFEM-CI), une communauté de femmes engagées dans la recherche scientifique et l\'enseignement supérieur.'
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: '/assets/images/afemci-logo.png'
        }
      ]
    }
  }

}
</script>

<style scoped>
.head-title {
    background-color: #02063F;
    font-size: 2rem; /* Utiliser des unités relatives pour une meilleure réactivité */
    font-weight: bold;
    font-style: italic;
    width: 100%; /* Prendre toute la largeur du conteneur */
    text-align: center; /* Centrer le texte */
    margin: 0; /* Supprimer les marges par défaut */
    padding: 1rem 0; /* Ajouter un peu d'espace autour du texte */
    border-radius: 0; /* Assurer qu'il n'y a pas de bord arrondi */
    box-sizing: border-box; /* Inclure le padding dans la largeur totale */
}

.structure-body {
    border: 2.5px solid #FB0683;
    border-radius: 1.25rem; /* Bordures arrondies avec une unité relative */
    background: #1e1e1f;
    color: aliceblue;
    margin: 0 auto; /* Centrer le conteneur */
    padding: 1.25rem; /* Ajouter du padding avec des unités relatives */
    box-sizing: border-box; /* Inclure les bordures et le padding dans la largeur totale */
    max-width: 100%; /* Assurer que le conteneur ne dépasse pas la largeur de l'écran */
    overflow: hidden; /* Éviter les débordements */
}

@media (max-width: 768px) {
    .head-title {
        font-size: 1.5rem; /* Réduire la taille de la police pour les petits écrans */
        padding: 0.75rem 0; /* Réduire le padding */
    }

    .structure-body {
        padding: 1.5rem; /* Ajouter du padding supplémentaire */
        border-radius: 1rem; /* Réduire légèrement le rayon des bordures pour les petits écrans */
        margin: 0 1rem; /* Ajouter une marge pour éviter le débordement */
    }

    .structure-body ul {
        padding-left: 1rem; /* Ajouter du padding pour les listes */
    }
}

@media (max-width: 576px) {
    .head-title {
        font-size: 1.25rem; /* Réduire davantage la taille de la police */
        padding: 0.5rem 0; /* Réduire le padding */
    }

    .structure-body {
        padding: 1.75rem; /* Ajouter du padding supplémentaire pour les très petits écrans */
        border-radius: 0.75rem; /* Réduire davantage le rayon des bordures pour les très petits écrans */
        margin: 0 0.5rem; /* Ajouter une marge pour éviter le débordement */
    }

    .structure-body ul {
        padding-left: 1.25rem; /* Ajouter du padding pour les listes */
    }
}
</style>
