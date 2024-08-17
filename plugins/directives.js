// plugins/directives.js
import Vue from 'vue'
import scrollAnimation from '~/directives/scroll-animation'

// Enregistrer la directive globalement
Vue.directive('scroll-animation', scrollAnimation)
