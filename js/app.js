new Vue({
	el: '#app',
	data: {
		message: 'Salut les gens',
		link: 'http//www.homeserve.fr',
		yo: 'ça marche ;) ',
		success: true,
		persons: ['Manu', 'Cynthia', 'Mina', 'Elena', 'Luna']
	}, 

	methods: {
		close:function() {
			this.success = false
			this.message = "Fermé"
		}
	}
})