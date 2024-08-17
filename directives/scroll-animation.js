// directives/scroll-animation.js
export default {
  inserted: (el) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Ajouter la classe d'animation quand l'élément apparaît à l'écran
          el.classList.add('animate__animated', 'animate__fadeInLeft')
          // Arrêter d'observer après que l'animation est déclenchée
          observer.unobserve(el)
        }
      })
    })

    observer.observe(el)
  }
}
