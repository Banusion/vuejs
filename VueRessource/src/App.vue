<template>
  <div id="app">
  <div class="ui active dimmer" v-if="loading">
    <div class="ui loader"></div>
  </div>
    <div class="ui four column grid">
      <div class="column" v-for="user in users">
        <div class="ui card">
          <div class="content">
            <div class="header">
              <input type="text" v-model="user.name" style="widht:100%">
            </div>
            <div class="meta">
              <a>Friend</a>
            </div>
            <div class="description">
              {{ user.address.street }}<br>
              {{ user.address.zipcode }} {{ user.address.city }} <br>
            </div>
          </div>
          <div class="extra content">
            <div class="ui two buttons">
              <div class="ui basic green button" @click="save(user)">Modifier</div>
              <div class="ui basic red button" @click="destroy(user)">Supprimer</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [],
      loading: false
    }
  },
  mounted () {
    this.$http.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      this.users = response.data
    }, (response) => {
      console.log('error', response)
    })
  },
  methods: {
    save (user) {
      this.loading = true
      this.$http.put('https://jsonplaceholder.typicode.com/users/' + user.id, {
        name: user.name
      }).then((response) => {
      }, (response) => {
        console.log('error', response)
      }).then(_ => {
        this.loading = false
      })
    },
    destroy (user) {
      this.loading = true
      this.$http.delete('https://jsonplaceholder.typicode.com/users/' + user.id)
      .then((response) => {
        this.users = this.users.filter(u => u !== user)
      }, (response) => {
        console.log('error', response)
      }).then(_ => {
        this.loading = false
      })
    }
  }
}
</script>

