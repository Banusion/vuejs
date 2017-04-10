<template>
  <div id="app">
  	<carousel>
  		<carousel-slide>
  			<img src="http://lorempicsum.com/futurama/630/300/1" alt="">
  		</carousel-slide>
  		<carousel-slide>
  			<img src="http://lorempicsum.com/futurama/630/300/2" alt="">
  		</carousel-slide>
  	</carousel>
    <todos></todos>
  </div>
</template>

<script>
import todos from './components/Todos'
import carousel from './components/carousel/carousel'
import carouselSlide from './components/carousel/carouselSlide'

export default {
  components: {
    todos,
    carousel,
    carouselSlide
  }
}
</script>
