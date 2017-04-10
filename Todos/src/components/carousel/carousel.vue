<template>
  <section class="todoapp">
    <header class="header">
      <h1>Carousel</h1>
      <div class="carousel">
        <slot></slot>
        <button class="carousel__nav carousel__next" @click.prevent="next"></button>
        <button class="carousel__nav" @click.prevent="prev"></button>
      </div>
    </header>
  </section>
</template>

<script>
  export default {
    data () {
      return {
        index: 0,
        slides: []
      }
    },
    computed: {
      slidesCount () { return this.slides.length }
    },
    mounted () {
      this.slides = this.$children
      this.slides.forEach((slide, i) => {
        slide.index = i
      })
    },
    methods: {
      next () {
        this.index++
        if (this.index >= this.slidesCount) {
          this.index = 0
        }
      },
      prev () {
        this.index--
        if (this.index < 0) {
          this.index = this.slidesCount - 1
        }
      }
    }
  }
</script>

<style>
  .carousel {
    position: relative;
    text-align: center;
  }

  .carousel__nav {
    position: absolute;
    top: 50%;
    margin-top: -31px;
    left: 10px;
    background: url(previous.png);
    width: 63px;
    height: 63px;
  }

  .carousel__nav.carousel__next {
    right: 10px;
    left: auto;
    background-image: url(next.png);
  }
</style>
