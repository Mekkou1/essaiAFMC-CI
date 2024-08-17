<template>
  <div>
    <!-- Governance Section -->
    <section id="governance" class="py-5">
      <div class="container">
        <!-- Executive Board -->
        <div class="row mt-4">
          <div class="col-md-12">
            <h3 class="text-center">
              Bureau Exécutif
            </h3>
            <div class="executive-board">
              <div class="row">
                <!-- Loop through executive members -->
                <div v-for="(member, index) in executiveMembers" :key="index" class="col-md-3">
                  <div class="executive-member">
                    <img :src="member.photo" alt="Membre du Bureau" class="img-fluid rounded-circle">
                    <h5 class="mt-2">
                      {{ member.name }}
                    </h5>
                    <p>{{ member.position }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Accordions -->
        <div id="accordionPanelsStayOpenExample" class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                <strong>STRUCTURE ET FONCTIONNEMENT DE L'AFEM-CI</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
              <div class="accordion-body">
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
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <strong>STATUTS ET REGLEMENTS INTERIEUR</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse">
              <div class="accordion-body">
                <strong>En cours de redaction.</strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <strong>ORGANIGRAMME</strong>
              </button>
            </h2>
            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse">
              <div class="accordion-body">
                <img src="images/organigramme.png" alt="Organizational Chart" style="max-width: 100%; height: auto;">
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-Four"
            >
              <strong>RESSOURCES DE L’ASSOCIATION</strong>
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse">
            <div class="accordion-body">
              <ul>
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      executiveMembers: [
        { name: 'Dr(MC) NOBAH KACOU-WODJE ', position: 'Présidente', photo: '/images/identite.jpeg' },
        { name: 'Dr(MC) OUATTARA FATOU SCHERAZADE EPSE SORO', position: 'Vice-Présidente', photo: '/images/identite.jpeg' },
        { name: 'Dr(MC) SEU NETTO MIREILLE ANOI ', position: 'Secrétaire à l’organisation', photo: '/images/identite.jpeg' },
        { name: 'Dr (MC) BEDE AFFOUE LUCIE BAGAYOKO', position: 'Secrétaire adjointe à l’organisation', photo: '/images/identite.jpeg' },
        { name: 'Dr(MC) TAPE PULCHERIE KOFFI', position: 'Secrétaire administrative', photo: '/images/identite.jpeg' },
        { name: 'Dr(MCA) MELANIE TIA', position: 'Secrétaire administrative adjointe', photo: '/images/identite.jpeg' },
        { name: 'Dr(MC) ADAYE AKOUA ASUINTA ', position: 'Secrétaire scientifique', photo: '/images/identite.jpeg' },
        { name: 'Dr(MR) MGBESSO NADEGE KOUADIO', position: 'Secrétaire scientifique adjointe', photo: '/images/identite.jpeg' },
        { name: 'Dr AMALACHI N’CHO YAYO ', position: 'Trésorière générale', photo: '/images/identite.jpeg' },
        { name: 'Dr OUATTARA ANNETTE ', position: 'Trésorière générale adjointe', photo: '/images/identite.jpeg' }
      ]
    }
  }
}
</script>

<style scoped>
#governance {
  background: #f8f9fa;
  padding: 50px 0;
}

#governance h2 {
  margin-bottom: 30px;
}

.executive-board {
  background: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.executive-member {
  text-align: center;
  margin-bottom: 20px;
}

.executive-member img {
  width: 100px;
  height: 100px;
}

.card-header {
  background-color: #007bff;
  color: #fff;
}

.card-header .btn-link {
  color: #fff;
}

.card-body {
  padding: 20px;
}
</style>
