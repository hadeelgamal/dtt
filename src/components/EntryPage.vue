<template>
  <div>
    <h3>Entry Page</h3>
    <div>
        <img :src="entry.image_url">
        <strong>{{ entry.name }}</strong>
        <p>{{ entry.about }}</p>
    </div>

    <ul>
        <li v-for="item of entries" v-bind:key="item.mal_id">
            <router-link :to="{path: '/entry/' + item.mal_id}">
                <img :src="item.image_url">
                <strong>{{item.name}}</strong>
            </router-link>
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'EntryPage',
  data () {
    return {
        entries: [],
        entry: [],
        errors: []
    }
  },
  watch: {
    $route () {
      this.fetchData();
    }
  },
  methods: {
      fetchData: function () {
          axios.get('https://api.jikan.moe/v3/character/' + this.$route.params.id)
          .then(response => {
              // JSON responses are automatically parsed.
              this.entry = response.data
          })
          .catch(e => {
              this.errors.push(e)
          })

          axios.get('https://api.jikan.moe/v3/manga/1/characters')
          .then(response => {
              // JSON responses are automatically parsed.
              this.entries = response.data.characters.filter(character => character.mal_id != this.$route.params.id).slice(0,3)
          })
          .catch(e => {
              this.errors.push(e)
          })
      }
  },
  created () {
    this.fetchData();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
