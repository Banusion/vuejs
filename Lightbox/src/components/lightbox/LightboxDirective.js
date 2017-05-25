import Vue from 'vue'
import store from './LightboxStore.js'

Vue.directive('lightbox', {
  bind (el, binding) {
    let index = store.addImage(el.getAttribute('href'))
    el.addEventListener('click', function (e) {
      e.preventDefault()
      store.open(index)
      // we need to opend image open(el.getAttribute('href'))
    })
  }
})
