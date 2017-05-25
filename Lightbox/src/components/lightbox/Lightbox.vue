
<style src="./Lightbox.scss" lang="scss"></style>

<template>
  <div class="lightbox" v-if="image" @click="close">
    <lightbox-image :image="image"></lightbox-image>
    <div class="lightbox__close" @click="close">
      
    </div>
  </div>
</template>

<script>
  import './LightboxDirective.js'
  import store from './LightboxStore.js'
  import LightboxImage from './LightboxImage.vue'
  export default {
    components: { LightboxImage },
    data () {
      return {
        state: store.state
      }
    },
    methods: {
      close () {
        store.close()
      }
    },
    computed: {
      image () {
        if (this.state.index !== false) {
          return this.state.images[this.state.index]
        }
      }
    }
  }
</script>
