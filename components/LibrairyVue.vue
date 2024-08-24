<template>
  <div class="library">
    <h2 class="mb-4">
      Bibliothèque
    </h2>

    <div class="mb-5">
      <h5 style="background-color: tranparent;">
        Rapports d'activités
      </h5>
      <ul class="list-group">
        <li v-for="report in activityReports" :key="report.id" class="list-group-item d-flex justify-content-between align-items-center">
          {{ report.title }}
          <div>
            <a :href="report.url" target="_blank" :download="getFileName(report.url)" class="btn btn-sm btn-primary mr-2">Télécharger</a>
          </div>
        </li>
      </ul>
    </div>

    <div>
      <h5>Résultats de recherche</h5>
      <ul class="list-group">
        <li v-for="result in researchResults" :key="result.id" class="list-group-item d-flex justify-content-between align-items-center">
          {{ result.title }}
          <div>
            <a :href="result.url" target="_blank" :download="getFileName(result.url)" class="btn btn-sm btn-primary mr-2">Télécharger</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LibraryVue',
  data () {
    return {
      activityReports: [
        { id: 1, title: 'TDR Investiture', url: '/documents/TDR INVESTITURE AFEMCCI 2.docx' },
        { id: 2, title: 'Commission Organisation Investiture', url: '/documents/INVESTITURE COMMISSION ORGANISATION.docx' },
        { id: 3, title: "Programme définitif de la cérémonie d'investiture", url: '/documents/PROGRAMME DEFINITIF DE LA CEREMONIE INVESTITURE AFFEMCCI 2022.docx' },
        { id: 4, title: 'Investiture: Liste des personnalités invités', url: '/documents/LISTE DES PERSONALITES INVITES INVESTITURE.docx' },
        { id: 5, title: "Atelier sur l'attractivité des filières scientifiques pour les femmes", url: '/documents/Rapport final de mission.docx' }
        // Ajoutez d'autres rapports ici
      ],
      researchResults: [
        // Ajoutez d'autres résultats de recherche ici
      ]
    }
  },
  methods: {
    getFileName (url) {
      const parts = url.split('/')
      return parts[parts.length - 1]
    }
  }
}
</script>

<style scoped>
.library {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
.btn{
  background-color: #FB0683;
}

</style>
