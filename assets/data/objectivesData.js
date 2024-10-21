// data/objectivesData.js

export const objectivesData = {
  objectivesGroups: [
    {
      title: 'Promotion et Valorisation des Compétences des Femmes Chercheures et Enseignants Chercheures',
      objectives: [
        'Valoriser et mettre à la disposition de la communauté nationale et internationale les compétences et l’expertise des femmes chercheures ;',
        'Créer un cadre de rencontres scientifiques, de solidarité et d’échanges entre les femmes chercheures et les autres acteurs de la communauté nationale et internationale ;',
        'Développer un esprit d’équipe dans le monde des chercheures.'
      ],
      expanded: false
    },
    {
      title: 'Renforcement de capacités et Développement Professionnel',
      objectives: [
        'Assurer le renforcement des capacités des femmes chercheures dans leurs domaines de compétences et en explorer d’autres ;',
        'Contribuer à la sensibilisation, à la formation et à l’éducation des femmes et des jeunes filles.'
      ],
      expanded: false
    },
    {
      title: 'Recherches de Financements et Soutien aux Projets',
      objectives: [
        'Rechercher les financements pour les projets mono ou pluridisciplinaires en faveur des femmes.'
      ],
      expanded: false
    }
  ],
  backgroundImages: [
    require('@/static/images/TROPHEE.jpeg'), // Image pour la première carte
    require('@/static/images/climat.jpg'), // Image pour la deuxième carte
    require('@/static/images/microscope.png') // Image pour la troisième carte
  ]
}
