<template>
	<div>
		<!-- <transition name="fade" appear> -->
		<transition :css="false" @enter="enter" @leave="leave">
			<div class="ui message success" v-if="visible2">
				test
			</div>
		</transition>
		<button @click="toggle2">Toggle</button>
	</div>
</template>
<template>
	<div>
		<transition name="fade" appear mode="out-in">
			<div class="ui message success" v-if="visible" key="visible">
				To Be
			</div>
			<div class="ui message success" v-else key="invisible">
				Or Not To Be
			</div>
		</transition>
		<button @click="toggle">Toggle</button>
		<ul>
			<transition-group name="fade" tag="ul">
				<li v-for="item in items" :key="item"> {{ item }}</li>
			</transition-group>
		</ul>
		<button class="ui button" @click="add">Ajout élément </button>
		<button class="ui button error" @click="shuffle">Mix élément </button>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				visible: true,
				visible2: true,
				items: [1,2,3,4,5,6]
			}
		},
		methods: {
			add: function () {
				this.items.push(Math.random())
			},
			shuffle: function () {
				this.items = [2,3,5,6]
			},
			enter: function (el, done) {
				$(el).hide().slideDown(500, done)
			},
			leave: function (el, done) {
				$(el).show().slideUp(500, done)
			},
			toggle : function () {
				this.visible = !this.visible
			},
			toggle2 : function () {
				this.visible2 = !this.visible2
			}
		}
	}
</script>

<style>
	.fade-enter-active, .fade-leave-active {
		transition: opacity 1s, transform 1s;
	}

	.fade-enter, .fade-leave-active {
		opacity: 0;
		transform: translateX(20px);
	}
</style>